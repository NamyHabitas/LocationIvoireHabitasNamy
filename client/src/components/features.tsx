import { CheckCircle, ShieldCheck, HeadphonesIcon, Home } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <CheckCircle className="text-3xl" />,
      title: "Biens Vérifiés",
      description: "Tous nos biens sont inspectés et vérifiés par notre équipe pour garantir leur qualité."
    },
    {
      icon: <ShieldCheck className="text-3xl" />,
      title: "Paiement Sécurisé",
      description: "Transactions transparentes et sécurisées, avec contrats clairs et conformes."
    },
    {
      icon: <HeadphonesIcon className="text-3xl" />,
      title: "Support 24/7",
      description: "Notre équipe est disponible pour répondre à toutes vos questions et préoccupations."
    },
    {
      icon: <Home className="text-3xl" />,
      title: "Gestion Complète",
      description: "Service de gestion locative disponible pour propriétaires et locataires."
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-3">Pourquoi Nous Choisir</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Des propriétés soigneusement sélectionnées et vérifiées pour garantir votre satisfaction</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
