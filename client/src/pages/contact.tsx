import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | IvoireHabitat</title>
      </Helmet>
      
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-neutral-800 mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions et vous aider à trouver
              le logement idéal en Côte d'Ivoire
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-2">
                    Notre Adresse
                  </h3>
                  <p className="text-neutral-600">
                    Rue des Jardins, Cocody-Ambassades<br />
                    Abidjan, Côte d'Ivoire
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-2">
                    Téléphone
                  </h3>
                  <p className="text-neutral-600">
                    +225 07 07 07 07 07<br />
                    +225 01 01 01 01 01
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-2">
                    Email
                  </h3>
                  <p className="text-neutral-600">
                    habitas.namy@gmail.com<br />
                    info@ivoirehabitat.ci
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-0">
                <ContactForm title="Envoyez-nous un message" className="bg-white" />
              </CardContent>
            </Card>
            
            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-6">
                Informations Supplémentaires
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-1">
                      Horaires d'ouverture
                    </h3>
                    <p className="text-neutral-600">
                      Lundi - Vendredi: 10h à 18h<br />
                      Samedi: 9h à 14h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-3">
                    Suivez-nous
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-3">
                    Vous êtes propriétaire ?
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Nous pouvons vous aider à louer ou vendre votre bien immobilier dans les meilleures conditions.
                    Notre équipe d'experts est à votre disposition pour évaluer votre propriété et vous proposer
                    une stratégie adaptée à vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-neutral-400 mx-auto mb-2" />
              <p className="text-neutral-600">Carte de localisation - Cocody, Abidjan</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
