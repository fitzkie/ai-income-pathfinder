import "dotenv/config";
import postgres from "postgres";
import { randomUUID } from "crypto";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error("❌ DATABASE_URL is required to seed playbooks.");
  process.exit(1);
}

const sql = postgres(databaseUrl, { max: 1 });

const audienceMode = "general";
const version = "v1";
const qualityStatus = "approved";

const playbooks = [
  {
    sideHustleId: "194",
    overview:
      "AI-Generated Voice Jingles is a service that delivers short audio branding assets like jingles, taglines, and sonic logos for podcasts, creators, and small brands. The core user is a marketer or creator who wants a memorable audio signature without a full studio process. The AI approach works because it can generate multiple tonal variations fast, then a human finishes selection, edits, and stems for professional delivery.",
    actionPlanRows: [
      {
        phase: "Brand Intake",
        what: "Collect brand voice, target audience, and desired mood references.",
        tools: ["Notion", "Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Sonic Direction",
        what: "Define tempo, genre cues, and vocal style for the jingle.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Prompt Drafting",
        what: "Write prompts for hook, tagline, and instrumental bed variations.",
        tools: ["ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Generation",
        what: "Produce 10-20 candidate jingles using Suno or ElevenLabs.",
        tools: ["Suno", "ElevenLabs"],
        time: "4 hours",
      },
      {
        phase: "Curation",
        what: "Shortlist 3-5 strongest options and align to brand voice.",
        tools: ["Audacity"],
        time: "2 hours",
      },
      {
        phase: "Post-Production",
        what: "Clean audio, normalize loudness, and add simple mastering.",
        tools: ["Audacity"],
        time: "3 hours",
      },
      {
        phase: "Stems",
        what: "Export full mix plus stems for voice, music, and SFX.",
        tools: ["Audacity"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver final files with usage rights and a quick guide.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Revisions",
        what: "Offer one revision pass and optional alternate versions.",
        tools: ["Notion"],
        time: "2 hours",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Jingle",
        description: "One 10-15 second jingle with 2 variations.",
        price: "$150-300",
        frequency: "One-time",
      },
      {
        offer: "Brand Sonic Kit",
        description: "Jingle, stinger, and sonic logo with stems.",
        price: "$400-900",
        frequency: "One-time",
      },
      {
        offer: "Podcast Pack",
        description: "Intro, outro, and 3 transitional stingers.",
        price: "$300-600",
        frequency: "One-time",
      },
      {
        offer: "Commercial Rights",
        description: "Expanded usage rights for ads and paid media.",
        price: "$100-250",
        frequency: "Add-on",
      },
      {
        offer: "Monthly Variations",
        description: "Fresh seasonal versions or campaign updates.",
        price: "$150-350",
        frequency: "Monthly",
      },
      {
        offer: "Voice Talent Upgrade",
        description: "Premium voice model or human VO add-on.",
        price: "$200-600",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Custom jingle for {brand} in 7 days\n\nHi {name}, I create short AI-generated jingles and sonic logos for brands and podcasts. If you share your brand vibe and a few references, I can deliver 3 polished options with stems in a week. Want a quick audio sample?",
      linkedin_dm:
        "Hey {name}, I build custom jingles and sonic logos using AI plus post-production. If you need a quick audio brand asset for {brand}, I can deliver a polished pack in 7 days. Want a sample?",
      upwork_bio:
        "AI-Generated Voice Jingles | Sonic logos, podcast intros, and brand stingers with stems and usage rights.",
      short_hook:
        "Custom jingles and sonic logos delivered in 7 days.",
    },
    promptPack: [
      {
        title: "Jingle Hook Prompt",
        prompt:
          "Create a 10-12 second jingle with a catchy hook and a short brand tagline. Mood: {mood}. Brand: {brand}.",
        use_case: "Generate initial jingle options.",
      },
      {
        title: "Sonic Logo Prompt",
        prompt:
          "Generate a 3-5 second sonic logo that feels {adjective} and ends on an uplifting chord. Brand: {brand}.",
        use_case: "Create compact sonic signatures.",
      },
      {
        title: "Podcast Stinger Prompt",
        prompt:
          "Create a 2-4 second transition stinger that matches this show style: {description}.",
        use_case: "Build transitional audio assets.",
      },
      {
        title: "Variation Generator",
        prompt:
          "Create 3 variations of this jingle with different instrumentation and tempo. Jingle: {paste}.",
        use_case: "Expand options for clients.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Client intake brief and sonic direction template.",
      },
      {
        asset_type: "Tracker",
        tool: "Google Sheets",
        description: "Jingle version tracker and revision log.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-create project folders and delivery links.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client delivery and usage rights email template.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator for package tiers and rights.",
      },
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Usage rights and revision policy template.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick 3 brand styles to specialize in" },
      { label: "Create 5 sample jingles for a demo reel" },
      { label: "Build a simple intake form" },
      { label: "Define your starter and pro packages" },
      { label: "Publish a short audio portfolio" },
      { label: "Send 10 outreach messages to podcasts" },
      { label: "Deliver a paid pilot project" },
      { label: "Collect a testimonial and refine workflow" },
    ],
    bonusUpgrade:
      "Scale into a sonic branding studio offering full audio identity systems, including sound guidelines and refresh cycles.",
    summaryRows: [
      { field: "Difficulty", value: "3/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "2/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "audio, branding, jingles" },
    ],
  },
  {
    sideHustleId: "195",
    overview:
      "Influencer Research Dashboard is a digital product that helps brands discover, vet, and manage influencer partners with a structured Notion database and AI prompts. The core user is a small brand or agency that wants to move from ad hoc influencer outreach to a repeatable system. The AI approach works because it speeds up niche research, audience fit analysis, and briefing, while the templates keep everything organized in one hub.",
    actionPlanRows: [
      {
        phase: "Positioning",
        what: "Choose your target user (brands, agencies, ecommerce) and define outcomes.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Database Design",
        what: "Build a Notion database for influencer profiles and status tracking.",
        tools: ["Notion"],
        time: "4 hours",
      },
      {
        phase: "Scoring Model",
        what: "Define fit scores for niche alignment, engagement, and quality.",
        tools: ["Notion", "Sheets"],
        time: "3 hours",
      },
      {
        phase: "Prompt Pack",
        what: "Create prompts for vetting, briefing, and collaboration notes.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Template Assets",
        what: "Design outreach scripts, briefs, and contract checklists.",
        tools: ["Notion", "Google Docs"],
        time: "3 hours",
      },
      {
        phase: "Examples",
        what: "Include sample influencer profiles and a filled dashboard demo.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Packaging",
        what: "Bundle the database, prompts, and guide into a product.",
        tools: ["Gumroad"],
        time: "2 hours",
      },
      {
        phase: "Launch",
        what: "Publish with a Loom walkthrough and preview screenshots.",
        tools: ["Gumroad", "Loom"],
        time: "2 hours",
      },
      {
        phase: "Expansion",
        what: "Add niche-specific versions (beauty, SaaS, wellness).",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Dashboard",
        description: "Core Notion database + 10 prompts.",
        price: "$39-69",
        frequency: "One-time",
      },
      {
        offer: "Pro Dashboard",
        description: "Advanced scoring, briefs, and outreach templates.",
        price: "$79-129",
        frequency: "One-time",
      },
      {
        offer: "Agency License",
        description: "Multi-client usage with license terms.",
        price: "$199-399",
        frequency: "One-time",
      },
      {
        offer: "Niche Pack",
        description: "Industry-specific scoring and outreach variants.",
        price: "$29-59",
        frequency: "Add-on",
      },
      {
        offer: "Update Subscription",
        description: "Quarterly prompt updates and new database views.",
        price: "$9-19",
        frequency: "Monthly",
      },
      {
        offer: "Done-for-You Setup",
        description: "Customized dashboard with client brand data.",
        price: "$250-600",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: A simple influencer research system for {brand}\n\nHi {name}, I built an Influencer Research Dashboard that helps teams discover, vet, and manage creator partnerships in one place. It includes a Notion database, prompts, and outreach templates. Want a demo link?",
      linkedin_dm:
        "Hey {name}, I created a Notion-based Influencer Research Dashboard to keep creator outreach organized and data-driven. Happy to share a demo if useful.",
      upwork_bio:
        "Influencer Research Dashboard | Notion database + AI prompts for influencer discovery, vetting, and outreach.",
      short_hook:
        "A Notion dashboard that turns influencer outreach into a system.",
    },
    promptPack: [
      {
        title: "Influencer Fit Score",
        prompt:
          "Evaluate this influencer for brand fit based on niche alignment, engagement quality, and audience overlap. Influencer: {paste}.",
        use_case: "Quickly vet influencer candidates.",
      },
      {
        title: "Outreach Personalization",
        prompt:
          "Write a short outreach message referencing this influencer's recent content and tie it to the brand offer. Details: {paste}.",
        use_case: "Personalize DMs at scale.",
      },
      {
        title: "Campaign Brief",
        prompt:
          "Draft a 1-page influencer brief for a {campaign} including deliverables, timeline, and key messages.",
        use_case: "Create clear briefs quickly.",
      },
      {
        title: "Risk Flag",
        prompt:
          "Scan this influencer profile for potential brand risks or misalignment. Profile: {paste}.",
        use_case: "Avoid poor-fit partnerships.",
      },
      {
        title: "Performance Summary",
        prompt:
          "Summarize this influencer's past campaign performance into 3 bullet points. Data: {paste}.",
        use_case: "Keep performance notes consistent.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Influencer database with pipeline and status views.",
      },
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Influencer brief and contract checklist.",
      },
      {
        asset_type: "Tracker",
        tool: "Airtable",
        description: "Optional CRM view for large influencer lists.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-capture influencer data into the dashboard.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Outreach email templates for partnerships.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Budget estimator for influencer campaigns.",
      },
    ],
    quickWinChecklist: [
      { label: "Build a basic Notion database for influencer profiles" },
      { label: "Define a 3-part fit scoring model" },
      { label: "Create 5 outreach templates" },
      { label: "Add 10 sample influencer profiles" },
      { label: "Record a 3-minute Loom demo" },
      { label: "Publish a Gumroad page with previews" },
      { label: "Reach out to 10 brands or agencies" },
      { label: "Ship v1 and gather feedback" },
    ],
    bonusUpgrade:
      "Expand into a full influencer CRM with analytics, contract management, and campaign ROI tracking.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "1/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "3/5" },
      { field: "Demand Tags", value: "influencer, crm, research" },
    ],
  },
  {
    sideHustleId: "196",
    overview:
      "AI Product Idea Generator is a digital product or lightweight app that helps founders brainstorm and qualify product ideas with structured prompts and mini market analysis. The core user is a builder or creator who wants a repeatable ideation process instead of random brainstorming. The AI approach works because it can surface patterns, suggest differentiation, and quickly generate hypotheses for testing.",
    actionPlanRows: [
      {
        phase: "Audience Definition",
        what: "Choose the user segment (indie hackers, SaaS founders, creators).",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Framework Design",
        what: "Create a step-by-step ideation framework and scoring criteria.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Prompt Pack",
        what: "Write prompts for idea generation, differentiation, and risks.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Interface",
        what: "Build a simple Notion or Figma flow for users to follow.",
        tools: ["Notion", "Figma"],
        time: "4 hours",
      },
      {
        phase: "Example Ideas",
        what: "Include sample ideas with filled analysis to show the output.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Scoring Sheet",
        what: "Create a scoring sheet for demand, complexity, and moat.",
        tools: ["Sheets"],
        time: "2 hours",
      },
      {
        phase: "Packaging",
        what: "Bundle prompts, templates, and guide into a product.",
        tools: ["Gumroad"],
        time: "2 hours",
      },
      {
        phase: "Launch",
        what: "Publish with a demo walkthrough and example outputs.",
        tools: ["Gumroad", "Loom"],
        time: "2 hours",
      },
      {
        phase: "Iteration",
        what: "Add new prompt packs and idea categories monthly.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Idea Kit",
        description: "Ideation framework + 20 prompts + scoring sheet.",
        price: "$29-59",
        frequency: "One-time",
      },
      {
        offer: "Pro Idea System",
        description: "Full templates, analysis prompts, and examples.",
        price: "$79-129",
        frequency: "One-time",
      },
      {
        offer: "Builder License",
        description: "Use across a team or studio with reuse rights.",
        price: "$199-399",
        frequency: "One-time",
      },
      {
        offer: "Niche Packs",
        description: "Industry-specific prompts and scoring models.",
        price: "$19-39",
        frequency: "Add-on",
      },
      {
        offer: "Idea Sprint Workshop",
        description: "Live 90-minute workshop using the system.",
        price: "$200-500",
        frequency: "One-time",
      },
      {
        offer: "Update Subscription",
        description: "Monthly prompt updates and example libraries.",
        price: "$9-19",
        frequency: "Monthly",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: A repeatable product ideation system for {team}\n\nHi {name}, I built an AI Product Idea Generator that turns brainstorming into a structured workflow with prompts, scoring, and examples. It helps teams generate ideas and pick the best ones fast. Want a demo?",
      linkedin_dm:
        "Hey {name}, I created a product ideation system with AI prompts and scoring sheets to help builders pick better ideas faster. Want a demo link?",
      upwork_bio:
        "AI Product Idea Generator | Prompts, templates, and scoring to turn ideas into testable concepts.",
      short_hook:
        "Turn product brainstorming into a structured, scored system.",
    },
    promptPack: [
      {
        title: "Idea Generator",
        prompt:
          "Generate 10 product ideas for {audience} focused on {problem_area}. Include a 1-line value prop for each.",
        use_case: "Create a quick idea list.",
      },
      {
        title: "Differentiation Finder",
        prompt:
          "For this idea, list 5 differentiation angles that are not just features. Idea: {paste}.",
        use_case: "Find a unique positioning angle.",
      },
      {
        title: "Validation Plan",
        prompt:
          "Create a simple 7-day validation plan for this idea. Include 3 experiments. Idea: {paste}.",
        use_case: "Map quick tests.",
      },
      {
        title: "Risk Checklist",
        prompt:
          "List the top 5 risks for this idea and how to reduce each risk. Idea: {paste}.",
        use_case: "Surface blind spots.",
      },
      {
        title: "Moat Builder",
        prompt:
          "Suggest 3 ways this idea can build defensibility within 6 months. Idea: {paste}.",
        use_case: "Plan differentiation and moat.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Idea database and scoring framework.",
      },
      {
        asset_type: "Template",
        tool: "Figma",
        description: "Idea worksheet and flow mockups.",
      },
      {
        asset_type: "Tracker",
        tool: "Google Sheets",
        description: "Idea scoring and validation tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-log ideas from forms into the database.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Validation call script and notes template.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Opportunity sizing calculator.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick a target builder segment" },
      { label: "Write 10 idea prompts and test outputs" },
      { label: "Build a simple idea database" },
      { label: "Create a 5-criteria scoring rubric" },
      { label: "Add 3 example ideas with analysis" },
      { label: "Record a short walkthrough" },
      { label: "Publish a landing page with previews" },
      { label: "Collect feedback from 5 builders" },
    ],
    bonusUpgrade:
      "Expand into a product discovery platform with collaborative scoring, competitor snapshots, and experiment tracking.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "3/5" },
      { field: "Demand Tags", value: "product, ideation, digital" },
    ],
  },
  {
    sideHustleId: "197",
    overview:
      "Custom Voice Persona Builder is a service that creates distinct AI voice personas that match a brand's tone, pacing, and emotional range. The core user is a brand or creator who wants a signature voice for content, ads, or customer experience. The AI approach works because it can iterate quickly across tone and cadence, then finalize with a repeatable voice style guide and delivery templates.",
    actionPlanRows: [
      {
        phase: "Brand Voice Intake",
        what: "Collect scripts, reference voices, and tone guidelines.",
        tools: ["Notion", "Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Persona Definition",
        what: "Define voice traits: pace, warmth, authority, and energy.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Prompt Setup",
        what: "Write prompts and sample scripts for voice testing.",
        tools: ["ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Voice Generation",
        what: "Generate candidate voices in ElevenLabs or PlayHT.",
        tools: ["ElevenLabs", "PlayHT"],
        time: "4 hours",
      },
      {
        phase: "Testing",
        what: "Test voices on different script types and formats.",
        tools: ["CapCut"],
        time: "3 hours",
      },
      {
        phase: "Selection",
        what: "Choose the top persona and refine parameters.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Voice Guide",
        what: "Document do and do not rules for consistent voice output.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Asset Pack",
        what: "Deliver sample scripts, presets, and usage instructions.",
        tools: ["Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Ongoing Support",
        what: "Offer monthly updates and new script packs.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Voice Persona Sprint",
        description: "One custom persona with 3 sample scripts.",
        price: "$300-700",
        frequency: "One-time",
      },
      {
        offer: "Brand Voice Kit",
        description: "Persona + voice guide + 10 script templates.",
        price: "$600-1200",
        frequency: "One-time",
      },
      {
        offer: "Multi-Persona Pack",
        description: "2-3 personas for different content channels.",
        price: "$900-1800",
        frequency: "One-time",
      },
      {
        offer: "Monthly Script Drops",
        description: "New scripts formatted for the voice persona.",
        price: "$150-350",
        frequency: "Monthly",
      },
      {
        offer: "Commercial Rights",
        description: "Extended usage rights for ads and paid media.",
        price: "$150-300",
        frequency: "Add-on",
      },
      {
        offer: "Voice Clone Upgrade",
        description: "Premium voice clone and tuning package.",
        price: "$400-900",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: A custom AI voice persona for {brand}\n\nHi {name}, I create distinct AI voice personas that match brand tone and pacing. You get a voice guide, presets, and sample scripts so your content sounds consistent. Want a short demo using one of your scripts?",
      linkedin_dm:
        "Hey {name}, I build custom AI voice personas for brands and creators. If you want a signature voice for content or ads, I can deliver a polished persona pack in a week. Want a demo?",
      upwork_bio:
        "Custom Voice Persona Builder | AI voice personas, voice guides, and script packs for consistent brand audio.",
      short_hook:
        "Signature AI voice personas with guides and script packs.",
    },
    promptPack: [
      {
        title: "Voice Persona Brief",
        prompt:
          "Summarize the voice persona traits from these brand notes. Include pace, tone, and emotional range. Notes: {paste}.",
        use_case: "Define the voice persona clearly.",
      },
      {
        title: "Script Style Adapter",
        prompt:
          "Rewrite this script to match the persona: {persona}. Script: {paste}.",
        use_case: "Align scripts to the persona.",
      },
      {
        title: "Channel Variant",
        prompt:
          "Create 3 variants of this script for TikTok, YouTube, and podcast intros. Script: {paste}.",
        use_case: "Generate multi-channel formats.",
      },
      {
        title: "Emotion Tuning",
        prompt:
          "Provide 4 emotional tone options for this script (calm, confident, playful, urgent). Script: {paste}.",
        use_case: "Tune emotional delivery.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Voice persona brief and guide template.",
      },
      {
        asset_type: "Tracker",
        tool: "Google Sheets",
        description: "Script library and version tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-deliver new scripts and audio files.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Script intake and approval template.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator for personas and usage rights.",
      },
      {
        asset_type: "Template",
        tool: "CapCut",
        description: "Audio overlay project template for quick previews.",
      },
    ],
    quickWinChecklist: [
      { label: "Define 3 voice persona archetypes to start" },
      { label: "Create 5 demo scripts" },
      { label: "Generate a small voice sample library" },
      { label: "Write a 1-page voice guide template" },
      { label: "Publish a demo reel" },
      { label: "Send 10 outreach messages to creators" },
      { label: "Deliver a paid persona sprint" },
      { label: "Collect feedback and refine presets" },
    ],
    bonusUpgrade:
      "Build a branded voice platform with usage analytics, script management, and multi-channel export.",
    summaryRows: [
      { field: "Difficulty", value: "3/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "2/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "voice, branding, audio" },
    ],
  },
  {
    sideHustleId: "198",
    overview:
      "AI Writing Style Trainer is a service that helps leaders, creators, and teams capture a specific writing voice and reuse it consistently across content. The core user is an executive or creator who wants their tone replicated across drafts, newsletters, and posts. The AI approach works because it can learn stylistic patterns from samples and apply them at scale with clear guardrails.",
    actionPlanRows: [
      {
        phase: "Style Intake",
        what: "Collect 10-20 writing samples and a tone questionnaire.",
        tools: ["Notion", "Google Drive"],
        time: "3 hours",
      },
      {
        phase: "Style Analysis",
        what: "Identify recurring patterns, vocabulary, and structure.",
        tools: ["ChatGPT", "Claude"],
        time: "3 hours",
      },
      {
        phase: "Voice Profile",
        what: "Create a voice guide with tone rules and examples.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Prompt Library",
        what: "Write prompts for drafting, editing, and rewriting in voice.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Calibration",
        what: "Test prompts against new content and adjust rules.",
        tools: ["Claude", "Notion"],
        time: "3 hours",
      },
      {
        phase: "Workflow Setup",
        what: "Create a repeatable workflow for drafts and approvals.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver the style guide, prompt pack, and examples.",
        tools: ["Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Training Session",
        what: "Run a 60-minute team training on how to use it.",
        tools: ["Zoom"],
        time: "1 hour",
      },
      {
        phase: "Ongoing Support",
        what: "Offer monthly tune-ups and new prompt packs.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Style Sprint",
        description: "Voice guide + 10 prompts for one content type.",
        price: "$400-900",
        frequency: "One-time",
      },
      {
        offer: "Executive Voice Kit",
        description: "Full style guide, prompt pack, and templates.",
        price: "$900-1800",
        frequency: "One-time",
      },
      {
        offer: "Team Training",
        description: "90-minute training for internal writers.",
        price: "$300-700",
        frequency: "Add-on",
      },
      {
        offer: "Monthly Tune-Up",
        description: "Prompt improvements and voice refresh support.",
        price: "$200-500",
        frequency: "Monthly",
      },
      {
        offer: "Multi-Channel Pack",
        description: "Voice prompts for posts, emails, and scripts.",
        price: "$600-1200",
        frequency: "One-time",
      },
      {
        offer: "Rewrite Service",
        description: "Rewrite up to 10 pieces per month in voice.",
        price: "$300-800",
        frequency: "Monthly",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Capture your writing voice with AI\n\nHi {name}, I help executives and creators train AI to mirror their writing style. You get a style guide, prompt pack, and workflows so drafts stay on-brand. Want a quick sample rewrite?",
      linkedin_dm:
        "Hey {name}, I build AI writing style kits that replicate your tone across posts and emails. If you share a few samples, I can deliver a voice guide and prompts. Want a sample?",
      upwork_bio:
        "AI Writing Style Trainer | Voice guides, prompt packs, and workflows for consistent executive writing.",
      short_hook:
        "Train AI to write in your voice, consistently.",
    },
    promptPack: [
      {
        title: "Voice Extraction",
        prompt:
          "Analyze these samples and summarize the writing voice in 6 bullet rules. Samples: {paste}.",
        use_case: "Extract voice rules from samples.",
      },
      {
        title: "Rewrite in Voice",
        prompt:
          "Rewrite this draft to match the voice rules: {rules}. Draft: {paste}.",
        use_case: "Apply voice to new drafts.",
      },
      {
        title: "Style Consistency Check",
        prompt:
          "Check this draft against the voice rules and list what to fix. Rules: {rules}. Draft: {paste}.",
        use_case: "Review for consistency.",
      },
      {
        title: "Headline Variations",
        prompt:
          "Write 10 headline options in the same voice as these samples. Samples: {paste}.",
        use_case: "Generate consistent hooks.",
      },
      {
        title: "Tone Slider",
        prompt:
          "Rewrite this paragraph in three tones: more bold, more warm, more concise. Paragraph: {paste}.",
        use_case: "Provide tone variants without losing voice.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Voice guide and tone rules template.",
      },
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Sample library and approved phrasing doc.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Content pipeline tracker with voice checks.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-route drafts for review and approval.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client intake and sample collection email.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator for content volume.",
      },
    ],
    quickWinChecklist: [
      { label: "Collect 10 writing samples" },
      { label: "Draft a 6-rule voice guide" },
      { label: "Create 5 voice prompts" },
      { label: "Test prompts on 3 new drafts" },
      { label: "Package a sample voice kit" },
      { label: "Reach out to 10 creators or execs" },
      { label: "Deliver a paid style sprint" },
      { label: "Collect feedback and refine rules" },
    ],
    bonusUpgrade:
      "Expand into a writing operations service with ongoing content production, voice governance, and team training.",
    summaryRows: [
      { field: "Difficulty", value: "3/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "2/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "writing, style, training" },
    ],
  },
  {
    sideHustleId: "199",
    overview:
      "AI Course Feedback Analyzer is a SaaS that turns student reviews and survey feedback into actionable improvement insights for course creators. The core user is an educator or creator with recurring cohorts who wants fast insight into what to fix. The AI approach works because it can summarize themes, surface sentiment, and prioritize changes without manual sorting.",
    actionPlanRows: [
      {
        phase: "Target Segment",
        what: "Focus on a course niche and define the feedback sources.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Feedback Intake",
        what: "Create a pipeline to ingest reviews and survey data.",
        tools: ["Sheets", "Zapier"],
        time: "4 hours",
      },
      {
        phase: "Insight Model",
        what: "Define categories: content, delivery, outcomes, support.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Prompt Design",
        what: "Create prompts for sentiment analysis and theme clustering.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Dashboard",
        what: "Build a simple reporting dashboard for insights.",
        tools: ["Notion", "Sheets"],
        time: "4 hours",
      },
      {
        phase: "Recommendations",
        what: "Generate prioritized improvements and quick wins.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Reporting",
        what: "Deliver a monthly insight report with action steps.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Beta",
        what: "Run a beta with 3-5 course creators and refine.",
        tools: ["Notion"],
        time: "2 weeks",
      },
      {
        phase: "Launch",
        what: "Launch a paid plan with clear usage limits.",
        tools: ["Stripe", "Notion"],
        time: "2 hours",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Plan",
        description: "Analyze up to 200 feedback entries per month.",
        price: "$29-59",
        frequency: "Monthly",
      },
      {
        offer: "Creator Pro",
        description: "Unlimited feedback analysis + monthly report.",
        price: "$79-149",
        frequency: "Monthly",
      },
      {
        offer: "Team Plan",
        description: "Multi-course dashboards and team access.",
        price: "$199-399",
        frequency: "Monthly",
      },
      {
        offer: "Setup Service",
        description: "Done-for-you data cleanup and integration.",
        price: "$300-800",
        frequency: "One-time",
      },
      {
        offer: "Custom Insight Report",
        description: "Quarterly executive summary with priorities.",
        price: "$200-500",
        frequency: "One-time",
      },
      {
        offer: "Enterprise",
        description: "Advanced analytics and custom scoring model.",
        price: "$500-1500",
        frequency: "Monthly",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Turn course feedback into clear action steps\n\nHi {name}, I built an AI Course Feedback Analyzer that summarizes student reviews into clear themes and prioritized fixes. If you share feedback data, I can produce a dashboard and action report in days. Want a sample report?",
      linkedin_dm:
        "Hey {name}, I help course creators turn feedback into prioritized improvements using an AI analyzer and dashboard. If you want faster insight, I can share a sample report.",
      upwork_bio:
        "AI Course Feedback Analyzer | Feedback insights, sentiment analysis, and action reports for course creators.",
      short_hook:
        "Turn student feedback into prioritized improvements.",
    },
    promptPack: [
      {
        title: "Theme Clustering",
        prompt:
          "Cluster these feedback entries into 5 themes and list the top issues per theme. Feedback: {paste}.",
        use_case: "Summarize feedback by theme.",
      },
      {
        title: "Sentiment Summary",
        prompt:
          "Provide a sentiment breakdown and key positive and negative quotes. Feedback: {paste}.",
        use_case: "Measure overall sentiment quickly.",
      },
      {
        title: "Priority Fixes",
        prompt:
          "Based on this feedback, list the top 5 fixes by impact and effort. Feedback: {paste}.",
        use_case: "Prioritize improvements.",
      },
      {
        title: "Module Insights",
        prompt:
          "Map feedback to course modules and identify which modules need updates. Feedback: {paste}.",
        use_case: "Link issues to modules.",
      },
      {
        title: "Quick Win Ideas",
        prompt:
          "Suggest 10 quick improvements that can be made in under a week. Feedback: {paste}.",
        use_case: "Create fast action steps.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Feedback analysis dashboard template.",
      },
      {
        asset_type: "Tracker",
        tool: "Google Sheets",
        description: "Feedback intake and tagging spreadsheet.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-import survey responses to the system.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Feedback request email and survey prompt.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Cohort size and plan tier calculator.",
      },
      {
        asset_type: "Template",
        tool: "Figma",
        description: "Insight report layout for client delivery.",
      },
    ],
    quickWinChecklist: [
      { label: "Collect 200 feedback entries to test" },
      { label: "Build a simple theme taxonomy" },
      { label: "Create 5 insight prompts" },
      { label: "Draft a sample insight report" },
      { label: "Test with one course creator" },
      { label: "Publish a landing page with sample output" },
      { label: "Run a 3-creator beta" },
      { label: "Launch a paid starter plan" },
    ],
    bonusUpgrade:
      "Scale into a full course intelligence platform with cohort benchmarking, NPS tracking, and improvement roadmaps.",
    summaryRows: [
      { field: "Difficulty", value: "3/5" },
      { field: "Time-to-Cash", value: "3/5" },
      { field: "Startup Cost", value: "2/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "education, analytics, feedback" },
    ],
  },
];

try {
  await sql.begin(async (tx) => {
    for (const playbook of playbooks) {
      await tx`
        DELETE FROM playbooks
        WHERE side_hustle_id = ${playbook.sideHustleId}
          AND audience_mode = ${audienceMode};
      `;

      await tx`
        INSERT INTO playbooks (
          id,
          side_hustle_id,
          version,
          audience_mode,
          overview,
          action_plan_rows,
          monetization_rows,
          outreach_templates,
          prompt_pack,
          toolkit_rows,
          quick_win_checklist,
          bonus_upgrade,
          summary_rows,
          quality_status
        ) VALUES (
          ${randomUUID()},
          ${playbook.sideHustleId},
          ${version},
          ${audienceMode},
          ${playbook.overview},
          ${tx.json(playbook.actionPlanRows)},
          ${tx.json(playbook.monetizationRows)},
          ${tx.json(playbook.outreachTemplates)},
          ${tx.json(playbook.promptPack)},
          ${tx.json(playbook.toolkitRows)},
          ${tx.json(playbook.quickWinChecklist)},
          ${playbook.bonusUpgrade},
          ${tx.json(playbook.summaryRows)},
          ${qualityStatus}
        );
      `;
    }
  });

  console.log(`✅ Seeded ${playbooks.length} playbooks (194-199).`);
} catch (error) {
  console.error("❌ Failed to seed playbooks:", error);
  process.exitCode = 1;
} finally {
  await sql.end();
}
