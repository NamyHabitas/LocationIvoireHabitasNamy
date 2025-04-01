import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Modèle simplifié qui garde l'essentiel mais reste évolutif

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  type: text("type").notNull(), // apartment, house, commercial
  location: text("location").notNull(), // city/neighborhood
  area: integer("area").notNull(), // en mètres carrés
  bedrooms: integer("bedrooms"),
  bathrooms: integer("bathrooms"),
  isFeatured: boolean("is_featured").default(false),
  images: text("images").array(), // tableaux d'URLs d'images
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertPropertySchema = createInsertSchema(properties, {
  bedrooms: z.number().nullable().optional(),
  bathrooms: z.number().nullable().optional(),
  isFeatured: z.boolean().nullable().optional(),
  images: z.array(z.string()).nullable().optional(),
}).omit({
  id: true,
  createdAt: true,
});

export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  propertyId: integer("property_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contacts, {
  phone: z.string().nullable().optional(),
  propertyId: z.number().nullable().optional(),
}).omit({
  id: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  comment: text("comment").notNull(),
  imageUrl: text("image_url"),
});

export const insertTestimonialSchema = createInsertSchema(testimonials, {
  imageUrl: z.string().nullable().optional(),
}).omit({
  id: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
