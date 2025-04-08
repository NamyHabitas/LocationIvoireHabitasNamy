import { useSearch } from "wouter";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PropertySearch from "@/components/property-search";
import PropertiesGrid from "@/components/properties-grid";

export default function Properties() {
  const search = useSearch();
  const [location, setLocation] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();
  const [maxPrice, setMaxPrice] = useState<string | undefined>();
  
  // Parse the search params on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const locationParam = searchParams.get("location");
    const typeParam = searchParams.get("type");
    const maxPriceParam = searchParams.get("maxPrice");
    
    setLocation(locationParam || undefined);
    setType(typeParam || undefined);
    setMaxPrice(maxPriceParam || undefined);
  }, [search]);
  
  // Get page title based on filters
  const getPageTitle = () => {
    let title = "Toutes les propriétés";
    
    if (type) {
      switch (type) {
        case "apartment":
          title = "Appartements";
          break;
        case "house":
          title = "Maisons";
          break;
        case "commercial":
          title = "Locaux commerciaux";
          break;
        case "land":
          title = "Terrains";
          break;
      }
    }
    
    if (location) {
      title += ` à ${location}`;
    }
    
    return title;
  };
  
  return (
    <>
      <Helmet>
        <title>{getPageTitle()} | IvoireHabitat</title>
      </Helmet>
      
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-neutral-800 mb-2">
              {getPageTitle()}
            </h1>
            <p className="text-neutral-600">
              Trouvez la propriété idéale parmi notre sélection de biens à louer
            </p>
          </div>
          
          <PropertySearch />
          
          <PropertiesGrid 
            location={location} 
            type={type} 
            maxPrice={maxPrice} 
          />
        </div>
      </section>
    </>
  );
}
