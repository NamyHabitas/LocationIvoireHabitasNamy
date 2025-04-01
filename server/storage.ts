import {
  User,
  InsertUser,
  Property,
  InsertProperty,
  Contact,
  InsertContact,
  City,
  InsertCity,
  Testimonial,
  InsertTestimonial
} from "@shared/schema";

// Storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Property methods
  getAllProperties(): Promise<Property[]>;
  getPropertyById(id: number): Promise<Property | undefined>;
  getFeaturedProperties(): Promise<Property[]>;
  getPropertiesByType(type: string): Promise<Property[]>;
  getPropertiesByLocation(location: string): Promise<Property[]>;
  getPropertiesByFilters(filters: Partial<Property>): Promise<Property[]>;
  createProperty(property: InsertProperty): Promise<Property>;
  updateProperty(id: number, property: Partial<Property>): Promise<Property | undefined>;
  deleteProperty(id: number): Promise<boolean>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  // City methods
  getAllCities(): Promise<City[]>;
  getCityById(id: number): Promise<City | undefined>;
  createCity(city: InsertCity): Promise<City>;
  
  // Testimonial methods
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private properties: Map<number, Property>;
  private contacts: Map<number, Contact>;
  private cities: Map<number, City>;
  private testimonials: Map<number, Testimonial>;
  
  private userCurrentId: number;
  private propertyCurrentId: number;
  private contactCurrentId: number;
  private cityCurrentId: number;
  private testimonialCurrentId: number;

  constructor() {
    this.users = new Map();
    this.properties = new Map();
    this.contacts = new Map();
    this.cities = new Map();
    this.testimonials = new Map();
    
    this.userCurrentId = 1;
    this.propertyCurrentId = 1;
    this.contactCurrentId = 1;
    this.cityCurrentId = 1;
    this.testimonialCurrentId = 1;
    
    // Initialize with some data
    this.initializeData();
  }

  private initializeData() {
    // Add cities
    const abidjan = this.createCity({
      name: "Abidjan",
      imageUrl: "https://images.unsplash.com/photo-1503301360699-4f60cf292ec8",
      propertyCount: 128
    });
    
    const yamoussoukro = this.createCity({
      name: "Yamoussoukro",
      imageUrl: "https://images.unsplash.com/photo-1603392840788-daa326ba288c",
      propertyCount: 43
    });
    
    const bouake = this.createCity({
      name: "Bouaké",
      imageUrl: "https://images.unsplash.com/photo-1504614851636-3e12da8f55c2",
      propertyCount: 35
    });
    
    const sanPedro = this.createCity({
      name: "San-Pedro",
      imageUrl: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
      propertyCount: 19
    });
    
    // Add properties
    this.createProperty({
      title: "Appartement moderne à Cocody",
      description: "Magnifique appartement de standing situé dans un quartier résidentiel calme de Cocody. Entièrement meublé et équipé pour votre confort. Proximité de toutes commodités (écoles, supermarchés, pharmacies).",
      price: 350000,
      type: "apartment",
      location: "Abidjan",
      neighborhood: "Cocody",
      area: 85,
      bedrooms: 3,
      bathrooms: 2,
      parking: true,
      isFeatured: true,
      availableImmediately: true,
      propertyType: "rental",
      amenities: ["Climatisation", "Cuisine équipée", "Lave-linge", "Téléviseur", "Groupe électrogène", "Eau chaude"],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14"
      ]
    });
    
    this.createProperty({
      title: "Villa avec piscine à Bassam",
      description: "Magnifique villa avec piscine située à Grand-Bassam. Parfaite pour une famille ou comme résidence secondaire au bord de la mer.",
      price: 750000,
      type: "house",
      location: "Grand-Bassam",
      neighborhood: "Zone balnéaire",
      area: 220,
      bedrooms: 5,
      bathrooms: 3,
      parking: true,
      isFeatured: true,
      availableImmediately: true,
      propertyType: "rental",
      amenities: ["Piscine", "Jardin", "Climatisation", "Cuisine équipée", "Terrasse", "Parking"],
      images: [
        "https://images.unsplash.com/photo-1594484208280-efa00f96fc21"
      ]
    });
    
    this.createProperty({
      title: "Local commercial à Plateau",
      description: "Local commercial idéalement situé au cœur du Plateau, quartier d'affaires d'Abidjan. Parfait pour bureau, commerce ou service.",
      price: 450000,
      type: "commercial",
      location: "Abidjan",
      neighborhood: "Plateau",
      area: 120,
      bedrooms: 0,
      bathrooms: 1,
      parking: false,
      isFeatured: true,
      availableImmediately: true,
      propertyType: "rental",
      amenities: ["Climatisation", "Sécurité 24/7", "Internet fibre"],
      images: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
      ]
    });
    
    // Add testimonials
    this.createTestimonial({
      name: "Amina Touré",
      location: "Abidjan, Cocody",
      rating: 5,
      comment: "J'ai trouvé mon appartement grâce à IvoireHabitat en seulement quelques jours. Le processus était simple et l'agent très professionnel. Je recommande vivement !",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    });
    
    this.createTestimonial({
      name: "Ibrahim Konaté",
      location: "Abidjan, Marcory",
      rating: 4,
      comment: "En tant que propriétaire, je suis très satisfait du service de gestion locative. L'équipe est réactive et les locataires qu'ils trouvent sont sérieux.",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    });
    
    this.createTestimonial({
      name: "Marie Kouassi",
      location: "Abidjan, Zone 4",
      rating: 5,
      comment: "Pour mon local commercial, j'ai eu plusieurs options intéressantes. Le conseil personnalisé m'a aidé à choisir le meilleur emplacement pour mon commerce.",
      imageUrl: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6"
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Property methods
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
    return Array.from(this.properties.values()).filter(property => property.location === location);
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
    const now = new Date();
    const property: Property = { 
      ...insertProperty, 
      id,
      createdAt: now
    };
    this.properties.set(id, property);
    return property;
  }
  
  async updateProperty(id: number, propertyUpdate: Partial<Property>): Promise<Property | undefined> {
    const property = this.properties.get(id);
    if (!property) {
      return undefined;
    }
    
    const updatedProperty = { ...property, ...propertyUpdate };
    this.properties.set(id, updatedProperty);
    return updatedProperty;
  }
  
  async deleteProperty(id: number): Promise<boolean> {
    return this.properties.delete(id);
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const now = new Date();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: now
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  // City methods
  async getAllCities(): Promise<City[]> {
    return Array.from(this.cities.values());
  }
  
  async getCityById(id: number): Promise<City | undefined> {
    return this.cities.get(id);
  }
  
  async createCity(insertCity: InsertCity): Promise<City> {
    const id = this.cityCurrentId++;
    const city: City = {
      ...insertCity,
      id
    };
    this.cities.set(id, city);
    return city;
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialCurrentId++;
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
