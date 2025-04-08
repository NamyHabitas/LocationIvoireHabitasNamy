import { useRoute } from "wouter";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import PropertyDetails from "@/components/property-details";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Property() {
  // Get the property ID from the URL
  const [match, params] = useRoute<{ id: string }>("/property/:id");
  const propertyId = match ? parseInt(params.id) : undefined;
  
  const { data: property, isLoading } = useQuery({
    queryKey: propertyId ? [`/api/properties/${propertyId}`] : [],
    enabled: !!propertyId,
  });
  
  if (!match || !propertyId) {
    return (
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-8 text-center">
              <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
              <h1 className="text-2xl font-heading font-bold text-neutral-800 mb-2">
                Propriété non trouvée
              </h1>
              <p className="text-neutral-600">
                L'identifiant de la propriété est invalide ou manquant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>
          {isLoading 
            ? "Chargement de la propriété... | IvoireHabitat" 
            : `${property?.title || "Propriété"} | IvoireHabitat`}
        </title>
      </Helmet>
      
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4">
          <PropertyDetails propertyId={propertyId} />
        </div>
      </section>
    </>
  );
}
