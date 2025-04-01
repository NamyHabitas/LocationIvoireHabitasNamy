import {
  Property,
  InsertProperty,
  Contact,
  InsertContact,
  Testimonial,
  InsertTestimonial
} from "@shared/schema";

// Interface de stockage simplifiée
export interface IStorage {
  // Méthodes pour les propriétés
  getAllProperties(): Promise<Property[]>;
  getPropertyById(id: number): Promise<Property | undefined>;
  getFeaturedProperties(): Promise<Property[]>;
  getPropertiesByType(type: string): Promise<Property[]>;
  getPropertiesByLocation(location: string): Promise<Property[]>;
  getPropertiesByFilters(filters: Partial<Property>): Promise<Property[]>;
  createProperty(property: InsertProperty): Promise<Property>;
  
  // Méthodes pour les contacts
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Méthodes pour les témoignages
  getAllTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private properties: Map<number, Property>;
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  
  private propertyCurrentId: number;
  private contactCurrentId: number;
  private testimonialCurrentId: number;

  constructor() {
    this.properties = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    
    this.propertyCurrentId = 1;
    this.contactCurrentId = 1;
    this.testimonialCurrentId = 1;
    
    // Initialiser avec des données de démonstration
    this.initializeData();
  }

  private initializeData() {
    // Ajouter des propriétés
    this.addProperty({
      title: "Appartement moderne à Cocody",
      description: "Magnifique appartement de standing situé dans un quartier résidentiel calme de Cocody. Entièrement meublé et équipé pour votre confort. Proximité de toutes commodités (écoles, supermarchés, pharmacies).",
      price: 350000,
      type: "apartment",
      location: "Abidjan, Cocody",
      area: 85,
      bedrooms: 3,
      bathrooms: 2,
      isFeatured: true,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14"
      ]
    });
    
    this.addProperty({
      title: "Villa avec piscine à Bassam",
      description: "Magnifique villa avec piscine située à Grand-Bassam. Parfaite pour une famille ou comme résidence secondaire au bord de la mer.",
      price: 750000,
      type: "house",
      location: "Grand-Bassam, Zone balnéaire",
      area: 220,
      bedrooms: 5,
      bathrooms: 3,
      isFeatured: true,
      images: [
        "https://images.unsplash.com/photo-1594484208280-efa00f96fc21"
      ]
    });
    
    this.addProperty({
      title: "Local commercial à Plateau",
      description: "Local commercial idéalement situé au cœur du Plateau, quartier d'affaires d'Abidjan. Parfait pour bureau, commerce ou service.",
      price: 450000,
      type: "commercial",
      location: "Abidjan, Plateau",
      area: 120,
      bedrooms: 0,
      bathrooms: 1,
      isFeatured: true,
      images: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
      ]
    });
    
    // Ajouter des témoignages
    this.addTestimonial({
      name: "Amina Touré",
      comment: "J'ai trouvé mon appartement en seulement quelques jours. Le processus était simple et l'agent très professionnel. Je recommande vivement !",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    });
    
    this.addTestimonial({
      name: "Ibrahim Konaté",
      comment: "En tant que propriétaire, je suis très satisfait du service de gestion locative. L'équipe est réactive et les locataires qu'ils trouvent sont sérieux.",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    });
  }
  
  private addProperty(data: InsertProperty): void {
    const id = this.propertyCurrentId++;
    const property: Property = {
      ...data,
      id,
      createdAt: new Date(),
      bedrooms: data.bedrooms ?? null,
      bathrooms: data.bathrooms ?? null,
      isFeatured: data.isFeatured ?? null,
      images: data.images ?? null
    };
    this.properties.set(id, property);
  }
  
  private addTestimonial(data: InsertTestimonial): void {
    const id = this.testimonialCurrentId++;
    const testimonial: Testimonial = {
      ...data,
      id,
      imageUrl: data.imageUrl ?? null
    };
    this.testimonials.set(id, testimonial);
  }
  
  // Méthodes de propriété
  async getAllProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }
  
  async getPropertyById(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }
  
  async getFeaturedProperties(): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => property.isFeatured);
  }
  
  async getPropertiesByType(type: string): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => property.type === type);
  }
  
  async getPropertiesByLocation(location: string): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => 
      property.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  
  async getPropertiesByFilters(filters: Partial<Property>): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => {
      for (const [key, value] of Object.entries(filters)) {
        if (property[key as keyof Property] !== value) {
          return false;
        }
      }
      return true;
    });
  }
  
  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const id = this.propertyCurrentId++;
    const property: Property = { 
      ...insertProperty, 
      id,
      createdAt: new Date(),
      bedrooms: insertProperty.bedrooms ?? null,
      bathrooms: insertProperty.bathrooms ?? null,
      isFeatured: insertProperty.isFeatured ?? null,
      images: insertProperty.images ?? null
    };
    this.properties.set(id, property);
    return property;
  }
  
  // Méthode de contact
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
      phone: insertContact.phone ?? null,
      propertyId: insertContact.propertyId ?? null
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Méthode de témoignage
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
}

export const storage = new MemStorage();
