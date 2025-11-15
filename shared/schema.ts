import { z } from "zod";

// Profile Schema
export const profileSchema = z.object({
  id: z.string().optional(),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  assets: z.object({
    audience: z.number().min(0).default(0),
    budget: z.number().min(0).default(0),
    timePerWeek: z.number().min(1).max(40).default(5),
    tools: z.array(z.string()).default([]),
  }),
  network: z.object({
    audienceTypes: z.array(z.string()).default([]),
  }),
  constraints: z.object({
    risk: z.enum(["low", "medium", "high"]).default("medium"),
    onCamera: z.boolean().default(false),
    timeline: z.enum(["fast", "normal", "long"]).default("normal"),
  }),
  goals: z.object({
    incomeTarget: z.number().min(0).default(500),
    passiveVsActive: z.enum(["passive", "balanced", "active"]).default("balanced"),
    b2bVsB2c: z.enum(["b2b", "both", "b2c"]).default("both"),
  }),
  workStyle: z.object({
    collaboration: z.enum(["solo", "flexible", "team"]).default("flexible"),
    deliveryPreference: z.array(z.string()).default([]),
  }),
  marketHunches: z.array(z.string()).default([]),
  createdAt: z.string().optional(),
});

export type Profile = z.infer<typeof profileSchema>;

// Opportunity Schema
export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: "Services" | "Digital Products" | "Content" | "Commerce" | "SaaS";
  skillsNeeded: string[];
  assetsHelpful: string[];
  difficulty: number; // 1-5
  timeToCash: number; // 1-5 (lower is faster)
  startupCost: number; // 1-5
  typicalARPU?: number; // monthly revenue potential tier 1-5
  demandTags: string[];
  exampleTasks: string[];
  examplePrompts: string[];
  scoringFactors: string[];
}

// Demand Signal Schema
export interface DemandSignal {
  source: "google_trends" | "product_hunt" | "upwork" | "youtube";
  metric: "trend_delta" | "posting_volume" | "search_interest";
  value: number;
  label: string;
  trend: "up" | "down" | "stable";
}

// Score Component Breakdown
export interface ScoreBreakdown {
  skill: number;
  interest: number;
  assets: number;
  constraints: number;
  timeToCash: number;
  startupCost: number;
  demand: number;
}

// Recommendation Item
export interface RecommendationItem {
  opportunity: Opportunity;
  fitScore: number;
  scoreBreakdown: ScoreBreakdown;
  demandSignals: DemandSignal[];
  rationale: string[];
  actionPlan: {
    day: number;
    title: string;
    tasks: string[];
  }[];
}

// Recommendation Response
export interface Recommendation {
  id: string;
  profileId: string;
  items: RecommendationItem[];
  createdAt: string;
}

// Wizard Step Data
export type WizardStep = 
  | "skills"
  | "interests" 
  | "assets"
  | "network"
  | "constraints"
  | "goals"
  | "workstyle"
  | "hunches";

export const wizardSteps: { id: WizardStep; title: string; description: string }[] = [
  { id: "skills", title: "Skills & Experience", description: "What can you do well?" },
  { id: "interests", title: "Interests & Enjoyment", description: "What do you enjoy?" },
  { id: "assets", title: "Assets On Hand", description: "What resources do you have?" },
  { id: "network", title: "Network", description: "Who's in your audience?" },
  { id: "constraints", title: "Constraints", description: "What are your limits?" },
  { id: "goals", title: "Goals", description: "What do you want to achieve?" },
  { id: "workstyle", title: "Work Style", description: "How do you like to work?" },
  { id: "hunches", title: "Market Hunches", description: "Any niches you suspect are hot?" },
];

// Skill options
export const skillOptions = [
  "writing",
  "coding",
  "design",
  "video editing",
  "sales",
  "teaching",
  "research",
  "data analysis",
  "operations",
  "short-form video",
  "storytelling",
  "copywriting",
  "ai-usage",
  "notion",
  "editing",
  "career-coaching",
  "frontend",
  "api-integration",
  "performance",
  "linkedin",
  "basic seo",
  "tool-research",
  "content repurposing",
];

// Interest/Category options
export const interestOptions = [
  "content creation",
  "building tools",
  "teaching others",
  "market research",
  "design & aesthetics",
  "social media",
  "business services",
  "e-commerce",
  "automation",
  "consulting",
];

// Tool options
export const toolOptions = [
  "chatgpt",
  "canva",
  "notion",
  "figma",
  "descript",
  "pictory",
  "wordpress",
  "shopify",
  "gumroad",
  "etsy",
  "youtube",
  "tiktok",
  "instagram",
  "linkedin",
  "twitter",
  "medium",
  "substack",
];

// Delivery preference options
export const deliveryPreferenceOptions = [
  "digital products",
  "services",
  "content",
  "commerce",
  "saas",
];

// Audience type options
export const audienceTypeOptions = [
  "students",
  "new workers",
  "experienced workers",
  "executives",
  "company owners",
];
