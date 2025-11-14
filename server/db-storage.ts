import { Profile, Recommendation, Opportunity } from "@shared/schema";
import { IStorage } from "./storage";
import { db } from "./db";
import { profiles, recommendations } from "@shared/db-schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";
import { opportunities } from "./opportunities";

// In-memory cache for opportunities (seeded data)
let opportunitiesCache: Map<string, Opportunity> | null = null;

function initializeOpportunitiesCache() {
  if (!opportunitiesCache) {
    opportunitiesCache = new Map(
      opportunities.map(opp => [opp.id, opp])
    );
  }
  return opportunitiesCache;
}

export class DatabaseStorage implements IStorage {
  constructor() {
    initializeOpportunitiesCache();
  }

  async getAllOpportunities(): Promise<Opportunity[]> {
    const cache = initializeOpportunitiesCache();
    return Array.from(cache.values());
  }

  async getOpportunityById(id: string): Promise<Opportunity | undefined> {
    const cache = initializeOpportunitiesCache();
    return cache.get(id);
  }

  async createOpportunity(opportunity: Opportunity): Promise<Opportunity> {
    const cache = initializeOpportunitiesCache();
    const id = opportunity.id || randomUUID();
    const newOpp = { ...opportunity, id };
    cache.set(id, newOpp);
    // In a full implementation, you could persist this to a database table
    return newOpp;
  }

  async updateOpportunity(id: string, opportunity: Opportunity): Promise<Opportunity | undefined> {
    const cache = initializeOpportunitiesCache();
    if (!cache.has(id)) {
      return undefined;
    }
    const updated = { ...opportunity, id };
    cache.set(id, updated);
    // In a full implementation, you could persist this to a database table
    return updated;
  }

  async deleteOpportunity(id: string): Promise<boolean> {
    const cache = initializeOpportunitiesCache();
    return cache.delete(id);
  }

  async saveProfile(profile: Profile): Promise<Profile> {
    const id = profile.id || randomUUID();
    const createdAt = new Date().toISOString();
    
    const dbProfile = {
      id,
      skills: profile.skills,
      interests: profile.interests,
      assets: profile.assets,
      network: profile.network,
      constraints: profile.constraints,
      goals: profile.goals,
      workStyle: profile.workStyle,
      marketHunches: profile.marketHunches,
    };

    await db.insert(profiles).values(dbProfile).onConflictDoUpdate({
      target: profiles.id,
      set: dbProfile,
    });

    return { ...profile, id, createdAt };
  }

  async saveRecommendation(recommendation: Recommendation): Promise<Recommendation> {
    const id = recommendation.id || randomUUID();
    const createdAt = new Date().toISOString();

    const dbRecommendation = {
      id,
      profileId: recommendation.profileId,
      items: recommendation.items as any, // JSON type
    };

    await db.insert(recommendations).values(dbRecommendation).onConflictDoUpdate({
      target: recommendations.id,
      set: dbRecommendation,
    });

    return { ...recommendation, id, createdAt };
  }

  async getRecommendation(id: string): Promise<Recommendation | undefined> {
    const result = await db.select().from(recommendations).where(eq(recommendations.id, id)).limit(1);
    
    if (result.length === 0) return undefined;

    const rec = result[0];
    return {
      id: rec.id,
      profileId: rec.profileId,
      items: rec.items as any,
      createdAt: rec.createdAt.toISOString(),
    };
  }
}
