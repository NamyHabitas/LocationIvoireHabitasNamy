// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  properties;
  contacts;
  testimonials;
  propertyCurrentId;
  contactCurrentId;
  testimonialCurrentId;
  constructor() {
    this.properties = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.testimonials = /* @__PURE__ */ new Map();
    this.propertyCurrentId = 1;
    this.contactCurrentId = 1;
    this.testimonialCurrentId = 1;
    this.initializeData();
  }
  initializeData() {
    this.addProperty({
      title: "Appartement moderne \xE0 Cocody",
      description: "Magnifique appartement de standing situ\xE9 dans un quartier r\xE9sidentiel calme de Cocody. Enti\xE8rement meubl\xE9 et \xE9quip\xE9 pour votre confort. Proximit\xE9 de toutes commodit\xE9s (\xE9coles, supermarch\xE9s, pharmacies).",
      price: 35e4,
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
      title: "Villa avec piscine \xE0 Bassam",
      description: "Magnifique villa avec piscine situ\xE9e \xE0 Grand-Bassam. Parfaite pour une famille ou comme r\xE9sidence secondaire au bord de la mer.",
      price: 75e4,
      type: "house",
      location: "Grand-Bassam, Zone baln\xE9aire",
      area: 220,
      bedrooms: 5,
      bathrooms: 3,
      isFeatured: true,
      images: [
        "https://images.unsplash.com/photo-1594484208280-efa00f96fc21"
      ]
    });
    this.addProperty({
      title: "Local commercial \xE0 Plateau",
      description: "Local commercial id\xE9alement situ\xE9 au c\u0153ur du Plateau, quartier d'affaires d'Abidjan. Parfait pour bureau, commerce ou service.",
      price: 45e4,
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
    this.addTestimonial({
      name: "Amina Tour\xE9",
      comment: "J'ai trouv\xE9 mon appartement en seulement quelques jours. Le processus \xE9tait simple et l'agent tr\xE8s professionnel. Je recommande vivement !",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    });
    this.addTestimonial({
      name: "Ibrahim Konat\xE9",
      comment: "En tant que propri\xE9taire, je suis tr\xE8s satisfait du service de gestion locative. L'\xE9quipe est r\xE9active et les locataires qu'ils trouvent sont s\xE9rieux.",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    });
  }
  addProperty(data) {
    const id = this.propertyCurrentId++;
    const property = {
      ...data,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      bedrooms: data.bedrooms ?? null,
      bathrooms: data.bathrooms ?? null,
      isFeatured: data.isFeatured ?? null,
      images: data.images ?? null
    };
    this.properties.set(id, property);
  }
  addTestimonial(data) {
    const id = this.testimonialCurrentId++;
    const testimonial = {
      ...data,
      id,
      imageUrl: data.imageUrl ?? null
    };
    this.testimonials.set(id, testimonial);
  }
  // Méthodes de propriété
  async getAllProperties() {
    return Array.from(this.properties.values());
  }
  async getPropertyById(id) {
    return this.properties.get(id);
  }
  async getFeaturedProperties() {
    return Array.from(this.properties.values()).filter((property) => property.isFeatured);
  }
  async getPropertiesByType(type) {
    return Array.from(this.properties.values()).filter((property) => property.type === type);
  }
  async getPropertiesByLocation(location) {
    return Array.from(this.properties.values()).filter(
      (property) => property.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  async getPropertiesByFilters(filters) {
    return Array.from(this.properties.values()).filter((property) => {
      for (const [key, value] of Object.entries(filters)) {
        if (property[key] !== value) {
          return false;
        }
      }
      return true;
    });
  }
  async createProperty(insertProperty) {
    const id = this.propertyCurrentId++;
    const property = {
      ...insertProperty,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      bedrooms: insertProperty.bedrooms ?? null,
      bathrooms: insertProperty.bathrooms ?? null,
      isFeatured: insertProperty.isFeatured ?? null,
      images: insertProperty.images ?? null
    };
    this.properties.set(id, property);
    return property;
  }
  // Méthode de contact
  async createContact(insertContact) {
    const id = this.contactCurrentId++;
    const contact = {
      ...insertContact,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      phone: insertContact.phone ?? null,
      propertyId: insertContact.propertyId ?? null
    };
    this.contacts.set(id, contact);
    return contact;
  }
  // Méthode de témoignage
  async getAllTestimonials() {
    return Array.from(this.testimonials.values());
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  type: text("type").notNull(),
  // apartment, house, commercial
  location: text("location").notNull(),
  // city/neighborhood
  area: integer("area").notNull(),
  // en mètres carrés
  bedrooms: integer("bedrooms"),
  bathrooms: integer("bathrooms"),
  isFeatured: boolean("is_featured").default(false),
  images: text("images").array(),
  // tableaux d'URLs d'images
  createdAt: timestamp("created_at").defaultNow()
});
var insertPropertySchema = createInsertSchema(properties, {
  bedrooms: z.number().nullable().optional(),
  bathrooms: z.number().nullable().optional(),
  isFeatured: z.boolean().nullable().optional(),
  images: z.array(z.string()).nullable().optional()
}).omit({
  id: true,
  createdAt: true
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  propertyId: integer("property_id"),
  createdAt: timestamp("created_at").defaultNow()
});
var insertContactSchema = createInsertSchema(contacts, {
  phone: z.string().nullable().optional(),
  propertyId: z.number().nullable().optional()
}).omit({
  id: true,
  createdAt: true
});
var testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  comment: text("comment").notNull(),
  imageUrl: text("image_url")
});
var insertTestimonialSchema = createInsertSchema(testimonials, {
  imageUrl: z.string().nullable().optional()
}).omit({
  id: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/properties", async (_req, res) => {
    try {
      const properties2 = await storage.getAllProperties();
      res.json(properties2);
    } catch (error) {
      console.error("Error getting properties:", error);
      res.status(500).json({ message: "Failed to get properties" });
    }
  });
  app2.get("/api/properties/featured", async (_req, res) => {
    try {
      const properties2 = await storage.getFeaturedProperties();
      res.json(properties2);
    } catch (error) {
      console.error("Error getting featured properties:", error);
      res.status(500).json({ message: "Failed to get featured properties" });
    }
  });
  app2.get("/api/properties/:id", async (req, res) => {
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
  app2.post("/api/properties/search", async (req, res) => {
    try {
      const filters = req.body;
      const properties2 = await storage.getPropertiesByFilters(filters);
      res.json(properties2);
    } catch (error) {
      console.error("Error searching properties:", error);
      res.status(500).json({ message: "Failed to search properties" });
    }
  });
  app2.post("/api/properties", async (req, res) => {
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
  app2.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials2 = await storage.getAllTestimonials();
      res.json(testimonials2);
    } catch (error) {
      console.error("Error getting testimonials:", error);
      res.status(500).json({ message: "Failed to get testimonials" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
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
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  base: "/LocationIvoireHabitasNamy/",
  // ✅ chemin pour GitHub Pages
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
