import { Profile, Recommendation, Opportunity } from "@shared/schema";
import { DatabaseStorage } from "./db-storage";

export interface IStorage {
  // Opportunities
  getAllOpportunities(): Promise<Opportunity[]>;
  getOpportunityById(id: string): Promise<Opportunity | undefined>;
  createOpportunity(opportunity: Opportunity): Promise<Opportunity>;
  updateOpportunity(id: string, opportunity: Opportunity): Promise<Opportunity | undefined>;
  deleteOpportunity(id: string): Promise<boolean>;
  
  // Profiles
  saveProfile(profile: Profile): Promise<Profile>;
  
  // Recommendations
  saveRecommendation(recommendation: Recommendation): Promise<Recommendation>;
  getRecommendation(id: string): Promise<Recommendation | undefined>;
}

export const storage: IStorage = new DatabaseStorage();
