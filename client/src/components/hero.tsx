import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Hero() {
  const [, setLocation2] = useLocation();
  
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  
  const handleSearch = () => {
    let queryParams = [];
    
    if (location && location !== "all") queryParams.push(`location=${encodeURIComponent(location)}`);
    if (propertyType && propertyType !== "all") queryParams.push(`type=${encodeURIComponent(propertyType)}`);
    if (budget && budget !== "all") queryParams.push(`maxPrice=${encodeURIComponent(budget)}`);
    
    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    setLocation2(`/properties${queryString}`);
  };
  
  return (
    <section className="relative bg-neutral-800 min-h-[500px] lg:h-[500px] flex items-center py-12 lg:py-0">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603392840788-daa326ba288c?q=80&w=1974&auto=format&fit=crop" 
          alt="Abidjan skyline" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 text-center lg:text-left">
            Trouvez votre logement idéal en Côte d'Ivoire
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 text-center lg:text-left">
            Des appartements et locaux professionnels de qualité dans les meilleurs quartiers
          </p>
          
          {/* Search form */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto lg:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="location" className="block text-sm font-medium mb-1 text-neutral-700">Lieu</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger id="location" className="w-full">
                    <SelectValue placeholder="Toutes les villes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les villes</SelectItem>
                    <SelectItem value="Abidjan">Abidjan</SelectItem>
                    <SelectItem value="Yamoussoukro">Yamoussoukro</SelectItem>
                    <SelectItem value="Bouaké">Bouaké</SelectItem>
                    <SelectItem value="Korhogo">Korhogo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type" className="block text-sm font-medium mb-1 text-neutral-700">Type</Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger id="type" className="w-full">
                    <SelectValue placeholder="Tous les types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les types</SelectItem>
                    <SelectItem value="apartment">Appartement</SelectItem>
                    <SelectItem value="house">Maison</SelectItem>
                    <SelectItem value="commercial">Local Commercial</SelectItem>
                    <SelectItem value="land">Terrain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget" className="block text-sm font-medium mb-1 text-neutral-700">Budget max</Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger id="budget" className="w-full">
                    <SelectValue placeholder="Tous les prix" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les prix</SelectItem>
                    <SelectItem value="100000">100 000 FCFA/mois</SelectItem>
                    <SelectItem value="250000">250 000 FCFA/mois</SelectItem>
                    <SelectItem value="500000">500 000 FCFA/mois</SelectItem>
                    <SelectItem value="1000000">1 000 000 FCFA/mois</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button 
              className="mt-4 w-full md:w-auto" 
              onClick={handleSearch}
            >
              Rechercher
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
