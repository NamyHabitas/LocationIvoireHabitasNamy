import { useEffect, useState } from "react";
import { useLocation, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function PropertySearch() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [, setLocation2] = useLocation();
  const search = useSearch();
  
  // Parse search params on component mount
  useEffect(() => {
    const params = new URLSearchParams(search);
    const locationParam = params.get("location");
    const typeParam = params.get("type");
    const maxPriceParam = params.get("maxPrice");
    
    if (locationParam) setLocation(locationParam);
    if (typeParam) setPropertyType(typeParam);
    if (maxPriceParam) setBudget(maxPriceParam);
  }, [search]);
  
  const handleSearch = () => {
    let queryParams = [];
    
    if (location) queryParams.push(`location=${encodeURIComponent(location)}`);
    if (propertyType) queryParams.push(`type=${encodeURIComponent(propertyType)}`);
    if (budget) queryParams.push(`maxPrice=${encodeURIComponent(budget)}`);
    
    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    setLocation2(`/properties${queryString}`);
  };
  
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-4">Filtrer les propriétés</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="location-filter" className="block text-sm font-medium mb-1 text-neutral-700">Lieu</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger id="location-filter" className="w-full">
                <SelectValue placeholder="Toutes les villes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Toutes les villes</SelectItem>
                <SelectItem value="Abidjan">Abidjan</SelectItem>
                <SelectItem value="Yamoussoukro">Yamoussoukro</SelectItem>
                <SelectItem value="Bouaké">Bouaké</SelectItem>
                <SelectItem value="Grand-Bassam">Grand-Bassam</SelectItem>
                <SelectItem value="Korhogo">Korhogo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="type-filter" className="block text-sm font-medium mb-1 text-neutral-700">Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger id="type-filter" className="w-full">
                <SelectValue placeholder="Tous les types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Tous les types</SelectItem>
                <SelectItem value="apartment">Appartement</SelectItem>
                <SelectItem value="house">Maison</SelectItem>
                <SelectItem value="commercial">Local Commercial</SelectItem>
                <SelectItem value="land">Terrain</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="budget-filter" className="block text-sm font-medium mb-1 text-neutral-700">Budget max</Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger id="budget-filter" className="w-full">
                <SelectValue placeholder="Tous les prix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Tous les prix</SelectItem>
                <SelectItem value="100000">100 000 FCFA/mois</SelectItem>
                <SelectItem value="250000">250 000 FCFA/mois</SelectItem>
                <SelectItem value="500000">500 000 FCFA/mois</SelectItem>
                <SelectItem value="1000000">1 000 000 FCFA/mois</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="mt-4 w-full md:w-auto" onClick={handleSearch}>
          Rechercher
        </Button>
      </CardContent>
    </Card>
  );
}
