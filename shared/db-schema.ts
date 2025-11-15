import { pgTable, text, timestamp, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Profiles Table
export const profiles = pgTable("profiles", {
  id: text("id").primaryKey(),
  skills: jsonb("skills").$type<string[]>().notNull(),
  interests: jsonb("interests").$type<string[]>().notNull(),
  assets: jsonb("assets").$type<{
    audience: number;
    budget: number;
    timePerWeek: number;
    tools: string[];
  }>().notNull(),
  network: jsonb("network").$type<{
    audienceTypes: string[];
  }>().notNull(),
  constraints: jsonb("constraints").$type<{
    risk: "low" | "medium" | "high";
    onCamera: boolean;
    timeline: "fast" | "normal" | "long";
  }>().notNull(),
  goals: jsonb("goals").$type<{
    incomeTarget: number;
    passiveVsActive: "passive" | "balanced" | "active";
    b2bVsB2c: "b2b" | "both" | "b2c";
  }>().notNull(),
  workStyle: jsonb("work_style").$type<{
    collaboration: "solo" | "flexible" | "team";
    deliveryPreference: string[];
  }>().notNull(),
  marketHunches: jsonb("market_hunches").$type<string[]>().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Recommendations Table
export const recommendations = pgTable("recommendations", {
  id: text("id").primaryKey(),
  profileId: text("profile_id").notNull(),
  items: jsonb("items").notNull(), // Store full recommendation items as JSON
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Opportunities Table
export const opportunitiesTable = pgTable("opportunities", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  category: text("category").notNull(),
  skillsNeeded: jsonb("skills_needed").$type<string[]>().notNull(),
  assetsHelpful: jsonb("assets_helpful").$type<string[]>().notNull(),
  difficulty: integer("difficulty").notNull(),
  timeToCash: integer("time_to_cash").notNull(),
  startupCost: integer("startup_cost").notNull(),
  typicalARPU: integer("typical_arpu"),
  demandTags: jsonb("demand_tags").$type<string[]>().notNull(),
  exampleTasks: jsonb("example_tasks").$type<string[]>().notNull(),
  examplePrompts: jsonb("example_prompts").$type<string[]>().notNull(),
  scoringFactors: jsonb("scoring_factors").$type<string[]>().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Insert schemas
export const insertProfileSchema = createInsertSchema(profiles);
export const insertRecommendationSchema = createInsertSchema(recommendations);

// Select types
export type SelectProfile = typeof profiles.$inferSelect;
export type SelectRecommendation = typeof recommendations.$inferSelect;
export type InsertProfile = typeof profiles.$inferInsert;
export type InsertRecommendation = typeof recommendations.$inferInsert;
export type SelectOpportunity = typeof opportunitiesTable.$inferSelect;
export type InsertOpportunity = typeof opportunitiesTable.$inferInsert;
