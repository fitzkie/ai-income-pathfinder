import "dotenv/config";
import postgres from "postgres";
import { randomUUID } from "crypto";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error("❌ DATABASE_URL is required to seed quick win packs.");
  process.exit(1);
}

const sql = postgres(databaseUrl, { max: 1, ssl: { rejectUnauthorized: false } });

function getTag(tags, index, fallback) {
  return tags[index] || fallback;
}

function buildQuickWinPack({ playbookId, sideHustleId, title, summary, demandTags }) {
  const primaryTag = getTag(demandTags, 0, "your niche");
  const secondaryTag = getTag(demandTags, 1, "");
  const tagPhrase = secondaryTag ? `${primaryTag} and ${secondaryTag}` : primaryTag;
  const summarySentence = summary.split(".")[0]?.trim() || summary;
  const offerName = title.toLowerCase();

  const checklist = [
    { label: `Define a 7-day quick win for ${offerName} aimed at ${tagPhrase}.` },
    { label: "Create a one-page offer card with deliverables and turnaround time." },
    { label: `Build a list of 15 ${primaryTag} leads to contact this week.` },
    { label: "Draft two outreach messages using the scripts below." },
    { label: `Produce a mini sample deliverable that shows the ${offerName} outcome.` },
    { label: "Set up a simple intake form and delivery checklist." },
    { label: "Book two discovery calls and confirm scope." },
    { label: "Deliver the quick win and request a testimonial." },
  ];

  const promptPack = [
    {
      title: "Quick Win Outcome",
      prompt:
        `Define a 7-day quick win for ${title} targeting ${tagPhrase}. ` +
        "Return 3 outcome statements and the proof needed for each.",
      use_case: "Clarify a fast, sellable outcome.",
    },
    {
      title: "Offer Scope",
      prompt:
        `Draft a scoped quick win offer for ${title}. ` +
        "Include deliverables, timeline, exclusions, and price range.",
      use_case: "Package a small, profitable offer.",
    },
    {
      title: "Lead List Starter",
      prompt:
        `List 20 ${primaryTag} leads who would benefit from ${title}. ` +
        "Include role, company type, and a 1-line pain point.",
      use_case: "Build a target list fast.",
    },
  ];

  const outreachTemplates = {
    cold_email:
      `Subject: Quick win for {company} in ${primaryTag}\n\n` +
      `Hi {name}, I help ${tagPhrase} teams with ${offerName} by delivering a fast, measurable quick win in 7 days. ` +
      `${summarySentence}. If I can share a mini sample this week, would you be open to a 15-minute call?`,
    linkedin_dm:
      `Hey {name} — I help ${tagPhrase} teams get a fast win with ${offerName}. ` +
      "I can deliver a small, high-impact outcome in 7 days and share a sample first. Want to see it?",
  };

  return {
    id: randomUUID(),
    playbookId,
    sideHustleId,
    checklist,
    promptPack,
    outreachTemplates,
  };
}

try {
  await sql`
    CREATE TABLE IF NOT EXISTS playbook_quick_win_packs (
      id text PRIMARY KEY,
      playbook_id text NOT NULL UNIQUE,
      side_hustle_id text NOT NULL,
      checklist jsonb NOT NULL,
      prompt_pack jsonb NOT NULL,
      outreach_templates jsonb NOT NULL,
      created_at timestamp NOT NULL DEFAULT now(),
      updated_at timestamp NOT NULL DEFAULT now()
    )
  `;

  const opportunities = await sql`
    SELECT id, title, summary, demand_tags
    FROM opportunities
  `;

  const opportunityById = new Map(
    opportunities.map((opp) => [opp.id, {
      title: opp.title,
      summary: opp.summary,
      demandTags: opp.demand_tags ?? [],
    }])
  );

  const playbooks = await sql`
    SELECT id, side_hustle_id
    FROM playbooks
    WHERE audience_mode = 'general'
  `;

  await sql.begin(async (tx) => {
    for (const playbook of playbooks) {
      const opportunity = opportunityById.get(playbook.side_hustle_id);
      if (!opportunity) continue;

      const pack = buildQuickWinPack({
        playbookId: playbook.id,
        sideHustleId: playbook.side_hustle_id,
        title: opportunity.title,
        summary: opportunity.summary,
        demandTags: opportunity.demandTags,
      });

      await tx`
        INSERT INTO playbook_quick_win_packs (
          id,
          playbook_id,
          side_hustle_id,
          checklist,
          prompt_pack,
          outreach_templates,
          updated_at
        ) VALUES (
          ${pack.id},
          ${pack.playbookId},
          ${pack.sideHustleId},
          ${tx.json(pack.checklist)},
          ${tx.json(pack.promptPack)},
          ${tx.json(pack.outreachTemplates)},
          now()
        )
        ON CONFLICT (playbook_id) DO UPDATE SET
          side_hustle_id = EXCLUDED.side_hustle_id,
          checklist = EXCLUDED.checklist,
          prompt_pack = EXCLUDED.prompt_pack,
          outreach_templates = EXCLUDED.outreach_templates,
          updated_at = now();
      `;
    }
  });

  console.log(`✅ Seeded quick win packs for ${playbooks.length} playbooks.`);
} catch (error) {
  console.error("❌ Failed to seed quick win packs:", error);
  process.exitCode = 1;
} finally {
  await sql.end();
}
