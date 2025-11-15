import { Profile, Recommendation, Opportunity } from "@shared/schema";
import { IStorage } from "./storage";
import { db } from "./db";
import { profiles, recommendations, opportunitiesTable, SelectOpportunity } from "@shared/db-schema";
import { asc, eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export class DatabaseStorage implements IStorage {
  async getAllOpportunities(): Promise<Opportunity[]> {
    const rows = await db.select().from(opportunitiesTable).orderBy(asc(opportunitiesTable.title));
    return rows.map(mapRowToOpportunity);
  }

  async getOpportunityById(id: string): Promise<Opportunity | undefined> {
    const [row] = await db.select().from(opportunitiesTable).where(eq(opportunitiesTable.id, id)).limit(1);
    return row ? mapRowToOpportunity(row) : undefined;
  }

  async createOpportunity(opportunity: Opportunity): Promise<Opportunity> {
    const normalized = normalizeOpportunity({ ...opportunity, id: opportunity.id || randomUUID() });
    const [inserted] = await db
      .insert(opportunitiesTable)
      .values(mapOpportunityToRow(normalized))
      .returning();

    return mapRowToOpportunity(inserted);
  }

  async updateOpportunity(id: string, opportunity: Opportunity): Promise<Opportunity | undefined> {
    const normalized = normalizeOpportunity({ ...opportunity, id });
    const [updated] = await db
      .update(opportunitiesTable)
      .set(mapOpportunityToRow(normalized))
      .where(eq(opportunitiesTable.id, id))
      .returning();

    return updated ? mapRowToOpportunity(updated) : undefined;
  }

  async deleteOpportunity(id: string): Promise<boolean> {
    const deleted = await db.delete(opportunitiesTable).where(eq(opportunitiesTable.id, id)).returning({ id: opportunitiesTable.id });
    return deleted.length > 0;
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

function mapRowToOpportunity(row: SelectOpportunity): Opportunity {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    category: row.category as Opportunity["category"],
    skillsNeeded: row.skillsNeeded ?? [],
    assetsHelpful: row.assetsHelpful ?? [],
    difficulty: row.difficulty,
    timeToCash: row.timeToCash,
    startupCost: row.startupCost,
    typicalARPU: row.typicalARPU ?? undefined,
    demandTags: row.demandTags ?? [],
    exampleTasks: row.exampleTasks ?? [],
    examplePrompts: row.examplePrompts ?? [],
    scoringFactors: row.scoringFactors ?? [],
  };
}

function mapOpportunityToRow(opportunity: Opportunity) {
  return {
    id: opportunity.id,
    slug: opportunity.slug,
    title: opportunity.title,
    summary: opportunity.summary,
    category: opportunity.category,
    skillsNeeded: opportunity.skillsNeeded ?? [],
    assetsHelpful: opportunity.assetsHelpful ?? [],
    difficulty: opportunity.difficulty,
    timeToCash: opportunity.timeToCash,
    startupCost: opportunity.startupCost,
    typicalARPU: opportunity.typicalARPU ?? null,
    demandTags: opportunity.demandTags ?? [],
    exampleTasks: opportunity.exampleTasks ?? [],
    examplePrompts: opportunity.examplePrompts ?? [],
    scoringFactors: opportunity.scoringFactors ?? [],
  };
}

function normalizeOpportunity(opportunity: Opportunity): Opportunity {
  const slug = opportunity.slug?.trim() || slugify(opportunity.title);

  return {
    ...opportunity,
    slug,
    skillsNeeded: opportunity.skillsNeeded ?? [],
    assetsHelpful: opportunity.assetsHelpful ?? [],
    demandTags: opportunity.demandTags ?? [],
    exampleTasks: opportunity.exampleTasks ?? [],
    examplePrompts: opportunity.examplePrompts ?? [],
    scoringFactors: opportunity.scoringFactors ?? [],
  };
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
