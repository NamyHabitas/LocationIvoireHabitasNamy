import { useQuery } from "@tanstack/react-query";
import {
  MapPin,
  Home,
  Droplet,
  Ruler,
  Car,
  ShieldCheck,
  Wifi,
  Check,
  Phone,
  Mail
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import ContactForm from "./contact-form";
import { Property } from "@shared/schema";

interface PropertyDetailsProps {
  propertyId: number;
}

export default function PropertyDetails({ propertyId }: PropertyDetailsProps) {
  const { toast } = useToast();
  const { data: property, isLoading, isError } = useQuery<Property>({
    queryKey: [`/api/properties/${propertyId}`],
    retry: 1,
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible de charger les détails de la propriété.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Gallery skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="md:col-span-2 h-96 rounded-lg overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="grid grid-rows-2 gap-4 h-96">
            <Skeleton className="w-full h-full rounded-lg" />
            <Skeleton className="w-full h-full rounded-lg" />
          </div>
        </div>
        
        {/* Property info skeleton */}
        <div className="p-6">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
            <div className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-48" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-36 w-full" />
            </div>
            <div>
              <Skeleton className="h-80 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !property) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">Propriété non trouvée</h3>
          <p className="text-neutral-600">Cette propriété n'existe pas ou a été retirée.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Property Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="md:col-span-2 h-96 rounded-lg overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-rows-2 gap-4 h-96">
          {property.images.slice(1, 3).map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={`${property.title} - Image ${index + 2}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {property.images.length === 1 && (
            <>
              <div className="rounded-lg overflow-hidden bg-neutral-200 flex items-center justify-center">
                <p className="text-neutral-500">Pas d'image disponible</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-neutral-200 flex items-center justify-center">
                <p className="text-neutral-500">Pas d'image disponible</p>
              </div>
            </>
          )}
          {property.images.length === 2 && (
            <div className="rounded-lg overflow-hidden bg-neutral-200 flex items-center justify-center">
              <p className="text-neutral-500">Pas d'image disponible</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Property Information */}
      <div className="p-6">
        <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-heading font-bold text-neutral-800">{property.title}</h3>
            <p className="text-neutral-600 flex items-center">
              <MapPin size={16} className="mr-1" /> {property.neighborhood}, {property.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              {property.price.toLocaleString()} FCFA
              <span className="text-sm font-normal text-neutral-600">/mois</span>
            </p>
            <p className="text-neutral-600 text-sm">
              {property.availableImmediately ? "Disponible immédiatement" : "Disponibilité à confirmer"}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-heading font-semibold text-neutral-800 mb-3">Description</h4>
            <p className="text-neutral-600 mb-4">
              {property.description}
            </p>
            
            <h4 className="text-lg font-heading font-semibold text-neutral-800 mb-3">Caractéristiques</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
              {property.bedrooms !== undefined && property.bedrooms > 0 && (
                <div className="flex items-center text-neutral-600">
                  <Home className="mr-2 text-primary h-5 w-5" />
                  <span>{property.bedrooms} {property.bedrooms > 1 ? 'chambres' : 'chambre'}</span>
                </div>
              )}
              {property.bathrooms !== undefined && property.bathrooms > 0 && (
                <div className="flex items-center text-neutral-600">
                  <Droplet className="mr-2 text-primary h-5 w-5" />
                  <span>{property.bathrooms} {property.bathrooms > 1 ? 'salles de bain' : 'salle de bain'}</span>
                </div>
              )}
              <div className="flex items-center text-neutral-600">
                <Ruler className="mr-2 text-primary h-5 w-5" />
                <span>{property.area} m²</span>
              </div>
              {property.parking && (
                <div className="flex items-center text-neutral-600">
                  <Car className="mr-2 text-primary h-5 w-5" />
                  <span>Parking</span>
                </div>
              )}
              <div className="flex items-center text-neutral-600">
                <ShieldCheck className="mr-2 text-primary h-5 w-5" />
                <span>Gardien 24/7</span>
              </div>
              <div className="flex items-center text-neutral-600">
                <Wifi className="mr-2 text-primary h-5 w-5" />
                <span>Internet</span>
              </div>
            </div>
            
            <h4 className="text-lg font-heading font-semibold text-neutral-800 mb-3">Équipements</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-neutral-600">
              {property.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <Check className="mr-2 text-green-600 h-5 w-5" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            {/* Contact Form */}
            <ContactForm 
              propertyId={property.id} 
              title="Contacter pour ce bien" 
            />
            
            {/* Agent Info */}
            <div className="mt-6 bg-neutral-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                    alt="Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-heading font-medium text-neutral-800">Sophie Koné</h5>
                  <p className="text-neutral-600 text-sm">Agent Immobilier</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <a href="tel:+2250707070707" className="flex items-center text-neutral-700 hover:text-primary">
                  <Phone size={16} className="mr-2" />
                  <span>+225 07 07 07 07 07</span>
                </a>
                <a href="mailto:contact@ivoirehabitat.ci" className="flex items-center text-neutral-700 hover:text-primary">
                  <Mail size={16} className="mr-2" />
                  <span>contact@ivoirehabitat.ci</span>
                </a>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-6 rounded-lg overflow-hidden h-64 bg-neutral-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-neutral-400 mx-auto mb-2" />
                <p className="text-neutral-600">Carte du quartier {property.neighborhood} - {property.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
