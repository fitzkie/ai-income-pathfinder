import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";
import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error("❌ DATABASE_URL is required to seed opportunities.");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvPath = path.resolve(__dirname, "../attached_assets/203 Side Hustles.csv");

if (!fs.existsSync(csvPath)) {
  console.error(`❌ CSV file not found at ${csvPath}`);
  process.exit(1);
}

const csvRaw = fs.readFileSync(csvPath, "utf8").replace(/^\uFEFF/, "");
const rows = parseCsv(csvRaw);

if (!rows.length) {
  console.error("❌ CSV file had no rows to import.");
  process.exit(1);
}

const headers = rows[0];
const records = rows
  .slice(1)
  .filter((row) => row.some((cell) => cell.trim().length > 0))
  .map((row) => {
    const record = {};
    headers.forEach((header, idx) => {
      record[header] = (row[idx] ?? "").trim();
    });
    return record;
  });

const channelByCategory = {
  Services: "personal outreach, LinkedIn, and warm referrals",
  "Digital Products": "launch platforms like Gumroad or Lemon Squeezy",
  Content: "channels such as YouTube, TikTok, and newsletters",
  Commerce: "marketplaces like Etsy, Shopify, or Amazon",
  SaaS: "landing pages, demos, and sales calls",
};

const opportunities = records.map((record, index) => convertRecord(record, index));

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

function convertRecord(record, index) {
  const id = record.ID?.trim() || randomUUID();
  const title = record.Title.trim();
  const summary = record.Summary.trim();
  const category = mapCategory(record.Category.trim());
  const skillsNeeded = splitList(record["Skills Needed"]);
  const assetsHelpful = splitList(record["Assets Helpful"]);
  const difficulty = parseScore(record["Difficulty (1-5)"], 3);
  const timeToCash = parseScore(record["Time to Cash (1-5)"], 3);
  const startupCost = parseScore(record["Startup Cost (1-5)"], 2);
  const typicalARPU = parseNumber(record["Revenue Potential (1-5)"]);
  const demandTags = splitList(record["Demand Tags"]);
  const providedTasks = splitDetailedList(record["Example Tasks"]);
  const providedPrompts = splitDetailedList(record["Example Prompts"]);
  const providedFactors = splitDetailedList(record["Scoring Factors (What Makes This Rank Higher)"]);

  const exampleTasks = providedTasks.length
    ? providedTasks
    : generateTasks(title, category, skillsNeeded, assetsHelpful, demandTags);
  const examplePrompts = providedPrompts.length
    ? providedPrompts
    : generatePrompts(title, demandTags, assetsHelpful);
  const scoringFactors = providedFactors.length
    ? providedFactors
    : generateScoringFactors(title, difficulty, timeToCash, startupCost, typicalARPU, demandTags, skillsNeeded);

  return {
    id,
    slug: slugify(title),
    title,
    summary,
    category,
    skillsNeeded,
    assetsHelpful,
    difficulty,
    timeToCash,
    startupCost,
    typicalARPU,
    demandTags,
    exampleTasks,
    examplePrompts,
    scoringFactors,
  };
}

function parseCsv(text) {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(current);
      current = "";
    } else if (char === "\r") {
      continue;
    } else if (char === "\n") {
      row.push(current);
      rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  if (current.length || row.length) {
    row.push(current);
    rows.push(row);
  }

  return rows;
}

function mapCategory(raw) {
  const category = raw || "Content";
  if (["Services", "Digital Products", "Content", "Commerce", "SaaS"].includes(category)) {
    return category;
  }
  return "Content";
}

function splitList(value = "") {
  return value
    .split(/;|,|\n/g)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function splitDetailedList(value = "") {
  return value
    .split(/;|\||\n/g)
    .map((entry) => entry.replace(/^[\s•-]+/, "").trim())
    .filter(Boolean);
}

function parseScore(raw, fallback) {
  const numeric = parseNumber(raw);
  return typeof numeric === "number" ? Math.max(1, Math.min(5, numeric)) : fallback;
}

function parseNumber(raw) {
  if (!raw) return undefined;
  const numeric = Number(raw);
  return Number.isFinite(numeric) ? numeric : undefined;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatList(items, fallback) {
  if (!items.length) return fallback;
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function pickDemandTag(tags) {
  return tags[0] || "high-intent buyers";
}

function generateTasks(title, category, skills, assets, tags) {
  const demandFocus = pickDemandTag(tags);
  const skillsText = formatList(skills, "versatile");
  const assetText = formatList(assets, "your preferred AI toolkit");
  const goToMarket = channelByCategory[category];

  return [
    `Interview or research ${demandFocus} audiences to spot the most painful problems ${title} can solve.`,
    `Use ${assetText} alongside your ${skillsText} skills to create the first version of the ${title.toLowerCase()} offer.`,
    `Package results and test pricing through ${goToMarket} to secure the first paying customers.`,
  ];
}

function generatePrompts(title, tags, assets) {
  const demandFocus = pickDemandTag(tags);
  const assetText = formatList(assets, "AI tools");

  return [
    `Give me a 30-day launch plan for a ${title} offer that targets ${demandFocus} audiences using ${assetText}.`,
    `Write a persuasive outreach message pitching ${title} services to a ${demandFocus} decision maker.`,
    `Brainstorm 5 package ideas (deliverables + price) for ${title} so I can sell tiered offers.`,
  ];
}

function generateScoringFactors(title, difficulty, timeToCash, startupCost, revenue, tags, skills) {
  const factors = [];

  if (difficulty <= 2) {
    factors.push(`${title} scores ${difficulty}/5 on difficulty, so operators with ${formatList(skills, "generalist")} skills can ramp quickly.`);
  } else if (difficulty >= 4) {
    factors.push(`Higher difficulty (${difficulty}/5) keeps ${title.toLowerCase()} defensible and lets specialists charge premium retainers.`);
  } else {
    factors.push(`Moderate difficulty (${difficulty}/5) balances accessibility with room to differentiate on quality for ${title.toLowerCase()}.`);
  }

  if (timeToCash <= 2) {
    factors.push(`Fast time-to-cash rating (${timeToCash}/5) means you can validate ${title.toLowerCase()} in a few weeks.`);
  } else if (timeToCash >= 4) {
    factors.push(`Time-to-cash score of ${timeToCash}/5 rewards creators who can nurture longer sales cycles for outsized paydays.`);
  } else {
    factors.push(`Steady time-to-cash (${timeToCash}/5) provides predictable revenue once the pipeline for ${title.toLowerCase()} is live.`);
  }

  if (startupCost <= 2) {
    factors.push(`Minimal startup cost (${startupCost}/5) keeps downside low, so you can experiment with ${title.toLowerCase()} quickly.`);
  } else {
    factors.push(`Startup cost of ${startupCost}/5 acts as a barrier, filtering competitors and positioning ${title.toLowerCase()} as a premium offer.`);
  }

  const demandText = tags.length ? formatList(tags.slice(0, 3), "growing niches") : "growing niches";
  const revenueText = typeof revenue === "number" ? ` and a revenue score of ${revenue}/5` : "";
  factors.push(`Demand tags like ${demandText}${revenueText} show this play remains in a hot market.`);

  return Array.from(new Set(factors));
}
