import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { scoreOpportunity, generateRationale } from "./scoring";
import { generateMockDemandSignals } from "./demandSignals";
import { generateActionPlan } from "./actionPlans";
import { Profile, Recommendation, RecommendationItem } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all opportunities
  app.get("/api/opportunities", async (_req, res) => {
    try {
      const opportunities = await storage.getAllOpportunities();
      res.json(opportunities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch opportunities" });
    }
  });

  // Get recommendations based on profile
  app.post("/api/recommendations", async (req, res) => {
    try {
      const profile = req.body as Profile;
      
      // Validate profile has minimum required data
      if (!profile.skills || profile.skills.length === 0) {
        return res.status(400).json({ error: "Profile must include skills" });
      }

      // Get all opportunities
      const opportunities = await storage.getAllOpportunities();
      
      // Score each opportunity
      const scoredOpportunities = opportunities.map(opp => {
        const demandSignals = generateMockDemandSignals(opp);
        const { total, breakdown } = scoreOpportunity(profile, opp, demandSignals);
        const rationale = generateRationale(profile, opp, breakdown);
        const actionPlan = generateActionPlan(opp);
        
        const item: RecommendationItem = {
          opportunity: opp,
          fitScore: total,
          scoreBreakdown: breakdown,
          demandSignals,
          rationale,
          actionPlan,
        };
        
        return item;
      });
      
      // Sort by fit score and take top 5
      scoredOpportunities.sort((a, b) => b.fitScore - a.fitScore);
      const topItems = scoredOpportunities.slice(0, 5);
      
      // Save profile (optional - for future persistence)
      const savedProfile = await storage.saveProfile(profile);
      
      // Create and save recommendation
      const recommendation: Recommendation = {
        id: "",
        profileId: savedProfile.id!,
        items: topItems,
        createdAt: new Date().toISOString(),
      };
      
      const savedRecommendation = await storage.saveRecommendation(recommendation);
      
      res.json(savedRecommendation);
    } catch (error) {
      console.error("Error generating recommendations:", error);
      res.status(500).json({ error: "Failed to generate recommendations" });
    }
  });

  // Get a specific recommendation by ID
  app.get("/api/recommendations/:id", async (req, res) => {
    try {
      const recommendation = await storage.getRecommendation(req.params.id);
      if (!recommendation) {
        return res.status(404).json({ error: "Recommendation not found" });
      }
      res.json(recommendation);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch recommendation" });
    }
  });

  // Admin Routes

  // Create a new opportunity
  app.post("/api/opportunities", async (req, res) => {
    try {
      const opportunity = req.body;
      
      // Validate required fields
      if (!opportunity.title || !opportunity.slug) {
        return res.status(400).json({ error: "Title and slug are required" });
      }

      const newOpportunity = await storage.createOpportunity(opportunity);
      res.json(newOpportunity);
    } catch (error) {
      console.error("Failed to create opportunity:", error);
      res.status(500).json({ error: "Failed to create opportunity" });
    }
  });

  // Update an opportunity
  app.put("/api/opportunities/:id", async (req, res) => {
    try {
      const opportunity = req.body;
      const updatedOpportunity = await storage.updateOpportunity(req.params.id, opportunity);
      
      if (!updatedOpportunity) {
        return res.status(404).json({ error: "Opportunity not found" });
      }
      
      res.json(updatedOpportunity);
    } catch (error) {
      console.error("Failed to update opportunity:", error);
      res.status(500).json({ error: "Failed to update opportunity" });
    }
  });

  // Delete an opportunity
  app.delete("/api/opportunities/:id", async (req, res) => {
    try {
      const success = await storage.deleteOpportunity(req.params.id);
      
      if (!success) {
        return res.status(404).json({ error: "Opportunity not found" });
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error("Failed to delete opportunity:", error);
      res.status(500).json({ error: "Failed to delete opportunity" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
