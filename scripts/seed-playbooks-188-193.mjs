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
    sideHustleId: "188",
    overview:
      "Social Proof Generator is a digital product playbook that helps marketers and small brands turn customer feedback into on-brand testimonials, UGC quotes, and success snippets. The core user is a solo marketer or creator who has proof scattered across reviews, DMs, and support threads but needs a repeatable system to package it fast. The AI approach works because it can distill messy feedback into polished, consistent language, while templates keep tone and claims aligned across channels.",
    actionPlanRows: [
      {
        phase: "Positioning",
        what: "Pick a niche (SaaS, ecommerce, coaching) and define the promise your proof should reinforce.",
        tools: ["Notion", "ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Source Mining",
        what: "Collect reviews, surveys, support tickets, and interview notes into one source file.",
        tools: ["Google Forms", "Sheets"],
        time: "3 hours",
      },
      {
        phase: "Proof Framework",
        what: "Create a testimonial structure (problem, outcome, metric, emotion) to guide outputs.",
        tools: ["Notion", "ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Prompt Library",
        what: "Build prompts for short quotes, long testimonials, and UGC-style hooks.",
        tools: ["ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Template Design",
        what: "Design Canva templates for cards, carousels, and social proof badges.",
        tools: ["Canva"],
        time: "4 hours",
      },
      {
        phase: "Compliance Pass",
        what: "Add claim-safe language, permissions guidance, and usage disclaimers.",
        tools: ["Notion"],
        time: "1 hour",
      },
      {
        phase: "Packaging",
        what: "Bundle templates, prompts, and usage guide into a deliverable pack.",
        tools: ["Gumroad", "Canva"],
        time: "2 hours",
      },
      {
        phase: "Launch",
        what: "Publish to Gumroad with sample previews and a simple use-case demo.",
        tools: ["Gumroad"],
        time: "2 hours",
      },
      {
        phase: "Iteration",
        what: "Collect buyer feedback and add new niche packs or upgrades monthly.",
        tools: ["Sheets", "Notion"],
        time: "2 hours/month",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Proof Pack",
        description: "Core prompts + 20 Canva templates for one niche.",
        price: "$29-49",
        frequency: "One-time",
      },
      {
        offer: "Pro Proof Library",
        description: "100+ templates, 5 prompt sets, and caption formulas.",
        price: "$79-129",
        frequency: "One-time",
      },
      {
        offer: "Agency License",
        description: "Reusable templates for client work with license terms.",
        price: "$199-399",
        frequency: "One-time",
      },
      {
        offer: "Monthly Refresh",
        description: "New seasonal template drops + updated prompt packs.",
        price: "$15-29",
        frequency: "Monthly",
      },
      {
        offer: "Done-for-You Proof Kit",
        description: "Customized proof extraction and branded templates.",
        price: "$300-900",
        frequency: "One-time",
      },
      {
        offer: "Upsell: Review Miner",
        description: "Spreadsheet of best quotes from public sources.",
        price: "$99-149",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Turn your reviews into high-converting social proof\n\nHi {name}, I build proof packs that turn scattered reviews into polished testimonials, UGC quotes, and social cards your team can use immediately. If you share a few reviews or survey responses, I can deliver a branded kit in 5 days. Want a sample proof card for {brand}?",
      linkedin_dm:
        "Hey {name}, I help brands turn reviews and feedback into ready-to-post social proof packs. If you have reviews sitting in email or support threads, I can convert them into templates and captions. Want a quick sample?",
      social_post:
        "Most brands have proof but not a system. I turn reviews, DMs, and survey responses into branded social proof packs: templates + copy + prompts. DM me if you want a sample pack.",
      short_hook:
        "I turn your reviews into ready-to-post social proof in 5 days.",
    },
    promptPack: [
      {
        title: "Review to Testimonial Distiller",
        prompt:
          "Turn the following raw review into a polished testimonial using this format: Problem -> Outcome -> Metric -> Emotion. Keep it under 35 words. Review: {paste}",
        use_case: "Convert long reviews into concise quotes.",
      },
      {
        title: "UGC Quote Generator",
        prompt:
          "Create 5 UGC-style quotes based on these feedback notes. Sound casual and human, avoid hype, include one result per quote. Notes: {paste}",
        use_case: "Generate multiple short quotes quickly.",
      },
      {
        title: "Proof Theme Clustering",
        prompt:
          "Group these testimonials into 4 themes and name each theme. Then list the strongest quotes under each theme. Testimonials: {paste}",
        use_case: "Organize proof by benefit.",
      },
      {
        title: "Before/After Snippet",
        prompt:
          "Write a before/after social proof snippet from this case note. Keep it under 50 words. Case note: {paste}",
        use_case: "Create carousel copy.",
      },
      {
        title: "Claim-Safe Rewrites",
        prompt:
          "Rewrite this testimonial to be claim-safe while keeping the core benefit. Avoid absolute guarantees. Text: {paste}",
        use_case: "Reduce compliance risk.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Canva",
        description: "Testimonial card and carousel templates in brand styles.",
      },
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Proof framework and usage guide template.",
      },
      {
        asset_type: "Tracker",
        tool: "Google Sheets",
        description: "Quote library tracker with tags and usage status.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-save survey responses into the proof library.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Permission request email templates for testimonials.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Template pricing and bundle calculator.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick one niche and create a proof positioning line" },
      { label: "Collect 20 real reviews or feedback snippets" },
      { label: "Build a 10-template starter pack in Canva" },
      { label: "Write 5 proof prompts and test them" },
      { label: "Create a 1-page usage guide" },
      { label: "Publish a Gumroad page with 3 previews" },
      { label: "DM 10 marketers with a sample proof card" },
      { label: "Ship v1 and collect first buyer feedback" },
    ],
    bonusUpgrade:
      "Upgrade into a social proof management SaaS that collects feedback, auto-generates quotes, and publishes testimonial widgets with analytics.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "1/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "3/5" },
      { field: "Demand Tags", value: "marketing, ugc, templates" },
    ],
  },
  {
    sideHustleId: "189",
    overview:
      "Startup Idea Validator is a service that delivers fast, structured validation reports for founders and builders. The core user is a pre-seed founder who wants objective demand, pricing, and competitor clarity before investing weeks of build time. The AI-powered approach works because it accelerates research synthesis, highlights patterns across sources, and turns scattered signals into a clean decision framework.",
    actionPlanRows: [
      {
        phase: "Niche Focus",
        what: "Define the target founder segment and the types of ideas you validate.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Intake",
        what: "Send a structured intake form covering problem, buyer, and goals.",
        tools: ["Typeform", "Notion"],
        time: "2 hours",
      },
      {
        phase: "Market Scan",
        what: "Map category size, demand signals, and related search intent.",
        tools: ["ChatGPT", "Sheets"],
        time: "4 hours",
      },
      {
        phase: "Competitor Matrix",
        what: "List direct and indirect competitors with pricing and positioning.",
        tools: ["Sheets"],
        time: "4 hours",
      },
      {
        phase: "Customer Voice",
        what: "Extract pain points from reviews, forums, and public discussions.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Unit Economics",
        what: "Estimate pricing, CAC assumptions, and payback scenarios.",
        tools: ["Sheets"],
        time: "3 hours",
      },
      {
        phase: "Scorecard",
        what: "Score the idea on demand, differentiation, and execution risk.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Report Delivery",
        what: "Deliver a concise report with green/yellow/red recommendations.",
        tools: ["Notion", "Loom"],
        time: "2 hours",
      },
      {
        phase: "Follow-Up",
        what: "Offer a 30-minute review call and next-step roadmap.",
        tools: ["Zoom"],
        time: "1 hour",
      },
    ],
    monetizationRows: [
      {
        offer: "Validation Sprint",
        description: "Full report covering demand, competition, and pricing.",
        price: "$300-800",
        frequency: "One-time",
      },
      {
        offer: "Founder Call Add-on",
        description: "60-minute call with Q&A and positioning advice.",
        price: "$150-250",
        frequency: "Add-on",
      },
      {
        offer: "Idea Portfolio",
        description: "Validate 3-5 ideas and rank them with a scorecard.",
        price: "$900-1500",
        frequency: "One-time",
      },
      {
        offer: "Investor Memo",
        description: "Executive summary formatted for seed investors.",
        price: "$300-500",
        frequency: "Add-on",
      },
      {
        offer: "Advisor Retainer",
        description: "Monthly research refresh and go-to-market guidance.",
        price: "$500-1200",
        frequency: "Monthly",
      },
      {
        offer: "MVP Test Plan",
        description: "Landing page + validation experiment roadmap.",
        price: "$250-450",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Fast validation for {idea} in 7 days\n\nHi {name}, I run a Startup Idea Validator service that delivers a demand and competitor report so founders can decide what to build next. If you share your idea summary, I can return a structured scorecard and recommendation in a week. Want a sample report outline?",
      linkedin_dm:
        "Hey {name}, I help founders validate ideas fast with a structured market and competitor scorecard. If you want an objective take before building, I can turn it around in 7 days. Want a sample?",
      upwork_bio:
        "Startup Idea Validator | Market research, competitor mapping, pricing insights, and a decision scorecard. I deliver clean reports founders can act on within a week.",
      short_hook:
        "I validate startup ideas with a clear scorecard in 7 days.",
    },
    promptPack: [
      {
        title: "Competitor Snapshot",
        prompt:
          "List direct and indirect competitors for this idea. Include pricing model, core promise, and key gaps. Idea: {paste}",
        use_case: "Create a competitor matrix.",
      },
      {
        title: "Demand Signal Finder",
        prompt:
          "Identify demand signals for this market (search intent, forums, reviews). Provide 5 signals and why they matter. Market: {paste}",
        use_case: "Assess market demand.",
      },
      {
        title: "Pricing Hypothesis",
        prompt:
          "Suggest 3 pricing tiers for this idea and the logic for each tier. Include value drivers. Idea: {paste}",
        use_case: "Draft early pricing assumptions.",
      },
      {
        title: "Feature Gap Matrix",
        prompt:
          "Compare this idea against the top 3 competitors and list feature gaps or opportunities. Idea: {paste}",
        use_case: "Find differentiation opportunities.",
      },
      {
        title: "Interview Script",
        prompt:
          "Create a 10-question customer interview script to validate this idea. Focus on problems and current alternatives. Idea: {paste}",
        use_case: "Run quick discovery interviews.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Validation report template with sections and scoring.",
      },
      {
        asset_type: "Tracker",
        tool: "Google Sheets",
        description: "Competitor matrix and pricing comparison sheet.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Founder intake questionnaire and call agenda.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-create a project workspace per new client.",
      },
      {
        asset_type: "Template",
        tool: "Canva",
        description: "One-page executive summary visual layout.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "TAM/SAM/SOM estimation worksheet.",
      },
    ],
    quickWinChecklist: [
      { label: "Define your target founder segment" },
      { label: "Create a 1-page intake form" },
      { label: "Build a 10-competitor starter matrix" },
      { label: "Draft a simple scoring rubric" },
      { label: "Publish a sample report outline" },
      { label: "Reach out to 10 founders with a sample" },
      { label: "Deliver your first validation sprint" },
      { label: "Collect a testimonial and refine your process" },
    ],
    bonusUpgrade:
      "Upgrade into a subscription intelligence service that continuously tracks markets, pricing, and new entrants for founders and venture studios.",
    summaryRows: [
      { field: "Difficulty", value: "3/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "2/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "startups, validation, analytics" },
    ],
  },
  {
    sideHustleId: "190",
    overview:
      "AI Stock Footage Generator is a service that creates custom stock footage packs for creators and brands using generative video tools. The core user is a content team that needs niche visuals they cannot find in traditional stock libraries. The AI-powered approach works because it can generate unique scenes and variations on demand, then package them into licensable clips with clear usage terms.",
    actionPlanRows: [
      {
        phase: "Niche Definition",
        what: "Pick a content niche (wellness, fintech, SaaS) and define visual styles.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Moodboard",
        what: "Create a style board with reference frames and brand-safe palettes.",
        tools: ["Pinterest", "Canva"],
        time: "3 hours",
      },
      {
        phase: "Prompt Library",
        what: "Draft prompts for scenes, transitions, and B-roll sequences.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Clip Generation",
        what: "Generate 20-40 base clips using Runway or Kaiber.",
        tools: ["Runway", "Kaiber"],
        time: "6 hours",
      },
      {
        phase: "Post-Processing",
        what: "Upscale, color correct, and trim clips to standard durations.",
        tools: ["Premiere", "CapCut"],
        time: "4 hours",
      },
      {
        phase: "Metadata",
        what: "Create filenames, tags, and usage descriptions for each clip.",
        tools: ["Sheets"],
        time: "2 hours",
      },
      {
        phase: "Packaging",
        what: "Bundle clips into themed packs with license terms.",
        tools: ["Gumroad"],
        time: "2 hours",
      },
      {
        phase: "Sales Channels",
        what: "List packs on marketplaces and outreach to content teams.",
        tools: ["Gumroad", "LinkedIn"],
        time: "3 hours",
      },
      {
        phase: "Custom Requests",
        what: "Offer custom clip commissions for brands with style guides.",
        tools: ["Notion", "Loom"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Clip Pack",
        description: "25 clips in one niche with standard license.",
        price: "$49-99",
        frequency: "One-time",
      },
      {
        offer: "Pro Clip Library",
        description: "100+ clips across multiple styles and scenes.",
        price: "$149-299",
        frequency: "One-time",
      },
      {
        offer: "Custom Scene Pack",
        description: "10-20 bespoke clips based on a brand brief.",
        price: "$400-1200",
        frequency: "One-time",
      },
      {
        offer: "Monthly Subscription",
        description: "New clip drops and style variations each month.",
        price: "$39-99",
        frequency: "Monthly",
      },
      {
        offer: "Extended License",
        description: "Broadcast or paid ads usage rights.",
        price: "$100-300",
        frequency: "Add-on",
      },
      {
        offer: "Audio Add-on",
        description: "Sound design or voiceover to match clips.",
        price: "$150-400",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Custom stock footage for {brand} in 7 days\n\nHi {name}, I create AI-generated stock footage packs for content teams that need unique visuals. If you share a style brief, I can deliver a themed pack of clips ready for edits and ads. Want a 3-clip sample?",
      linkedin_dm:
        "Hey {name}, I generate custom stock footage packs using AI tools, with clear usage rights. If your team needs niche visuals fast, I can deliver a pack in a week. Want a sample?",
      upwork_bio:
        "AI Stock Footage Generator | Custom clip packs, brand-safe styles, and licensing-ready deliverables for creators and teams.",
      short_hook:
        "Custom AI stock footage packs delivered in 7 days.",
    },
    promptPack: [
      {
        title: "Scene Prompt Builder",
        prompt:
          "Write 5 detailed scene prompts for {niche} B-roll footage. Include lighting, camera movement, and mood.",
        use_case: "Generate consistent scene prompts.",
      },
      {
        title: "Style Variation Generator",
        prompt:
          "Create 4 variations of this scene prompt with different moods and color palettes. Prompt: {paste}",
        use_case: "Produce alternate clip styles.",
      },
      {
        title: "Clip Pack Outline",
        prompt:
          "List 12 clip ideas for a {niche} stock pack organized by themes (intro, process, outcome).",
        use_case: "Plan a full pack quickly.",
      },
      {
        title: "Metadata Writer",
        prompt:
          "Create filename, tags, and a one-line description for each clip idea: {paste}",
        use_case: "Standardize clip metadata.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Style guide and clip brief template.",
      },
      {
        asset_type: "Tracker",
        tool: "Google Sheets",
        description: "Clip inventory tracker with tags and licenses.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-delivery of clip packs after purchase.",
      },
      {
        asset_type: "Script",
        tool: "Loom",
        description: "Client brief walkthrough video script.",
      },
      {
        asset_type: "Template",
        tool: "Canva",
        description: "Preview board for sample clips.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing estimator for clip volumes and licenses.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick one niche and define a visual style" },
      { label: "Create 10 scene prompts" },
      { label: "Generate 5 sample clips" },
      { label: "Build a small preview board" },
      { label: "Set basic license terms" },
      { label: "Publish a sample pack for sale" },
      { label: "Send 10 outreach messages to creators" },
      { label: "Deliver first custom pack" },
    ],
    bonusUpgrade:
      "Scale into a clip subscription library with a searchable index, licensing dashboard, and custom clip request queue.",
    summaryRows: [
      { field: "Difficulty", value: "3/5" },
      { field: "Time-to-Cash", value: "3/5" },
      { field: "Startup Cost", value: "3/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "video, stock, ai" },
    ],
  },
  {
    sideHustleId: "191",
    overview:
      "Legal Clause Generator is a digital product pack that offers structured clause templates and AI prompts for customizing contracts. The core user is a small business owner or freelancer who needs a starting point for common agreements, with clear disclaimers that this is not legal advice. The AI approach works because it can adapt clauses to context while the templates keep structure consistent and reduce drafting time.",
    actionPlanRows: [
      {
        phase: "Scope",
        what: "Choose contract types to cover (NDA, services, IP, freelance).",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Clause Map",
        what: "Outline required clauses and optional variations for each contract.",
        tools: ["Notion", "Sheets"],
        time: "4 hours",
      },
      {
        phase: "Drafting",
        what: "Write baseline clauses and prompts for customization.",
        tools: ["ChatGPT", "Google Docs"],
        time: "6 hours",
      },
      {
        phase: "Legal Review",
        what: "Have a legal professional review for accuracy and clarity.",
        tools: ["Google Docs"],
        time: "4 hours",
      },
      {
        phase: "Prompt Pack",
        what: "Create prompts for tailoring clauses by jurisdiction and scenario.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Disclaimers",
        what: "Add non-legal advice disclaimers and usage limitations.",
        tools: ["Notion"],
        time: "1 hour",
      },
      {
        phase: "Packaging",
        what: "Bundle templates, prompts, and instructions into a product.",
        tools: ["Gumroad"],
        time: "2 hours",
      },
      {
        phase: "Launch",
        what: "Publish with sample clauses and clear value positioning.",
        tools: ["Gumroad"],
        time: "2 hours",
      },
      {
        phase: "Updates",
        what: "Release new clause packs and industry variants quarterly.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Core Clause Pack",
        description: "Essential clauses for freelancers and small businesses.",
        price: "$29-59",
        frequency: "One-time",
      },
      {
        offer: "Industry Pack",
        description: "Niche-specific clauses (SaaS, agency, ecommerce).",
        price: "$49-99",
        frequency: "One-time",
      },
      {
        offer: "Template Bundle",
        description: "Full template + clause + prompt library bundle.",
        price: "$99-149",
        frequency: "One-time",
      },
      {
        offer: "Update Subscription",
        description: "Quarterly clause updates and new templates.",
        price: "$10-20",
        frequency: "Monthly",
      },
      {
        offer: "Team License",
        description: "Use across a team or agency with internal docs.",
        price: "$199-399",
        frequency: "One-time",
      },
      {
        offer: "Customization Add-on",
        description: "Personalized clause edits based on client context.",
        price: "$150-300",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Clause templates to speed up your contracts\n\nHi {name}, I put together a Legal Clause Generator pack with ready-to-use clause templates and AI prompts for customization. It is a starting point for drafting, not legal advice, and saves hours of writing. Want a sample clause pack?",
      linkedin_dm:
        "Hey {name}, I created a legal clause template pack with prompts to customize clauses fast. It is positioned as a drafting aid (not legal advice). Want a sample?",
      upwork_bio:
        "Legal Clause Generator | Clause templates + AI prompts for faster contract drafting (not legal advice).",
      short_hook:
        "Clause templates + prompts that cut contract drafting time.",
    },
    promptPack: [
      {
        title: "Clause Customizer",
        prompt:
          "Rewrite this clause for a {business_type} agreement in plain language, keeping the legal structure intact. Clause: {paste}",
        use_case: "Tailor clauses by business type.",
      },
      {
        title: "Risk Clarifier",
        prompt:
          "Identify ambiguous terms in this clause and suggest clearer alternatives. Clause: {paste}",
        use_case: "Reduce ambiguity.",
      },
      {
        title: "Jurisdiction Placeholder",
        prompt:
          "Add a jurisdiction placeholder and governing law section to this clause. Clause: {paste}",
        use_case: "Standardize legal boilerplate.",
      },
      {
        title: "Negotiation Option",
        prompt:
          "Provide a client-friendly alternative version of this clause with softer language. Clause: {paste}",
        use_case: "Offer negotiation-friendly options.",
      },
      {
        title: "Checklist Builder",
        prompt:
          "Create a checklist of fields needed to customize this clause accurately. Clause: {paste}",
        use_case: "Help users collect inputs.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Clause template document with placeholders.",
      },
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Clause library index and usage guide.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Template usage log and version tracker.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client disclaimer and usage email template.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Deliver updated packs to existing buyers.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Bundle pricing calculator for clause packs.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick 3 contract types to cover" },
      { label: "Outline a clause map for each contract" },
      { label: "Draft 10 core clauses" },
      { label: "Add disclaimers and usage notes" },
      { label: "Create 5 customization prompts" },
      { label: "Package templates in a clean folder" },
      { label: "Publish a sample clause preview" },
      { label: "Collect first buyer feedback" },
    ],
    bonusUpgrade:
      "Upgrade into a contract clause SaaS that lets users fill a questionnaire and auto-generate drafts with version control.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "1/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "3/5" },
      { field: "Demand Tags", value: "legal, templates, contracts" },
    ],
  },
  {
    sideHustleId: "192",
    overview:
      "Course Quiz Builder is a service that creates interactive quizzes and assessments for educators and course creators. The core user is an instructor who wants to improve learner engagement and measure comprehension without spending hours writing questions. The AI-powered approach works because it can generate question variations, align to learning objectives, and speed up formatting for LMS tools.",
    actionPlanRows: [
      {
        phase: "Audience Focus",
        what: "Choose a course niche and quiz format (MCQ, short answer, scenario).",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Content Intake",
        what: "Collect lesson outlines, slides, or transcripts from the educator.",
        tools: ["Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Question Blueprint",
        what: "Map learning objectives to question types and difficulty levels.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Question Drafting",
        what: "Generate questions and distractors with AI prompts.",
        tools: ["ChatGPT"],
        time: "4 hours",
      },
      {
        phase: "Quality Review",
        what: "Review for accuracy, clarity, and alignment to objectives.",
        tools: ["Google Docs"],
        time: "3 hours",
      },
      {
        phase: "Formatting",
        what: "Format for Google Forms, Typeform, or LMS import.",
        tools: ["Google Forms"],
        time: "3 hours",
      },
      {
        phase: "Analytics Setup",
        what: "Add scoring logic and basic analytics tracking.",
        tools: ["Sheets"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver quiz files and an instructor usage guide.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Maintenance",
        what: "Offer updates for new modules or cohorts.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Module Quiz Pack",
        description: "25-40 questions for a single module.",
        price: "$150-300",
        frequency: "One-time",
      },
      {
        offer: "Full Course Quiz",
        description: "Complete quiz coverage for a full course.",
        price: "$500-1200",
        frequency: "One-time",
      },
      {
        offer: "Scenario Upgrade",
        description: "Scenario-based assessments with feedback logic.",
        price: "$250-500",
        frequency: "Add-on",
      },
      {
        offer: "LMS Import",
        description: "Formatted CSV or LMS-ready upload files.",
        price: "$100-200",
        frequency: "Add-on",
      },
      {
        offer: "Cohort Updates",
        description: "Monthly refresh of quizzes and new question sets.",
        price: "$100-300",
        frequency: "Monthly",
      },
      {
        offer: "Assessment Audit",
        description: "Review and improve existing quizzes for clarity.",
        price: "$200-400",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Quizzes that improve course completion\n\nHi {name}, I build quiz packs for educators so students stay engaged and instructors can track comprehension. If you share your module outline, I can deliver a clean, LMS-ready quiz set in a week. Want a sample quiz format?",
      linkedin_dm:
        "Hey {name}, I create AI-assisted quizzes and assessments for courses with clear scoring and LMS-ready formatting. If you want to add quizzes without extra workload, I can help. Want a sample set?",
      upwork_bio:
        "Course Quiz Builder | Custom quizzes, assessments, and LMS-ready formatting for educators and course creators.",
      short_hook:
        "I build engaging quizzes from your course content in 7 days.",
    },
    promptPack: [
      {
        title: "Objective to Questions",
        prompt:
          "Generate 10 quiz questions aligned to this learning objective. Include 4 multiple choice options and indicate the correct answer. Objective: {paste}",
        use_case: "Create aligned questions quickly.",
      },
      {
        title: "Distractor Builder",
        prompt:
          "Create three plausible distractors for this correct answer. Topic: {paste}",
        use_case: "Improve multiple choice quality.",
      },
      {
        title: "Scenario Question",
        prompt:
          "Write 3 scenario-based questions that test applied knowledge for this topic. Topic: {paste}",
        use_case: "Add higher-order questions.",
      },
      {
        title: "Feedback Explanation",
        prompt:
          "Provide a one-sentence explanation for why the correct answer is correct. Question: {paste}",
        use_case: "Add learning feedback.",
      },
      {
        title: "Difficulty Ladder",
        prompt:
          "Create 5 questions that move from easy to hard for this topic. Topic: {paste}",
        use_case: "Balance difficulty levels.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Quiz blueprint and question bank template.",
      },
      {
        asset_type: "Template",
        tool: "Google Forms",
        description: "Reusable quiz form structure with scoring.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Question inventory and learning objective tracker.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Educator intake and approval script.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-import questions into quiz tools.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator based on question volume.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick a course niche and quiz format" },
      { label: "Create a 10-question sample quiz" },
      { label: "Build a template in Google Forms" },
      { label: "Draft a question blueprint" },
      { label: "Publish a sample quiz walkthrough" },
      { label: "Reach out to 10 educators" },
      { label: "Deliver a paid pilot quiz pack" },
      { label: "Add a quiz update retainer" },
    ],
    bonusUpgrade:
      "Expand into an assessment analytics product that tracks question performance and recommends improvements automatically.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "3/5" },
      { field: "Demand Tags", value: "education, quiz, automation" },
    ],
  },
  {
    sideHustleId: "193",
    overview:
      "Product Launch Sequence Writer is a service that crafts multi-channel launch sequences for creators, coaches, and startups. The core user is a founder who has a product ready but lacks a coordinated launch plan across email, social, and ads. The AI-powered approach works because it accelerates copy drafting, keeps messaging consistent, and enables rapid testing of hooks.",
    actionPlanRows: [
      {
        phase: "Positioning",
        what: "Define the audience, offer promise, and primary launch goal.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Asset Intake",
        what: "Collect product details, testimonials, and brand voice examples.",
        tools: ["Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Messaging Map",
        what: "Create core message pillars and proof points.",
        tools: ["Notion", "ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Sequence Outline",
        what: "Plan launch phases (tease, open, last call, follow-up).",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Drafting",
        what: "Write emails, social posts, and ad scripts per phase.",
        tools: ["ChatGPT"],
        time: "6 hours",
      },
      {
        phase: "Review",
        what: "Edit for clarity, brand voice, and compliance.",
        tools: ["Google Docs"],
        time: "3 hours",
      },
      {
        phase: "Automation",
        what: "Load sequences into ESP and schedule posts.",
        tools: ["Mailchimp", "Buffer"],
        time: "2 hours",
      },
      {
        phase: "Launch Support",
        what: "Monitor responses and make rapid copy tweaks.",
        tools: ["Sheets"],
        time: "3 hours",
      },
      {
        phase: "Post-Launch",
        what: "Write nurture and evergreen sequences.",
        tools: ["Notion"],
        time: "2 hours",
      },
    ],
    monetizationRows: [
      {
        offer: "Launch Sprint",
        description: "Complete email and social sequence for one launch.",
        price: "$400-900",
        frequency: "One-time",
      },
      {
        offer: "Multi-Channel Bundle",
        description: "Emails, social posts, and ad scripts together.",
        price: "$800-1500",
        frequency: "One-time",
      },
      {
        offer: "Ad Copy Add-on",
        description: "Platform-specific ad scripts and hooks.",
        price: "$200-400",
        frequency: "Add-on",
      },
      {
        offer: "Evergreen Sequence",
        description: "Nurture and follow-up sequence after launch.",
        price: "$250-500",
        frequency: "One-time",
      },
      {
        offer: "Optimization Retainer",
        description: "Weekly subject line testing and copy refresh.",
        price: "$300-700",
        frequency: "Monthly",
      },
      {
        offer: "Template License",
        description: "Reusable launch templates for internal team use.",
        price: "$199-399",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Launch sequence for {product} in 10 days\n\nHi {name}, I write full launch sequences (email + social + ads) so founders can ship with clear messaging and urgency. If you share your offer details, I can deliver a ready-to-schedule launch pack in 10 days. Want a sample sequence outline?",
      linkedin_dm:
        "Hey {name}, I build multi-channel launch sequences that keep messaging consistent across email, social, and ads. If you have a launch coming up, I can deliver a full pack fast. Want a sample?",
      upwork_bio:
        "Product Launch Sequence Writer | Email, social, and ad scripts for launches, with clear timelines and messaging.",
      short_hook:
        "I write launch sequences you can schedule in 10 days.",
    },
    promptPack: [
      {
        title: "Launch Hook Generator",
        prompt:
          "Generate 10 launch hooks for this offer. Include urgency and outcome-focused angles. Offer: {paste}",
        use_case: "Create a bank of hooks.",
      },
      {
        title: "Email Sequence Draft",
        prompt:
          "Draft a 5-email launch sequence (tease, open, proof, last call, close) for this product. Product: {paste}",
        use_case: "Create the core email flow.",
      },
      {
        title: "Social Post Series",
        prompt:
          "Write a 7-post social series for a launch. Include 2 story posts, 2 proof posts, 2 objection-handling posts, and 1 last call. Offer: {paste}",
        use_case: "Build a social launch plan.",
      },
      {
        title: "Objection Reframes",
        prompt:
          "List the top 5 objections to this offer and write a short rebuttal for each. Offer: {paste}",
        use_case: "Handle objections across channels.",
      },
      {
        title: "Ad Script Starter",
        prompt:
          "Write 3 short-form ad scripts (15-30 seconds) for this offer. Include hook, proof, and CTA. Offer: {paste}",
        use_case: "Seed ad creative quickly.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Launch timeline and sequence outline template.",
      },
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Editable launch copy document.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Subject line testing and KPI tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Mailchimp",
        description: "Email sequence scheduling and automation.",
      },
      {
        asset_type: "Script",
        tool: "Loom",
        description: "Client intake walkthrough script.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Launch ROI projection worksheet.",
      },
    ],
    quickWinChecklist: [
      { label: "Define your launch goal and target audience" },
      { label: "Collect proof and testimonials" },
      { label: "Draft a 5-email launch sequence" },
      { label: "Write 10 social hooks" },
      { label: "Create a basic launch calendar" },
      { label: "Schedule posts and emails" },
      { label: "Run a last-call update" },
      { label: "Package an evergreen follow-up" },
    ],
    bonusUpgrade:
      "Upgrade into a launch management retainer that includes analytics, optimization, and creative refreshes for every release.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "marketing, launch, planning" },
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

  console.log(`✅ Seeded ${playbooks.length} playbooks (188-193).`);
} catch (error) {
  console.error("❌ Failed to seed playbooks:", error);
  process.exitCode = 1;
} finally {
  await sql.end();
}
