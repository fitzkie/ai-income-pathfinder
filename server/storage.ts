import { Profile, Recommendation, Opportunity } from "@shared/schema";
import { randomUUID } from "crypto";
import { opportunities } from "./opportunities";

export interface IStorage {
  // Opportunities
  getAllOpportunities(): Promise<Opportunity[]>;
  getOpportunityById(id: string): Promise<Opportunity | undefined>;
  
  // Profiles (in-memory only for now)
  saveProfile(profile: Profile): Promise<Profile>;
  
  // Recommendations
  saveRecommendation(recommendation: Recommendation): Promise<Recommendation>;
  getRecommendation(id: string): Promise<Recommendation | undefined>;
}

export class MemStorage implements IStorage {
  private opportunities: Map<string, Opportunity>;
  private profiles: Map<string, Profile>;
  private recommendations: Map<string, Recommendation>;

  constructor() {
    // Seed opportunities
    this.opportunities = new Map(
      opportunities.map(opp => [opp.id, opp])
    );
    this.profiles = new Map();
    this.recommendations = new Map();
  }

  async getAllOpportunities(): Promise<Opportunity[]> {
    return Array.from(this.opportunities.values());
  }

  async getOpportunityById(id: string): Promise<Opportunity | undefined> {
    return this.opportunities.get(id);
  }

  async saveProfile(profile: Profile): Promise<Profile> {
    const id = profile.id || randomUUID();
    const savedProfile = { ...profile, id, createdAt: new Date().toISOString() };
    this.profiles.set(id, savedProfile);
    return savedProfile;
  }

  async saveRecommendation(recommendation: Recommendation): Promise<Recommendation> {
    const id = recommendation.id || randomUUID();
    const saved = { ...recommendation, id, createdAt: new Date().toISOString() };
    this.recommendations.set(id, saved);
    return saved;
  }

  async getRecommendation(id: string): Promise<Recommendation | undefined> {
    return this.recommendations.get(id);
  }
}

// Export storage - uses in-memory by default, will be replaced if DATABASE_URL is set
export let storage: IStorage = new MemStorage();

// Initialize database storage if DATABASE_URL exists
if (process.env.DATABASE_URL) {
  import("./db-storage").then(({ DatabaseStorage }) => {
    storage = new DatabaseStorage();
    console.log("✅ Using PostgreSQL database storage");
  }).catch(error => {
    console.error("❌ Failed to initialize database storage:", error);
    console.log("⚠️  Falling back to in-memory storage");
  });
} else {
  console.log("ℹ️  Using in-memory storage (no DATABASE_URL found)");
}
