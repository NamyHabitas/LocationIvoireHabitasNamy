import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertPropertySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Properties endpoints
  app.get("/api/properties", async (_req, res) => {
    try {
      const properties = await storage.getAllProperties();
      res.json(properties);
    } catch (error) {
      console.error("Error getting properties:", error);
      res.status(500).json({ message: "Failed to get properties" });
    }
  });

  app.get("/api/properties/featured", async (_req, res) => {
    try {
      const properties = await storage.getFeaturedProperties();
      res.json(properties);
    } catch (error) {
      console.error("Error getting featured properties:", error);
      res.status(500).json({ message: "Failed to get featured properties" });
    }
  });

  app.get("/api/properties/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid property ID" });
      }

      const property = await storage.getPropertyById(id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }

      res.json(property);
    } catch (error) {
      console.error("Error getting property:", error);
      res.status(500).json({ message: "Failed to get property" });
    }
  });

  app.post("/api/properties/search", async (req, res) => {
    try {
      const filters = req.body;
      const properties = await storage.getPropertiesByFilters(filters);
      res.json(properties);
    } catch (error) {
      console.error("Error searching properties:", error);
      res.status(500).json({ message: "Failed to search properties" });
    }
  });

  app.post("/api/properties", async (req, res) => {
    try {
      const validationResult = insertPropertySchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid property data", 
          errors: validationResult.error.errors 
        });
      }

      const property = await storage.createProperty(validationResult.data);
      res.status(201).json(property);
    } catch (error) {
      console.error("Error creating property:", error);
      res.status(500).json({ message: "Failed to create property" });
    }
  });

  // Cities endpoints
  app.get("/api/cities", async (_req, res) => {
    try {
      const cities = await storage.getAllCities();
      res.json(cities);
    } catch (error) {
      console.error("Error getting cities:", error);
      res.status(500).json({ message: "Failed to get cities" });
    }
  });

  app.get("/api/cities/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid city ID" });
      }

      const city = await storage.getCityById(id);
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }

      res.json(city);
    } catch (error) {
      console.error("Error getting city:", error);
      res.status(500).json({ message: "Failed to get city" });
    }
  });

  // Testimonials endpoints
  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error getting testimonials:", error);
      res.status(500).json({ message: "Failed to get testimonials" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({
          message: "Invalid contact data",
          errors: validationResult.error.errors
        });
      }

      const contact = await storage.createContact(validationResult.data);
      res.status(201).json({ 
        message: "Contact form submitted successfully", 
        contactId: contact.id 
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
