import { useQuery } from "@tanstack/react-query";
import { Star, StarHalf } from "lucide-react";

export default function Testimonials() {
  const { data: testimonials, isLoading, isError } = useQuery({
    queryKey: ['/api/testimonials']
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">Ce que disent nos clients</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">Découvrez les expériences de nos clients satisfaits qui ont trouvé leur logement idéal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-neutral-100 p-6 rounded-lg animate-pulse">
                <div className="h-4 bg-neutral-200 rounded w-1/4 mb-4"></div>
                <div className="h-20 bg-neutral-200 rounded w-full mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 mr-3"></div>
                  <div>
                    <div className="h-4 bg-neutral-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-neutral-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || !testimonials) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">Ce que disent nos clients</h2>
            <p className="text-red-500">Erreur lors du chargement des témoignages. Veuillez réessayer plus tard.</p>
          </div>
        </div>
      </section>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-amber-400 text-amber-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-amber-400 text-amber-400" />);
    }
    
    return <div className="flex text-amber-400 mb-4">{stars}</div>;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">Ce que disent nos clients</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Découvrez les expériences de nos clients satisfaits qui ont trouvé leur logement idéal</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-neutral-100 p-6 rounded-lg">
              {renderStars(testimonial.rating)}
              <p className="text-neutral-700 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-medium text-neutral-800">{testimonial.name}</h5>
                  <p className="text-sm text-neutral-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
