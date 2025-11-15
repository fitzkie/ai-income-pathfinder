import "dotenv/config";
import postgres from "postgres";
import { loadOpportunitiesFromCsv } from "./opportunity-utils.mjs";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error("❌ DATABASE_URL is required to seed opportunities.");
  process.exit(1);
}

const opportunities = loadOpportunitiesFromCsv();

const sql = postgres(databaseUrl, { max: 1 });

try {
  await sql.begin(async (tx) => {
    for (const opp of opportunities) {
      await tx`
        INSERT INTO opportunities (
          id,
          slug,
          title,
          summary,
          category,
          skills_needed,
          assets_helpful,
          difficulty,
          time_to_cash,
          startup_cost,
          typical_arpu,
          demand_tags,
          example_tasks,
          example_prompts,
          scoring_factors
        ) VALUES (
          ${opp.id},
          ${opp.slug},
          ${opp.title},
          ${opp.summary},
          ${opp.category},
          ${tx.json(opp.skillsNeeded)},
          ${tx.json(opp.assetsHelpful)},
          ${opp.difficulty},
          ${opp.timeToCash},
          ${opp.startupCost},
          ${opp.typicalARPU},
          ${tx.json(opp.demandTags)},
          ${tx.json(opp.exampleTasks)},
          ${tx.json(opp.examplePrompts)},
          ${tx.json(opp.scoringFactors)}
        )
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          summary = EXCLUDED.summary,
          category = EXCLUDED.category,
          skills_needed = EXCLUDED.skills_needed,
          assets_helpful = EXCLUDED.assets_helpful,
          difficulty = EXCLUDED.difficulty,
          time_to_cash = EXCLUDED.time_to_cash,
          startup_cost = EXCLUDED.startup_cost,
          typical_arpu = EXCLUDED.typical_arpu,
          demand_tags = EXCLUDED.demand_tags,
          example_tasks = EXCLUDED.example_tasks,
          example_prompts = EXCLUDED.example_prompts,
          scoring_factors = EXCLUDED.scoring_factors;
      `;
    }
  });

  console.log(`✅ Seeded ${opportunities.length} opportunities into the database.`);
} catch (error) {
  console.error("❌ Failed to seed opportunities:", error);
  process.exitCode = 1;
} finally {
  await sql.end();
}
