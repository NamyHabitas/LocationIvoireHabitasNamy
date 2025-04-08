import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "../img/IMG_01.png";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { title: "Accueil", path: "/" },
    { title: "Propriétés", path: "/properties" },
    { title: "À propos", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-6 w-6 text-primary" />
            <span className="text-xl font-heading font-bold text-primary">Habitas.Namy</span>
           
          </Link>
          
          {/* Desktop Navigation * <Home className="h-6 w-6 text-primary" />*/}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className={`font-medium hover:text-primary transition-colors ${
                      location === link.path ? "text-primary" : "text-neutral-800"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    href={link.path}
                    className={`font-medium text-lg py-2 ${
                      location === link.path ? "text-primary" : "text-neutral-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
