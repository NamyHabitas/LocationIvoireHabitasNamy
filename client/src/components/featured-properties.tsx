import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PropertyCard from "./property-card";
import { useProperties } from "@/hooks/use-properties";

export default function FeaturedProperties() {
  const { data: properties, isLoading, isError } = useProperties({ queryKey: ['/api/properties/featured'] });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-neutral-800">Propriétés en Vedette</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md h-96 animate-pulse">
                <div className="h-56 bg-neutral-200"></div>
                <div className="p-4 space-y-4">
                  <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                  <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                  <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">Propriétés en Vedette</h2>
            <p className="text-red-500">Erreur lors du chargement des propriétés. Veuillez réessayer plus tard.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-neutral-800">Propriétés en Vedette</h2>
          <Link href="/properties" className="text-primary hover:text-primary-dark font-medium flex items-center">
            Voir tout <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
