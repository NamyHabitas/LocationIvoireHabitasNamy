import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Home, Users, Shield, Award } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>À propos de nous | IvoireHabitat</title>
      </Helmet>
      
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-neutral-800 mb-4">
              À propos d'IvoireHabitat
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Votre partenaire de confiance pour trouver le logement idéal en Côte d'Ivoire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-4">
                Notre Histoire
              </h2>
              <p className="text-neutral-600 mb-4">
                Fondée en 2019, IvoireHabitat est née d'une vision simple mais ambitieuse : 
                faciliter l'accès à des logements de qualité en Côte d'Ivoire. 
                Face aux défis du marché immobilier ivoirien, notre équipe de professionnels 
                a décidé de créer une plateforme qui met en relation propriétaires et locataires 
                de manière transparente et efficace.
              </p>
              <p className="text-neutral-600">
                Aujourd'hui, IvoireHabitat est devenue une référence dans le secteur immobilier
                ivoirien, avec une présence dans les principales villes du pays et un 
                portefeuille de plus de 300 propriétés. Notre engagement envers l'excellence
                et la satisfaction client reste au cœur de notre mission quotidienne.
              </p>
            </div>
            
            <div className="relative h-80 md:h-auto rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494386346843-e12284507169?q=80" 
                alt="L'équipe IvoireHabitat" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-8 text-center">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">
                  Confiance
                </h3>
                <p className="text-neutral-600">
                  Nous bâtissons des relations durables basées sur l'honnêteté et la transparence.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">
                  Excellence
                </h3>
                <p className="text-neutral-600">
                  Nous visons l'excellence dans chaque aspect de notre service pour satisfaire nos clients.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">
                  Communauté
                </h3>
                <p className="text-neutral-600">
                  Nous contribuons au développement des communautés locales à travers nos services.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">
                  Innovation
                </h3>
                <p className="text-neutral-600">
                  Nous innovons constamment pour améliorer l'expérience immobilière en Côte d'Ivoire.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-6 text-center">
              Notre Équipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                    alt="Sophie Koné"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold text-neutral-800">Sophie Koné</h3>
                <p className="text-neutral-600">Directrice Générale</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                    alt="Ibrahim Konaté"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold text-neutral-800">Ibrahim Konaté</h3>
                <p className="text-neutral-600">Directeur Commercial</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                    alt="Amina Touré"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold text-neutral-800">Amina Touré</h3>
                <p className="text-neutral-600">Responsable Relations Clients</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-4">
              Notre Mission
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              IvoireHabitat s'engage à simplifier l'accès à des logements de qualité 
              pour tous les Ivoiriens et expatriés, en proposant un service personnalisé, 
              transparent et professionnel. Notre mission est de créer des expériences 
              immobilières positives et de contribuer au développement du secteur 
              immobilier en Côte d'Ivoire.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
