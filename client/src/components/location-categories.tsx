import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function LocationCategories() {
  const { data: cities, isLoading, isError } = useQuery({ 
    queryKey: ['/api/cities'],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">Explorez par Localité</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">Découvrez des propriétés dans les meilleures zones de Côte d'Ivoire, des quartiers animés d'Abidjan aux régions paisibles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="relative rounded-lg overflow-hidden animate-pulse h-64 bg-neutral-200"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || !cities) {
    return (
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">Explorez par Localité</h2>
            <p className="text-red-500">Erreur lors du chargement des localités. Veuillez réessayer plus tard.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">Explorez par Localité</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Découvrez des propriétés dans les meilleures zones de Côte d'Ivoire, des quartiers animés d'Abidjan aux régions paisibles.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div key={city.id} className="relative rounded-lg overflow-hidden group h-64">
              <img 
                src={city.imageUrl} 
                alt={city.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-heading font-bold">{city.name}</h3>
                <p className="text-sm opacity-90 mb-2">{city.propertyCount} propriétés</p>
                <Link href={`/properties?location=${encodeURIComponent(city.name)}`} 
                  className="text-sm font-medium flex items-center opacity-90 hover:opacity-100">
                  Explorer <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
