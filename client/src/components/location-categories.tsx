import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Données statiques pour les localités
const cities = [
  {
    id: 1,
    name: "Abidjan",
    imageUrl: "https://images.unsplash.com/photo-1503301360699-4f60cf292ec8",
    propertyCount: 12
  },
  {
    id: 2,
    name: "Grand-Bassam",
    imageUrl: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
    propertyCount: 5
  },
  {
    id: 3,
    name: "Yamoussoukro",
    imageUrl: "https://images.unsplash.com/photo-1603392840788-daa326ba288c",
    propertyCount: 3
  },
  {
    id: 4,
    name: "Bouaké",
    imageUrl: "https://images.unsplash.com/photo-1504614851636-3e12da8f55c2",
    propertyCount: 2
  }
];

export default function LocationCategories() {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">Explorez par Localité</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Découvrez la localité en Côte d'Ivoire, des quartiers animés d'Abidjan aux régions paisibles, notamment autour de La Palmeraie, près de Carrefour, où abondent centres commerciaux, restaurants et lieux d’activités pour tous les goûts.</p>
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
