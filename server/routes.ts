import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res, next) => {
    try {
      const body = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(body);
      res.status(201).json({ 
        success: true, 
        message: "Message received! Thank you for reaching out.",
        id: contact.id 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data. Please check your input." 
        });
      }
      next(error);
    }
  });

  return httpServer;
}
