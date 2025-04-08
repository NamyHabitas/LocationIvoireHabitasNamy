import { useMemo } from "react";
import PropertyCard from "./property-card";
import { useProperties } from "@/hooks/use-properties";
import { Property } from "@shared/schema";

interface PropertiesGridProps {
  location?: string;
  type?: string;
  maxPrice?: string;
}

export default function PropertiesGrid({ location, type, maxPrice }: PropertiesGridProps) {
  const { data: properties, isLoading, isError } = useProperties({ 
    queryKey: ['/api/properties']
  });
  
  // Filter properties based on props
  const filteredProperties = useMemo(() => {
    if (!properties) return [];
    
    return properties.filter(property => {
      const locationMatch = !location || property.location === location;
      const typeMatch = !type || property.type === type;
      const priceMatch = !maxPrice || property.price <= parseInt(maxPrice);
      
      return locationMatch && typeMatch && priceMatch;
    });
  }, [properties, location, type, maxPrice]);
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((index) => (
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
    );
  }
  
  if (isError) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Erreur lors du chargement des propriétés. Veuillez réessayer plus tard.</p>
      </div>
    );
  }
  
  if (filteredProperties.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-neutral-600">Aucune propriété trouvée correspondant à vos critères.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProperties.map((property: Property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
