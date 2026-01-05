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
    sideHustleId: "204",
    overview:
      "Claude-Powered Career Story Crafter is a service that turns messy career histories into polished resumes, LinkedIn profiles, and interview-ready stories. The core user is a job seeker or career pivoter who needs a clear narrative fast. The AI approach works because Claude can synthesize long timelines into outcome-driven language, while a human editor ensures accuracy, ATS alignment, and confident tone.",
    actionPlanRows: [
      {
        phase: "Intake Call",
        what: "Run a 45-minute interview to capture goals, roles, and wins.",
        tools: ["Zoom", "Notion"],
        time: "1 hour",
      },
      {
        phase: "Asset Gather",
        what: "Collect resume drafts, LinkedIn, and target job listings.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Resume Draft",
        what: "Use Claude to draft an ATS-friendly resume.",
        tools: ["Claude"],
        time: "3 hours",
      },
      {
        phase: "LinkedIn Rewrite",
        what: "Rewrite headline and About section for clarity and impact.",
        tools: ["Claude"],
        time: "2 hours",
      },
      {
        phase: "Story Bank",
        what: "Create 8-12 STAR-format interview stories.",
        tools: ["Claude"],
        time: "3 hours",
      },
      {
        phase: "Impact Pass",
        what: "Add metrics, outcomes, and action verbs to bullets.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Design",
        what: "Format in a clean resume layout and export.",
        tools: ["Canva"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver files with a short usage guide and edits window.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Refinement",
        what: "Offer one revision round for role targeting.",
        tools: ["Gmail"],
        time: "2 hours",
      },
    ],
    monetizationRows: [
      {
        offer: "Resume Refresh",
        description: "ATS-ready resume rewrite with one revision.",
        price: "$150-350",
        frequency: "One-time",
      },
      {
        offer: "Career Story Kit",
        description: "Resume + LinkedIn + STAR story bank.",
        price: "$300-700",
        frequency: "One-time",
      },
      {
        offer: "Premium Package",
        description: "Full kit plus cover letter and 2 revisions.",
        price: "$600-1200",
        frequency: "One-time",
      },
      {
        offer: "Interview Prep",
        description: "Mock interview and story refinement session.",
        price: "$150-300",
        frequency: "Add-on",
      },
      {
        offer: "Career Pivot",
        description: "Positioning strategy for switching industries.",
        price: "$250-600",
        frequency: "Add-on",
      },
      {
        offer: "Monthly Support",
        description: "Role-specific updates each month.",
        price: "$100-250",
        frequency: "Monthly",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Resume + LinkedIn rewrite that gets more interviews\n\nHi {name}, I turn messy career histories into ATS-ready resumes, LinkedIn profiles, and interview story banks using Claude plus human editing. If you share your current resume, I can deliver a full refresh in a week. Want a sample?",
      linkedin_dm:
        "Hey {name}, I help job seekers turn their experience into a clear resume, LinkedIn About, and STAR stories. If you want a fast, polished package, I can share a sample.",
      social_post:
        "Job search in progress? I create ATS-ready resumes, LinkedIn rewrites, and STAR story banks using Claude. DM for a sample.",
      short_hook:
        "Resume, LinkedIn, and interview stories done fast.",
    },
    promptPack: [
      {
        title: "Resume Rewrite",
        prompt:
          "Turn this career history into a modern resume for a {role} role. History: {paste}.",
        use_case: "Draft a resume quickly.",
      },
      {
        title: "LinkedIn About",
        prompt:
          "Rewrite this LinkedIn About to sound confident and ATS-friendly. Draft: {paste}.",
        use_case: "Polish LinkedIn profiles.",
      },
      {
        title: "STAR Stories",
        prompt:
          "Generate 8 STAR-format interview stories from this experience. Experience: {paste}.",
        use_case: "Prepare interview answers.",
      },
      {
        title: "Impact Metrics",
        prompt:
          "Add measurable impact metrics to these resume bullets. Bullets: {paste}.",
        use_case: "Strengthen outcomes.",
      },
      {
        title: "Role Targeting",
        prompt:
          "Tailor these resume bullets for a {role} job description. Bullets: {paste}. JD: {paste}.",
        use_case: "Customize for target roles.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Career intake questionnaire and notes template.",
      },
      {
        asset_type: "Template",
        tool: "Canva",
        description: "Modern resume layout templates.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Job application tracker and outreach log.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-create client folders and tasks.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client onboarding and revision emails.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator by package tier.",
      },
    ],
    quickWinChecklist: [
      { label: "Create a 45-minute intake checklist" },
      { label: "Draft a resume template in Canva" },
      { label: "Write 3 sample resume before/afters" },
      { label: "Build a STAR story bank template" },
      { label: "Publish a portfolio page" },
      { label: "Offer 3 discounted pilot clients" },
      { label: "Collect testimonials" },
      { label: "Productize your packages" },
    ],
    bonusUpgrade:
      "Expand into a career acceleration membership with monthly reviews, job search strategy, and interview coaching.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "1/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "3/5" },
      { field: "Demand Tags", value: "career, education, b2c, content" },
    ],
  },
  {
    sideHustleId: "206",
    overview:
      "Local SEO Content Booster is a service that produces location-specific content clusters for small businesses. The core user is a local business owner who needs more inbound leads without hiring a full agency. The AI approach works because it can quickly generate city- and service-specific pages, while a human editor ensures accuracy, compliance, and unique local relevance.",
    actionPlanRows: [
      {
        phase: "Client Intake",
        what: "Collect services, service areas, and differentiators.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Keyword Map",
        what: "Build a list of local keyword targets by service and city.",
        tools: ["Sheets", "ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Page Framework",
        what: "Create a reusable page template and FAQ structure.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Content Drafting",
        what: "Generate drafts for service pages and location pages.",
        tools: ["ChatGPT"],
        time: "4 hours",
      },
      {
        phase: "Local Proof",
        what: "Add reviews, case studies, and local references.",
        tools: ["Google Docs"],
        time: "2 hours",
      },
      {
        phase: "Optimization",
        what: "Optimize titles, meta descriptions, and internal links.",
        tools: ["Sheets", "Notion"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver content in upload-ready format.",
        tools: ["Google Docs"],
        time: "1 hour",
      },
      {
        phase: "Performance Review",
        what: "Review rankings after 30 days and refine.",
        tools: ["Sheets"],
        time: "2 hours",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Local Pack",
        description: "5 optimized service/location pages.",
        price: "$300-700",
        frequency: "One-time",
      },
      {
        offer: "City Expansion",
        description: "10-20 pages across multiple cities.",
        price: "$800-1800",
        frequency: "One-time",
      },
      {
        offer: "Local SEO Retainer",
        description: "Monthly new pages + updates and optimization.",
        price: "$300-900",
        frequency: "Monthly",
      },
      {
        offer: "GBP Content Add-on",
        description: "Google Business Profile posts and FAQs.",
        price: "$150-400",
        frequency: "Add-on",
      },
      {
        offer: "Review Page Kit",
        description: "Testimonial and case study pages.",
        price: "$200-500",
        frequency: "Add-on",
      },
      {
        offer: "Competitor Audit",
        description: "Local competitor content gap report.",
        price: "$150-350",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Local SEO pages that bring in more calls\n\nHi {name}, I create local SEO content packs for service businesses — optimized city pages, FAQs, and proof sections. If you share your services and cities, I can deliver a 5-page starter pack in a week. Want a sample page?",
      linkedin_dm:
        "Hey {name}, I help local businesses rank with city and service content packs. If you want a quick local SEO boost, I can share a sample page.",
      upwork_bio:
        "Local SEO Content Booster | City/service pages, FAQs, and GBP content for local businesses.",
      short_hook:
        "Local SEO content packs that drive calls.",
    },
    promptPack: [
      {
        title: "Service Page Draft",
        prompt:
          "Write a local service page for {service} in {city}. Include benefits, FAQs, and a CTA. Notes: {paste}.",
        use_case: "Generate city/service pages quickly.",
      },
      {
        title: "Local FAQ Builder",
        prompt:
          "Create 8 FAQs for {service} in {city} with concise answers. Notes: {paste}.",
        use_case: "Build FAQ sections.",
      },
      {
        title: "Meta Optimizer",
        prompt:
          "Write 5 title tags and meta descriptions for {service} in {city}.",
        use_case: "Optimize metadata.",
      },
      {
        title: "Local Proof",
        prompt:
          "Write a short local proof paragraph using these reviews: {paste}.",
        use_case: "Add local trust signals.",
      },
      {
        title: "Internal Link Map",
        prompt:
          "Suggest internal links between these local pages: {paste}.",
        use_case: "Improve internal linking.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Local SEO page template and checklist.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Keyword and page inventory tracker.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Client intake and approval document.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-create city page tasks from a list.",
      },
      {
        asset_type: "Template",
        tool: "Canva",
        description: "Local case study one-pager template.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Package pricing calculator by page volume.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick a single niche to start (plumbers, dentists)" },
      { label: "Build a 10-city keyword list" },
      { label: "Draft one city/service page" },
      { label: "Create a FAQ template" },
      { label: "Publish a sample page" },
      { label: "Reach out to 10 local businesses" },
      { label: "Deliver a starter pack" },
      { label: "Collect results and testimonials" },
    ],
    bonusUpgrade:
      "Expand into a local SEO subscription with ongoing content, listings updates, and review management.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "local, seo, content" },
    ],
  },
  {
    sideHustleId: "207",
    overview:
      "Notion + AI Ops Documentation Setup is a service that creates a centralized operations hub with AI-ready SOPs, templates, and workflows. The core user is a small business that needs organized processes without hiring a full ops team. The AI approach works because it standardizes messy processes, while the Notion system makes it easy to maintain and scale.",
    actionPlanRows: [
      {
        phase: "Ops Audit",
        what: "Identify core workflows and pain points with the team.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "System Design",
        what: "Design the Notion workspace structure and databases.",
        tools: ["Notion"],
        time: "4 hours",
      },
      {
        phase: "SOP Drafting",
        what: "Draft SOPs with AI prompts and team input.",
        tools: ["ChatGPT"],
        time: "6 hours",
      },
      {
        phase: "Template Build",
        what: "Create reusable templates for recurring tasks.",
        tools: ["Notion"],
        time: "4 hours",
      },
      {
        phase: "AI Enablement",
        what: "Add prompt guidance for using SOPs with AI tools.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Review",
        what: "Review with stakeholders and refine sections.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Training",
        what: "Train team members on using the system.",
        tools: ["Zoom"],
        time: "1 hour",
      },
      {
        phase: "Launch",
        what: "Launch workspace and document governance rules.",
        tools: ["Notion"],
        time: "1 hour",
      },
      {
        phase: "Maintenance",
        what: "Offer monthly updates and new SOP creation.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Ops Hub Setup",
        description: "Notion workspace + 10 SOPs and templates.",
        price: "$600-1500",
        frequency: "One-time",
      },
      {
        offer: "Team Workflow Pack",
        description: "20-30 SOPs with AI prompt guidance.",
        price: "$1500-3000",
        frequency: "One-time",
      },
      {
        offer: "Monthly Ops Support",
        description: "Ongoing SOP updates and process improvements.",
        price: "$400-900",
        frequency: "Monthly",
      },
      {
        offer: "Template Library",
        description: "Standalone template and prompt pack.",
        price: "$199-399",
        frequency: "One-time",
      },
      {
        offer: "Team Training",
        description: "Live training and Q&A session.",
        price: "$200-500",
        frequency: "Add-on",
      },
      {
        offer: "Automation Add-on",
        description: "Zapier workflows connected to Notion databases.",
        price: "$300-800",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: A clean ops hub for your team in Notion\n\nHi {name}, I build Notion ops hubs with SOPs, templates, and AI prompts so teams run consistently. If you share your core workflows, I can deliver a ready-to-use system in two weeks. Want a sample SOP?",
      linkedin_dm:
        "Hey {name}, I create Notion ops hubs with SOPs and AI prompts for small teams. If you need a clean system for operations, I can share a sample.",
      upwork_bio:
        "Notion + AI Ops Documentation Setup | SOPs, templates, and AI-ready workflows.",
      short_hook:
        "A Notion ops hub that makes your team run smoothly.",
    },
    promptPack: [
      {
        title: "SOP Draft",
        prompt:
          "Create a step-by-step SOP for this workflow. Include inputs, steps, and quality checks. Workflow: {paste}.",
        use_case: "Standardize workflows quickly.",
      },
      {
        title: "Template Builder",
        prompt:
          "Create a reusable template for this task including fields and instructions. Task: {paste}.",
        use_case: "Build task templates.",
      },
      {
        title: "QA Checklist",
        prompt:
          "Create a quality checklist for this process. Process: {paste}.",
        use_case: "Ensure consistency.",
      },
      {
        title: "AI Helper Prompt",
        prompt:
          "Write a prompt that helps a team member complete this SOP using AI. SOP: {paste}.",
        use_case: "Enable AI support.",
      },
      {
        title: "Process Audit",
        prompt:
          "List bottlenecks in this workflow and suggest improvements. Workflow: {paste}.",
        use_case: "Improve operations.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Ops hub workspace with SOP databases.",
      },
      {
        asset_type: "Template",
        tool: "Notion",
        description: "SOP template with AI prompt blocks.",
      },
      {
        asset_type: "Tracker",
        tool: "Notion",
        description: "Process ownership and update tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-create SOP tasks from forms.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Stakeholder intake and approval emails.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Ops ROI calculator for time savings.",
      },
    ],
    quickWinChecklist: [
      { label: "List your 10 most repeated workflows" },
      { label: "Create one SOP template" },
      { label: "Draft 3 SOPs with AI" },
      { label: "Build a simple Notion ops hub" },
      { label: "Record a 3-minute walkthrough" },
      { label: "Share a sample with 5 businesses" },
      { label: "Deliver a paid ops hub" },
      { label: "Collect feedback and refine" },
    ],
    bonusUpgrade:
      "Expand into a managed ops service with quarterly audits and automation builds.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "ops, documentation, ai" },
    ],
  },
  {
    sideHustleId: "208",
    overview:
      "AI Course Blueprint & Lesson Planner is a service that turns a raw course idea into a structured curriculum, lesson plan, and launch-ready outline. The core user is a creator or educator who wants to build a course quickly with clear outcomes. The AI approach works because it can organize content into a coherent learning path while templates keep delivery consistent.",
    actionPlanRows: [
      {
        phase: "Goal Intake",
        what: "Define the course outcome and target learner profile.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Outline Map",
        what: "Create a high-level module and lesson structure.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Lesson Plans",
        what: "Draft lesson objectives, key points, and exercises.",
        tools: ["ChatGPT", "Notion"],
        time: "4 hours",
      },
      {
        phase: "Assessment",
        what: "Add quizzes and assignments per module.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Content List",
        what: "Create a production checklist for videos and assets.",
        tools: ["Sheets"],
        time: "2 hours",
      },
      {
        phase: "Cohort Plan",
        what: "Add cohort schedule, milestones, and office hours.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Launch Assets",
        what: "Draft course description, outcomes, and lesson teasers.",
        tools: ["ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Review",
        what: "Review flow and adjust based on feedback.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver blueprint with editable templates.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
    ],
    monetizationRows: [
      {
        offer: "Course Blueprint",
        description: "Full module outline with lesson objectives.",
        price: "$300-700",
        frequency: "One-time",
      },
      {
        offer: "Lesson Planner",
        description: "Detailed lesson plans with exercises.",
        price: "$500-1200",
        frequency: "One-time",
      },
      {
        offer: "Launch Pack",
        description: "Blueprint + sales page copy and teaser assets.",
        price: "$800-1500",
        frequency: "One-time",
      },
      {
        offer: "Cohort Add-on",
        description: "Cohort schedule, milestones, and community plan.",
        price: "$200-500",
        frequency: "Add-on",
      },
      {
        offer: "Quiz Pack",
        description: "Quizzes and assignments per module.",
        price: "$200-400",
        frequency: "Add-on",
      },
      {
        offer: "Monthly Updates",
        description: "Lesson updates and new module planning.",
        price: "$200-500",
        frequency: "Monthly",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: A full course blueprint in 10 days\n\nHi {name}, I build course blueprints and lesson plans so creators can launch faster. If you share your topic and audience, I can deliver a full curriculum and lesson planner in 10 days. Want a sample outline?",
      linkedin_dm:
        "Hey {name}, I create AI-assisted course blueprints and lesson planners for creators. If you want a structured curriculum fast, I can share a sample outline.",
      upwork_bio:
        "AI Course Blueprint & Lesson Planner | Curriculum design, lesson plans, and launch outlines.",
      short_hook:
        "A full course blueprint delivered in 10 days.",
    },
    promptPack: [
      {
        title: "Course Outline",
        prompt:
          "Create a 6-module course outline for this topic with clear outcomes. Topic: {paste}.",
        use_case: "Build the course structure.",
      },
      {
        title: "Lesson Planner",
        prompt:
          "Draft a lesson plan with objectives, key points, and exercise. Lesson topic: {paste}.",
        use_case: "Create lesson content.",
      },
      {
        title: "Assessment Builder",
        prompt:
          "Write a 5-question quiz for this lesson with answers. Lesson: {paste}.",
        use_case: "Add assessments.",
      },
      {
        title: "Launch Teaser",
        prompt:
          "Write a short teaser description for this course and list 3 outcomes. Course: {paste}.",
        use_case: "Support marketing assets.",
      },
      {
        title: "Cohort Schedule",
        prompt:
          "Create a 4-week cohort schedule with milestones and office hours. Course: {paste}.",
        use_case: "Plan cohorts.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Course blueprint and lesson plan templates.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Course production checklist and timeline.",
      },
      {
        asset_type: "Template",
        tool: "Canva",
        description: "Lesson slide and worksheet templates.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-create lesson tasks from the outline.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Lesson script and narration template.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator for course tiers.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick a course topic and audience" },
      { label: "Draft a 6-module outline" },
      { label: "Write one lesson plan" },
      { label: "Create a quiz template" },
      { label: "Draft a course teaser" },
      { label: "Publish a sample outline" },
      { label: "Pitch 10 creators" },
      { label: "Deliver a paid blueprint" },
    ],
    bonusUpgrade:
      "Scale into a course studio that handles full production and cohort management.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "education, course, planning" },
    ],
  },
  {
    sideHustleId: "209",
    overview:
      "Legal Email & Policy Simplifier is a service that converts complex legal emails, terms, and policies into plain-language summaries. The core user is a founder or manager who needs clarity for teams or customers. The AI approach works because it can distill dense language quickly, while a human reviewer ensures accuracy and non-legal advice positioning.",
    actionPlanRows: [
      {
        phase: "Intake",
        what: "Collect policy documents and the intended audience.",
        tools: ["Notion", "Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Structure",
        what: "Outline key sections and decision points.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "AI Summary",
        what: "Generate plain-language summaries and key takeaways.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Risk Flags",
        what: "Highlight clauses that require attention or review.",
        tools: ["ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Rewrite",
        what: "Rewrite key sections in clear, friendly language.",
        tools: ["Google Docs"],
        time: "3 hours",
      },
      {
        phase: "Review",
        what: "Review for accuracy and add disclaimer language.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver summary and simplified policy files.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Updates",
        what: "Offer updates when policies change.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Single Policy Simplify",
        description: "Plain-language summary + key risks.",
        price: "$200-500",
        frequency: "One-time",
      },
      {
        offer: "Policy Pack",
        description: "3-5 documents simplified and summarized.",
        price: "$600-1200",
        frequency: "One-time",
      },
      {
        offer: "Customer FAQ",
        description: "Plain-language FAQ for customers.",
        price: "$150-350",
        frequency: "Add-on",
      },
      {
        offer: "Team Brief",
        description: "Internal brief for staff and operations.",
        price: "$150-300",
        frequency: "Add-on",
      },
      {
        offer: "Monthly Updates",
        description: "Update summaries as policies change.",
        price: "$150-400",
        frequency: "Monthly",
      },
      {
        offer: "Compliance Snapshot",
        description: "Risk flag report and suggested actions.",
        price: "$200-500",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Turn legal policies into plain English\n\nHi {name}, I simplify legal emails and policies into clear summaries your team or customers can understand. I provide a plain-language version plus key risk flags (not legal advice). Want a sample summary?",
      linkedin_dm:
        "Hey {name}, I turn legal policies into plain-English summaries with key risk flags. If you need a clear internal brief, I can share a sample.",
      upwork_bio:
        "Legal Email & Policy Simplifier | Plain-language summaries and risk flags (informational).",
      short_hook:
        "Plain-English policy summaries for teams and customers.",
    },
    promptPack: [
      {
        title: "Plain-Language Summary",
        prompt:
          "Summarize this policy in plain English for non-lawyers. Policy: {paste}.",
        use_case: "Create clear summaries.",
      },
      {
        title: "Risk Flags",
        prompt:
          "List the top 5 risk or attention items in this policy. Policy: {paste}.",
        use_case: "Highlight key risks.",
      },
      {
        title: "FAQ Builder",
        prompt:
          "Create a customer FAQ from this policy. Policy: {paste}.",
        use_case: "Generate customer-facing FAQs.",
      },
      {
        title: "Internal Brief",
        prompt:
          "Write a one-page internal brief explaining this policy to staff. Policy: {paste}.",
        use_case: "Create internal guidance.",
      },
      {
        title: "Clause Rewrite",
        prompt:
          "Rewrite this clause in simpler language without changing meaning. Clause: {paste}.",
        use_case: "Simplify dense sections.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Policy summary template with sections.",
      },
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Risk flag and compliance checklist.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Policy update tracker and version log.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-log policy updates and deadlines.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client intake and delivery emails.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator by document volume.",
      },
    ],
    quickWinChecklist: [
      { label: "Collect 3 example policies" },
      { label: "Build a summary template" },
      { label: "Draft a plain-English sample" },
      { label: "Create a risk flag checklist" },
      { label: "Publish a before/after sample" },
      { label: "Reach out to 10 founders" },
      { label: "Deliver a paid policy summary" },
      { label: "Create a reusable FAQ template" },
    ],
    bonusUpgrade:
      "Expand into a compliance documentation service with ongoing policy monitoring.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "legal, compliance, content" },
    ],
  },
  {
    sideHustleId: "210",
    overview:
      "B2B SOP Automation & Checklist Audit is a service that reviews business processes, identifies automation opportunities, and delivers clean SOPs and checklists. The core user is an operations manager who wants consistent execution and fewer bottlenecks. The AI approach works because it can quickly map process steps, while the consultant validates real-world accuracy.",
    actionPlanRows: [
      {
        phase: "Process Intake",
        what: "Collect current workflows and bottlenecks.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Flow Mapping",
        what: "Map process steps and handoffs.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Automation Scan",
        what: "Identify steps suitable for automation or templates.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "SOP Drafting",
        what: "Draft SOPs with inputs, outputs, and QA checks.",
        tools: ["ChatGPT"],
        time: "4 hours",
      },
      {
        phase: "Checklist Build",
        what: "Create operational checklists for key processes.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Review",
        what: "Review with stakeholders and refine.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Automation Plan",
        what: "Deliver an automation roadmap and quick wins.",
        tools: ["Sheets"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver SOPs, checklists, and audit report.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
    ],
    monetizationRows: [
      {
        offer: "Process Audit",
        description: "Audit + 5 SOPs and a checklist pack.",
        price: "$600-1400",
        frequency: "One-time",
      },
      {
        offer: "Ops Standardization",
        description: "10-15 SOPs with automation roadmap.",
        price: "$1500-3000",
        frequency: "One-time",
      },
      {
        offer: "Automation Add-on",
        description: "Zapier or Make workflows for key steps.",
        price: "$400-900",
        frequency: "Add-on",
      },
      {
        offer: "Monthly Ops Support",
        description: "Ongoing SOP updates and QA reviews.",
        price: "$400-900",
        frequency: "Monthly",
      },
      {
        offer: "Checklist Library",
        description: "Standalone checklist and SOP library.",
        price: "$199-399",
        frequency: "One-time",
      },
      {
        offer: "Team Training",
        description: "Live training for process owners.",
        price: "$200-500",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Standardize your ops with SOPs + automation\n\nHi {name}, I audit B2B processes and deliver clean SOPs, checklists, and an automation roadmap. If you share your core workflows, I can deliver a full audit in two weeks. Want a sample SOP?",
      linkedin_dm:
        "Hey {name}, I help teams standardize operations with SOPs and automation checklists. If you want a quick audit, I can share a sample.",
      upwork_bio:
        "B2B SOP Automation & Checklist Audit | Process audits, SOPs, and automation plans.",
      short_hook:
        "Turn messy processes into clean SOPs + automation wins.",
    },
    promptPack: [
      {
        title: "Process Map",
        prompt:
          "Turn this workflow into a step-by-step process map. Workflow: {paste}.",
        use_case: "Map workflows fast.",
      },
      {
        title: "SOP Draft",
        prompt:
          "Write an SOP with inputs, steps, and QA checks for this process. Process: {paste}.",
        use_case: "Create SOPs.",
      },
      {
        title: "Automation Ideas",
        prompt:
          "Identify automation opportunities in this process and suggest tools. Process: {paste}.",
        use_case: "Find automation wins.",
      },
      {
        title: "Checklist",
        prompt:
          "Create a checklist for this process with pass/fail criteria. Process: {paste}.",
        use_case: "Standardize execution.",
      },
      {
        title: "Risk Flags",
        prompt:
          "List common failure points in this workflow and how to prevent them. Workflow: {paste}.",
        use_case: "Reduce errors.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "SOP and checklist templates with governance.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Process inventory and automation tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Workflow automation examples and templates.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Stakeholder intake and delivery emails.",
      },
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Audit report template with findings.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Time savings and ROI calculator.",
      },
    ],
    quickWinChecklist: [
      { label: "Identify your top 5 recurring processes" },
      { label: "Map one workflow end-to-end" },
      { label: "Draft a SOP template" },
      { label: "Create a checklist for one process" },
      { label: "List 5 automation opportunities" },
      { label: "Deliver a sample audit" },
      { label: "Close a paid ops audit" },
      { label: "Collect a testimonial" },
    ],
    bonusUpgrade:
      "Expand into a managed ops program with quarterly audits and automation builds.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "b2b, ops, automation" },
    ],
  },
  {
    sideHustleId: "211",
    overview:
      "Short-Form Social Repurposing + Subtitles Service is a service that turns long videos into short, punchy clips with hooks, captions, and subtitles. The core user is a creator or brand that wants consistent short-form content without editing overhead. The AI approach works because it can identify highlights and generate hooks quickly, while editing tools handle polish.",
    actionPlanRows: [
      {
        phase: "Content Intake",
        what: "Collect long-form videos and target platforms.",
        tools: ["Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Highlight Selection",
        what: "Identify 10-15 high-impact moments per video.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Clip Editing",
        what: "Cut clips and adjust framing for vertical format.",
        tools: ["CapCut"],
        time: "4 hours",
      },
      {
        phase: "Hook Writing",
        what: "Write hooks and on-screen text for each clip.",
        tools: ["ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Subtitles",
        what: "Add dynamic subtitles and styling.",
        tools: ["CapCut"],
        time: "3 hours",
      },
      {
        phase: "Packaging",
        what: "Deliver a folder with clips, captions, and post notes.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Optimization",
        what: "Review performance and refine hooks monthly.",
        tools: ["Sheets"],
        time: "2 hours",
      },
      {
        phase: "Retainer",
        what: "Offer weekly or monthly clip packages.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Clip Pack",
        description: "10 short clips with captions and hooks.",
        price: "$200-500",
        frequency: "One-time",
      },
      {
        offer: "Monthly Repurpose",
        description: "4 videos repurposed into 40-60 clips.",
        price: "$800-2000",
        frequency: "Monthly",
      },
      {
        offer: "Premium Editing",
        description: "Advanced motion graphics and branding.",
        price: "$300-800",
        frequency: "Add-on",
      },
      {
        offer: "Caption Pack",
        description: "SEO-optimized captions and hashtags.",
        price: "$150-300",
        frequency: "Add-on",
      },
      {
        offer: "Clip Strategy",
        description: "Content calendar and posting guidance.",
        price: "$200-500",
        frequency: "Add-on",
      },
      {
        offer: "One-Day Batch",
        description: "Batch edit 20 clips in one day.",
        price: "$400-900",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Turn long videos into short clips every week\n\nHi {name}, I repurpose long-form videos into short clips with hooks and subtitles. If you send one long video, I can deliver 10 punchy clips in 5 days. Want a sample clip?",
      linkedin_dm:
        "Hey {name}, I turn long videos into short-form clips with hooks and subtitles. If you want a steady clip pipeline, I can share a sample.",
      social_post:
        "I repurpose long videos into short-form clips with hooks + captions. DM for a sample pack.",
      short_hook:
        "Short-form clips with hooks and subtitles, done for you.",
    },
    promptPack: [
      {
        title: "Highlight Finder",
        prompt:
          "Identify 10 high-impact moments from this transcript. Transcript: {paste}.",
        use_case: "Find clip-worthy moments.",
      },
      {
        title: "Hook Writer",
        prompt:
          "Write 5 hooks for this clip topic. Clip topic: {paste}.",
        use_case: "Create strong hooks.",
      },
      {
        title: "Caption Pack",
        prompt:
          "Write 3 caption options with hashtags for this clip. Clip: {paste}.",
        use_case: "Generate captions quickly.",
      },
      {
        title: "Clip Title",
        prompt:
          "Write 5 short title overlays for this clip. Clip: {paste}.",
        use_case: "Add on-screen text ideas.",
      },
      {
        title: "Posting Schedule",
        prompt:
          "Create a 2-week posting schedule for these clips. Clips: {paste}.",
        use_case: "Support content planning.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "CapCut",
        description: "Short-form clip editing project template.",
      },
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Clip tracker and content calendar.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Performance tracker for clips.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-import new videos and create tasks.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client intake and delivery emails.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator by clip volume.",
      },
    ],
    quickWinChecklist: [
      { label: "Create a 10-clip demo pack" },
      { label: "Build a simple intake form" },
      { label: "Write 10 hook templates" },
      { label: "Design subtitle styles" },
      { label: "Publish a before/after example" },
      { label: "Pitch 10 creators" },
      { label: "Deliver a paid clip pack" },
      { label: "Offer monthly repurpose retainers" },
    ],
    bonusUpgrade:
      "Expand into a full short-form growth service with publishing and analytics.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "social, video, ugc" },
    ],
  },
  {
    sideHustleId: "212",
    overview:
      "Audio Branding & Podcast Voice Upgrade is a service that creates professional intros, outros, and sonic branding for podcasts and creators. The core user is a podcaster who wants a consistent audio identity. The AI approach works because it can generate multiple voice and music options quickly, while the editor ensures polish and licensing clarity.",
    actionPlanRows: [
      {
        phase: "Brand Intake",
        what: "Collect show vibe, references, and target audience.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Script Draft",
        what: "Draft intro/outro scripts and taglines.",
        tools: ["ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Voice Options",
        what: "Generate 3-5 voice options for the intro/outro.",
        tools: ["ElevenLabs"],
        time: "3 hours",
      },
      {
        phase: "Music Bed",
        what: "Select or generate music beds that fit the brand.",
        tools: ["Suno", "Audacity"],
        time: "3 hours",
      },
      {
        phase: "Production",
        what: "Mix voice, music, and stingers with mastering.",
        tools: ["Audacity"],
        time: "4 hours",
      },
      {
        phase: "Deliverables",
        what: "Export intro, outro, stingers, and raw stems.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Usage Guide",
        what: "Provide usage notes and licensing summary.",
        tools: ["Notion"],
        time: "1 hour",
      },
      {
        phase: "Revisions",
        what: "Offer one revision round for tweaks.",
        tools: ["Audacity"],
        time: "2 hours",
      },
    ],
    monetizationRows: [
      {
        offer: "Podcast Intro Pack",
        description: "Intro + outro with one voice and music bed.",
        price: "$300-700",
        frequency: "One-time",
      },
      {
        offer: "Full Sonic Kit",
        description: "Intro, outro, stingers, and voice options.",
        price: "$800-1500",
        frequency: "One-time",
      },
      {
        offer: "Brand Refresh",
        description: "Updated audio branding for existing show.",
        price: "$400-900",
        frequency: "One-time",
      },
      {
        offer: "Voice Upgrade",
        description: "Premium voice model or custom voice clone.",
        price: "$200-600",
        frequency: "Add-on",
      },
      {
        offer: "Monthly Audio Support",
        description: "New promos or seasonal stingers.",
        price: "$200-500",
        frequency: "Monthly",
      },
      {
        offer: "Licensing Add-on",
        description: "Expanded commercial usage rights.",
        price: "$150-300",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Refresh your podcast intro with a sonic brand kit\n\nHi {name}, I create podcast intros/outros and sonic branding packs using AI voice and music tools, then polish them for broadcast quality. If you share your show style, I can deliver a full kit in a week. Want a sample audio?",
      linkedin_dm:
        "Hey {name}, I build audio branding kits for podcasts (intro/outro/stingers). If you want a stronger sonic identity, I can share a sample.",
      upwork_bio:
        "Audio Branding & Podcast Voice Upgrade | Intros, outros, stingers, and sonic logos.",
      short_hook:
        "Podcast intros and sonic branding that sound pro.",
    },
    promptPack: [
      {
        title: "Intro Script",
        prompt:
          "Write a 20-second podcast intro for a show about {topic}. Include the host name and tagline.",
        use_case: "Create intro scripts quickly.",
      },
      {
        title: "Outro Script",
        prompt:
          "Write a 15-second outro with a CTA to subscribe and review. Show: {paste}.",
        use_case: "Standardize outros.",
      },
      {
        title: "Voice Tone Guide",
        prompt:
          "Summarize the desired voice tone in 5 bullets from these notes: {paste}.",
        use_case: "Guide voice selection.",
      },
      {
        title: "Sonic Logo",
        prompt:
          "Create a 3-second sonic logo prompt for a {mood} brand. Mood: {paste}.",
        use_case: "Generate sonic logo options.",
      },
      {
        title: "Stinger Ideas",
        prompt:
          "List 5 short stinger ideas for a {topic} podcast. Notes: {paste}.",
        use_case: "Plan transitions.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Podcast brand intake and audio spec template.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Audio asset inventory and version tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-deliver audio files to clients.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Script approval and revision notes.",
      },
      {
        asset_type: "Template",
        tool: "Canva",
        description: "Audio preview board and branding guide.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator for audio packages.",
      },
    ],
    quickWinChecklist: [
      { label: "Create 3 demo intros for a sample show" },
      { label: "Build a podcast intake form" },
      { label: "Draft intro/outro script templates" },
      { label: "Publish an audio demo reel" },
      { label: "Reach out to 10 podcasters" },
      { label: "Deliver a paid intro pack" },
      { label: "Collect testimonials" },
      { label: "Offer monthly refresh packages" },
    ],
    bonusUpgrade:
      "Expand into a full audio production service with episode editing and distribution.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "2/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "audio, branding, podcasts" },
    ],
  },
  {
    sideHustleId: "213",
    overview:
      "AI Music Hooks & Jingle Snippets is a service that generates short music hooks and jingles for ads, intros, and social content. The core user is a creator or brand that needs memorable audio hooks fast. The AI approach works because it can generate multiple hook variations quickly, while a producer selects and polishes the best takes.",
    actionPlanRows: [
      {
        phase: "Brand Intake",
        what: "Collect brand vibe, references, and usage context.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Hook Brief",
        what: "Define tempo, mood, and key instruments.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Prompt Drafting",
        what: "Create prompts for multiple hook variations.",
        tools: ["ChatGPT"],
        time: "2 hours",
      },
      {
        phase: "Generation",
        what: "Generate 10-15 hook options with AI tools.",
        tools: ["Suno"],
        time: "4 hours",
      },
      {
        phase: "Curation",
        what: "Select top options and refine timing.",
        tools: ["DAW"],
        time: "3 hours",
      },
      {
        phase: "Mixing",
        what: "Normalize levels and export clean versions.",
        tools: ["Audacity"],
        time: "2 hours",
      },
      {
        phase: "Deliverables",
        what: "Deliver hooks with licensing notes.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Variations",
        what: "Offer additional cuts for different durations.",
        tools: ["DAW"],
        time: "2 hours",
      },
    ],
    monetizationRows: [
      {
        offer: "Hook Pack",
        description: "5 short hooks with basic license.",
        price: "$200-500",
        frequency: "One-time",
      },
      {
        offer: "Jingle Snippets",
        description: "10 hooks + 3 longer jingle variants.",
        price: "$400-900",
        frequency: "One-time",
      },
      {
        offer: "Brand Audio Kit",
        description: "Hooks, stingers, and sonic logo.",
        price: "$800-1500",
        frequency: "One-time",
      },
      {
        offer: "Extended License",
        description: "Commercial usage for paid media.",
        price: "$150-300",
        frequency: "Add-on",
      },
      {
        offer: "Monthly Hooks",
        description: "New hook drops each month.",
        price: "$200-500",
        frequency: "Monthly",
      },
      {
        offer: "Custom Remix",
        description: "Remix or rework of selected hooks.",
        price: "$150-400",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Custom music hooks for your ads and intros\n\nHi {name}, I generate short music hooks and jingle snippets for creators and brands using AI, then polish them for clean delivery. If you share your brand vibe, I can deliver 5 hooks in a week. Want a sample?",
      linkedin_dm:
        "Hey {name}, I create AI-generated music hooks and jingles for ads and intros. If you want quick audio branding, I can share a sample pack.",
      upwork_bio:
        "AI Music Hooks & Jingle Snippets | Short hooks, jingles, and sonic branding packs.",
      short_hook:
        "Custom music hooks delivered fast.",
    },
    promptPack: [
      {
        title: "Hook Prompt",
        prompt:
          "Generate a 12-second music hook for a {mood} brand. Include a catchy melody. Mood: {paste}.",
        use_case: "Create hook options fast.",
      },
      {
        title: "Jingle Variant",
        prompt:
          "Create 3 variations of this hook with different instruments. Hook: {paste}.",
        use_case: "Generate variations.",
      },
      {
        title: "Sonic Logo Prompt",
        prompt:
          "Generate a 3-second sonic logo that feels {adjective}. Brand: {paste}.",
        use_case: "Create short sonic logos.",
      },
      {
        title: "Tempo Options",
        prompt:
          "Create 2 faster and 2 slower versions of this hook. Hook: {paste}.",
        use_case: "Offer timing options.",
      },
      {
        title: "Usage Notes",
        prompt:
          "Write usage notes for a client about how to use this hook in ads and intros. Hook: {paste}.",
        use_case: "Provide client guidance.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Audio intake and creative brief template.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Hook inventory and licensing tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-deliver audio files and licenses.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client delivery and usage notes email.",
      },
      {
        asset_type: "Template",
        tool: "Canva",
        description: "Audio preview board and brand guide.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator for hook packs.",
      },
    ],
    quickWinChecklist: [
      { label: "Create 5 demo hooks across genres" },
      { label: "Build an audio intake form" },
      { label: "Define pricing for 5- and 10-hook packs" },
      { label: "Publish a demo reel" },
      { label: "Reach out to 10 creators or brands" },
      { label: "Deliver a paid hook pack" },
      { label: "Collect testimonials" },
      { label: "Offer monthly hook subscriptions" },
    ],
    bonusUpgrade:
      "Expand into a full sonic branding studio with licensing management and refresh cycles.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "2/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "audio, ugc, ads" },
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

  console.log(`✅ Seeded ${playbooks.length} playbooks (204, 206-213).`);
} catch (error) {
  console.error("❌ Failed to seed playbooks:", error);
  process.exitCode = 1;
} finally {
  await sql.end();
}
