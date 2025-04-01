import { useState } from "react";
import { Link } from "wouter";
import { Heart, MapPin, Home as HomeIcon, Ruler, Car } from "lucide-react";
import { Property } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 sm:h-56">
        <img 
          src={property.images?.length ? property.images[0] : 'https://placehold.co/600x400?text=Property+Image'} 
          alt={property.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className={`text-white text-xs font-bold px-2 py-1 rounded ${
            property.type === 'commercial' ? 'bg-green-600' : 'bg-primary'
          }`}>
            {property.type === 'commercial' ? 'Commercial' : 'Location'}
          </span>
        </div>
        <button 
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow text-neutral-700 hover:text-primary transition-colors" 
          aria-label="Ajouter aux favoris"
          onClick={toggleFavorite}
        >
          <Heart className={isFavorite ? "fill-primary text-primary" : ""} size={16} />
        </button>
      </div>
      
      <div className="p-4 flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-lg font-heading font-semibold text-neutral-800 line-clamp-1 mb-1 sm:mb-0">{property.title}</h3>
          <span className="text-primary font-bold whitespace-nowrap">{property.price.toLocaleString()} FCFA</span>
        </div>
        
        <p className="text-neutral-600 mb-3 text-sm flex items-center">
          <MapPin size={16} className="mr-1 flex-shrink-0" /> 
          <span className="line-clamp-1">{property.neighborhood}, {property.location}</span>
        </p>
        
        <div className="flex flex-wrap items-center text-sm text-neutral-600 gap-4 border-t border-neutral-200 pt-3">
          {property.bedrooms && property.bedrooms > 0 && (
            <div className="flex items-center">
              <HomeIcon size={16} className="mr-1 flex-shrink-0" />
              <span>{property.bedrooms} pièces</span>
            </div>
          )}
          <div className="flex items-center">
            <Ruler size={16} className="mr-1 flex-shrink-0" />
            <span>{property.area} m²</span>
          </div>
          {property.parking && (
            <div className="flex items-center">
              <Car size={16} className="mr-1 flex-shrink-0" />
              <span>Parking</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="px-4 pb-4 mt-auto">
        <Link href={`/property/${property.id}`} className="block w-full">
          <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
            Voir détails
          </Button>
        </Link>
      </div>
    </div>
  );
}
