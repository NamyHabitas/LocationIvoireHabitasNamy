import Hero from "@/components/hero";
import FeaturedProperties from "@/components/featured-properties";
import LocationCategories from "@/components/location-categories";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { Link } from "wouter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <LocationCategories />
      <Features />
      <Testimonials />
      
      {/* Contact Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-heading font-bold mb-4">Contactez-nous</h2>
              <p className="mb-6">
                Vous avez des questions ou besoin d'aide pour trouver votre logement idéal ? Notre équipe est là pour vous accompagner.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-xl mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Notre adresse</h4>
                    <p>Rue des Jardins, Cocody-Ambassades, Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-xl mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Téléphone</h4>
                    <p>+225 07 07 07 07 07</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-xl mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p>habitas.namy@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-xl mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Horaires d'ouverture</h4>
                    <p>Lundi - Vendredi: 8h à 18h | Samedi: 9h à 14h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <ContactForm 
                  title="Envoyez-nous un message" 
                  className="bg-white rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Property Detail Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">
              Découvrez nos propriétés disponibles
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Parcourez notre sélection de biens à louer dans les meilleures zones de Côte d'Ivoire
            </p>
            <Link href="/properties">
              <Button size="lg" className="mt-6">
                Voir toutes les propriétés
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
