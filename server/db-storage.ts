import { Profile, Recommendation, Opportunity } from "@shared/schema";
import { IStorage } from "./storage";
import { db } from "./db";
import { profiles, recommendations } from "@shared/db-schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";
import { opportunities } from "./opportunities";

export class DatabaseStorage implements IStorage {
  private opportunitiesMap: Map<string, Opportunity>;

  constructor() {
    // Opportunities are still in-memory (they're seeded data)
    this.opportunitiesMap = new Map(
      opportunities.map(opp => [opp.id, opp])
    );
  }

  async getAllOpportunities(): Promise<Opportunity[]> {
    return Array.from(this.opportunitiesMap.values());
  }

  async getOpportunityById(id: string): Promise<Opportunity | undefined> {
    return this.opportunitiesMap.get(id);
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
