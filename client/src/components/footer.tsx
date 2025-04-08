import { Link } from "wouter";
import { Home, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "../img/IMG_01.png";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Logo" className="h-6 w-6 text-primary" />
              <span className="text-xl font-heading font-bold text-white">Habitas.Namy</span>
            </div>
            <p className="mb-4">
              Votre partenaire de confiance pour trouver le logement idéal en Côte d'Ivoire. 
              Des propriétés de qualité, un service personnalisé.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/properties" className="hover:text-primary transition-colors">Toutes les propriétés</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">À propos de nous</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">Types de Propriétés</h4>
            <ul className="space-y-2">
              <li><Link href="/properties?type=apartment" className="hover:text-primary transition-colors">Appartements</Link></li>
              <li><Link href="/properties?type=house" className="hover:text-primary transition-colors">Maisons</Link></li>
              <li><Link href="/properties?type=villa" className="hover:text-primary transition-colors">Villas</Link></li>
              <li><Link href="/properties?type=commercial" className="hover:text-primary transition-colors">Locaux Commerciaux</Link></li>
              <li><Link href="/properties?type=land" className="hover:text-primary transition-colors">Terrains</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">Villes</h4>
            <ul className="space-y-2">
              <li><Link href="/properties?location=Abidjan" className="hover:text-primary transition-colors">Abidjan</Link></li>
              <li><Link href="/properties?location=Yamoussoukro" className="hover:text-primary transition-colors">Yamoussoukro</Link></li>
              <li><Link href="/properties?location=Bouaké" className="hover:text-primary transition-colors">Bouaké</Link></li>
              <li><Link href="/properties?location=San-Pedro" className="hover:text-primary transition-colors">San-Pedro</Link></li>
              <li><Link href="/properties?location=Korhogo" className="hover:text-primary transition-colors">Korhogo</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} IvoireHabitat. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-primary transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
