import type { Opportunity, Playbook } from "@shared/schema";

const nowIso = () => new Date().toISOString();

const baseChecklist = [
  "Pick a micro-niche and describe the buyer in one sentence.",
  "Create a 1-page offer doc with deliverables and turnaround time.",
  "Build a lead list of 25 ideal targets.",
  "Write two outreach variants and schedule them.",
  "Ship a sample result to use as proof.",
  "Post a short case study or demo thread.",
  "Set up a simple intake form and payment link.",
  "Follow up twice with non-responders.",
];

const buildPlaybook = (opportunity: Opportunity): Playbook => ({
  id: `pb_${opportunity.slug}`,
  sideHustleId: opportunity.id,
  version: "v1",
  audienceMode: "general",
  overview:
    `This playbook turns ${opportunity.title.toLowerCase()} into a paid, repeatable offer. ` +
    "You will validate a narrow angle, package your value into a clear outcome, and launch " +
    "with outreach that highlights speed-to-results. The goal is to land 1-3 clients fast, " +
    "then systemize delivery so you can scale with templates and automations.",
  actionPlanRows: [
    {
      phase: "Positioning",
      what: "Choose a micro-niche and write a one-line outcome statement.",
      tools: ["Notion", "ChatGPT"],
      time: "2 hours",
    },
    {
      phase: "Offer",
      what: "Package your service into 2 tiers with clear deliverables.",
      tools: ["Google Docs", "Canva"],
      time: "3 hours",
    },
    {
      phase: "Assets",
      what: "Create a before/after demo or mini case study.",
      tools: ["Loom", "Figma"],
      time: "4 hours",
    },
    {
      phase: "Lead List",
      what: "Build a list of 30 targets matching your niche.",
      tools: ["LinkedIn", "Airtable"],
      time: "3 hours",
    },
    {
      phase: "Outreach",
      what: "Send 15 personalized messages using the scripts.",
      tools: ["Gmail", "Apollo"],
      time: "2 hours",
    },
    {
      phase: "Delivery",
      what: "Deliver a quick win within 72 hours.",
      tools: ["Notion", "ChatGPT"],
      time: "5 hours",
    },
    {
      phase: "Retain",
      what: "Offer a monthly retainer with a clear cadence.",
      tools: ["Stripe", "Calendly"],
      time: "2 hours",
    },
  ],
  monetizationRows: [
    {
      offer: "Quick Win Audit",
      description: "One-time diagnostic + action list tailored to the client.",
      price: "$149",
      frequency: "One-time",
    },
    {
      offer: "Starter Sprint",
      description: "Done-for-you setup with 3 deliverables shipped in 7 days.",
      price: "$499",
      frequency: "One-time",
    },
    {
      offer: "Monthly Retainer",
      description: "Ongoing optimization and reporting.",
      price: "$750–$1,500",
      frequency: "Monthly",
    },
    {
      offer: "Template Pack",
      description: "Reusable assets sold as a digital add-on.",
      price: "$39",
      frequency: "One-time",
    },
    {
      offer: "Team Workshop",
      description: "90-minute training with live Q&A.",
      price: "$300",
      frequency: "One-time",
    },
    {
      offer: "Performance Bonus",
      description: "Extra fee tied to results achieved.",
      price: "10–20% lift",
      frequency: "Per project",
    },
  ],
  outreachTemplates: {
    coldEmail:
      "Subject: Quick win for {company}\n\nHi {name}, I noticed {pain}. " +
      "I can deliver a {outcome} in 7 days. If I can show a proof-of-concept this week, " +
      "would you be open to a 15-minute walkthrough?",
    linkedInDm:
      "Hey {name} — saw your post about {topic}. I help {role} get {outcome} fast. " +
      "If I send a quick audit with 3 fixes, want me to share it?",
    upworkBio:
      "I build fast-turnaround {service} that ships measurable outcomes. " +
      "Clients hire me for clear deliverables, fast communication, and repeatable results.",
    shortHook:
      "I can deliver a {result} in 7 days with a clear before/after.",
  },
  promptPack: [
    {
      title: "Offer Positioning",
      prompt:
        "Create 3 outcome-based offers for {niche} focused on speed and ROI. " +
        "Return pricing tiers and deliverables.",
      useCase: "Package your service.",
    },
    {
      title: "Lead List Builder",
      prompt:
        "Generate a list of 20 ideal customers in {industry} with roles and pain points.",
      useCase: "Prospecting.",
    },
    {
      title: "Cold Outreach",
      prompt:
        "Write a short cold email that highlights a 7-day quick win for {company}.",
      useCase: "Initial outreach.",
    },
    {
      title: "Proof-of-Concept",
      prompt:
        "Outline a 3-step proof-of-concept I can deliver in 48 hours.",
      useCase: "Close deals faster.",
    },
    {
      title: "Retention Pitch",
      prompt:
        "Draft a retainer pitch focused on monthly outcomes and reporting.",
      useCase: "Upsell.",
    },
    {
      title: "Case Study Outline",
      prompt:
        "Create a case study outline with problem, approach, results, and metrics.",
      useCase: "Social proof.",
    },
  ],
  toolkitRows: [
    {
      assetType: "Template",
      tool: "Notion",
      description: "Client intake + delivery tracker template.",
    },
    {
      assetType: "Automation",
      tool: "Zapier",
      description: "Auto-send a welcome email and task checklist.",
    },
    {
      assetType: "Script",
      tool: "Gmail",
      description: "Follow-up cadence scripts for 3 touchpoints.",
    },
    {
      assetType: "Tracker",
      tool: "Airtable",
      description: "Lead pipeline with status and next action.",
    },
    {
      assetType: "Calculator",
      tool: "Google Sheets",
      description: "ROI calculator to justify pricing.",
    },
    {
      assetType: "Template",
      tool: "Canva",
      description: "One-page case study layout.",
    },
  ],
  quickWinChecklist: baseChecklist.map((label) => ({ label })),
  bonusUpgrade:
    "Upgrade your offer by adding a mini-automation that reduces manual work. " +
    "This lets you charge 20–30% more while delivering the same core result.",
  summaryRows: [
    { field: "Difficulty", value: "Medium" },
    { field: "Time-to-Cash", value: "Fast (7–14 days)" },
    { field: "Startup Cost", value: "Low ($0–$200)" },
    { field: "Revenue Potential", value: "$1k–$5k/mo" },
    { field: "Demand Tags", value: opportunity.demandTags.join(", ") || "Service demand" },
  ],
  qualityStatus: "reviewed",
  createdAt: nowIso(),
});

export const buildPlaybookForOpportunity = (opportunity: Opportunity): Playbook => {
  return buildPlaybook(opportunity);
};
