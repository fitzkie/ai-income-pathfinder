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
    sideHustleId: "200",
    overview:
      "AI-Enhanced Recruitment Ads is a service that rewrites job posts to be inclusive, clear, and high-conversion while reducing bias. The core user is an HR leader or hiring manager who wants more qualified applicants without inflating ad spend. The AI approach works because it can detect bias patterns, optimize for role clarity, and generate variations fast, while a human ensures accuracy and compliance.",
    actionPlanRows: [
      {
        phase: "Role Intake",
        what: "Collect the hiring brief, must-have skills, and team culture notes.",
        tools: ["Notion", "Google Docs"],
        time: "2 hours",
      },
      {
        phase: "Baseline Audit",
        what: "Analyze the current job ad for bias, clarity, and drop-off points.",
        tools: ["ChatGPT", "Sheets"],
        time: "2 hours",
      },
      {
        phase: "Competitor Scan",
        what: "Review 5-10 competing job ads to benchmark positioning.",
        tools: ["LinkedIn", "Sheets"],
        time: "2 hours",
      },
      {
        phase: "Rewrite Pass",
        what: "Draft a new job ad with inclusive, role-specific language.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Variant Testing",
        what: "Create 2-3 headline and intro variants for A/B testing.",
        tools: ["ChatGPT", "Sheets"],
        time: "2 hours",
      },
      {
        phase: "Compliance Check",
        what: "Verify legal and policy requirements for job postings.",
        tools: ["Notion"],
        time: "1 hour",
      },
      {
        phase: "Delivery",
        what: "Deliver final ad copy with a short rationale and usage tips.",
        tools: ["Google Docs"],
        time: "1 hour",
      },
      {
        phase: "Performance Review",
        what: "Review results after 2 weeks and refine the copy.",
        tools: ["Sheets"],
        time: "2 hours",
      },
    ],
    monetizationRows: [
      {
        offer: "Single Role Rewrite",
        description: "Full rewrite of one job ad with bias review.",
        price: "$150-350",
        frequency: "One-time",
      },
      {
        offer: "Hiring Sprint",
        description: "3 job ads with variants and a style guide.",
        price: "$400-900",
        frequency: "One-time",
      },
      {
        offer: "Recruiting Pack",
        description: "5-10 roles optimized with templates and prompts.",
        price: "$900-1800",
        frequency: "One-time",
      },
      {
        offer: "Monthly Optimization",
        description: "Ongoing edits and A/B test recommendations.",
        price: "$250-600",
        frequency: "Monthly",
      },
      {
        offer: "Employer Brand Add-on",
        description: "Company culture paragraph and EVP refresh.",
        price: "$150-300",
        frequency: "Add-on",
      },
      {
        offer: "ATS Keyword Tuning",
        description: "Keyword alignment for ATS and search visibility.",
        price: "$100-200",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Improve applicant quality with inclusive job ads\n\nHi {name}, I optimize job ads for clarity and inclusive language so companies attract more qualified candidates. I can audit and rewrite one of your roles with A/B variants in a week. Want a quick sample rewrite?",
      linkedin_dm:
        "Hey {name}, I help HR teams improve job ads using AI plus bias checks. If you want more qualified applicants, I can deliver a clean rewrite and variants. Want a sample?",
      upwork_bio:
        "AI-Enhanced Recruitment Ads | Inclusive, high-conversion job ad rewrites with bias checks and A/B variants.",
      short_hook:
        "Inclusive job ads that attract better candidates.",
    },
    promptPack: [
      {
        title: "Bias Scan",
        prompt:
          "Review this job ad for biased or exclusionary language and suggest inclusive alternatives. Ad: {paste}.",
        use_case: "Identify and remove bias.",
      },
      {
        title: "Role Clarity Rewrite",
        prompt:
          "Rewrite this job ad for clarity and outcomes. Use concise bullets and highlight top 3 responsibilities. Ad: {paste}.",
        use_case: "Improve readability.",
      },
      {
        title: "Headline Variants",
        prompt:
          "Create 5 headline options for this role that appeal to diverse candidates. Role: {paste}.",
        use_case: "A/B test hooks.",
      },
      {
        title: "EVP Paragraph",
        prompt:
          "Write a 3-4 sentence employer value proposition for this company based on these notes: {paste}.",
        use_case: "Strengthen employer branding.",
      },
      {
        title: "ATS Keyword Tune",
        prompt:
          "Suggest ATS-friendly keywords for this role without stuffing. Role: {paste}.",
        use_case: "Improve search visibility.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Job ad rewrite template with sections and prompts.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Job ad variant tracker and A/B results log.",
      },
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Role intake and culture notes template.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-create project folders per hiring role.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client update and approval email templates.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator by role volume.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick a niche (tech, healthcare, retail)" },
      { label: "Collect 5 example job ads to analyze" },
      { label: "Create a bias-check checklist" },
      { label: "Build 3 headline templates" },
      { label: "Rewrite one sample job ad" },
      { label: "Publish a before/after case study" },
      { label: "Reach out to 10 hiring managers" },
      { label: "Deliver a paid pilot rewrite" },
    ],
    bonusUpgrade:
      "Expand into a recruiting optimization service with applicant tracking analytics and conversion benchmarks.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "hr, ads, copy" },
    ],
  },
  {
    sideHustleId: "201",
    overview:
      "Sales Script Customizer is a digital product that tailors sales scripts to different buyer personas and objections. The core user is a sales rep or founder who needs consistent messaging across discovery, pitch, and objection handling. The AI approach works because it can generate persona-specific variations quickly while templates ensure structure and tone stay on-message.",
    actionPlanRows: [
      {
        phase: "Persona Mapping",
        what: "Define top buyer personas and common objections.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Framework",
        what: "Create a script structure for discovery, demo, and close.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Prompt Pack",
        what: "Write prompts for persona-specific and objection scripts.",
        tools: ["ChatGPT"],
        time: "3 hours",
      },
      {
        phase: "Script Library",
        what: "Draft baseline scripts and 3 persona variants.",
        tools: ["ChatGPT", "Notion"],
        time: "4 hours",
      },
      {
        phase: "Objection Bank",
        what: "Build a response bank with follow-up questions.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Formatting",
        what: "Package scripts into a clean Notion or PDF template.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Testing",
        what: "Test scripts with 2-3 sales reps and refine wording.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Launch",
        what: "Publish on Gumroad with preview scripts and demo.",
        tools: ["Gumroad"],
        time: "2 hours",
      },
      {
        phase: "Updates",
        what: "Add new persona packs and objection sets monthly.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Starter Script Kit",
        description: "Core scripts + 10 objections for one persona.",
        price: "$29-59",
        frequency: "One-time",
      },
      {
        offer: "Pro Script Library",
        description: "Multi-persona scripts + objection bank.",
        price: "$79-129",
        frequency: "One-time",
      },
      {
        offer: "Team License",
        description: "Use across a team with internal training rights.",
        price: "$199-399",
        frequency: "One-time",
      },
      {
        offer: "Persona Pack",
        description: "Extra persona scripts and objections.",
        price: "$19-39",
        frequency: "Add-on",
      },
      {
        offer: "Live Workshop",
        description: "90-minute training on script usage.",
        price: "$200-500",
        frequency: "One-time",
      },
      {
        offer: "Update Subscription",
        description: "Monthly script updates and new prompts.",
        price: "$9-19",
        frequency: "Monthly",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Persona-based sales scripts your team can use today\n\nHi {name}, I built a Sales Script Customizer kit with persona-specific scripts and objection replies. It helps reps stay consistent and convert faster. Want a preview script pack?",
      linkedin_dm:
        "Hey {name}, I created a sales script kit that adapts scripts to different buyer personas and objections. Happy to share a preview if helpful.",
      social_post:
        "Most sales teams have scripts, but not persona-specific ones. I built a kit that tailors discovery and objection scripts by buyer type. DM me for a preview.",
      short_hook:
        "Sales scripts customized for each buyer persona.",
    },
    promptPack: [
      {
        title: "Persona Script Generator",
        prompt:
          "Write a discovery script for this persona, using their priorities and objections. Persona: {paste}.",
        use_case: "Create persona-specific scripts.",
      },
      {
        title: "Objection Reply",
        prompt:
          "Write a concise response to this objection with a follow-up question. Objection: {paste}.",
        use_case: "Build objection handling.",
      },
      {
        title: "Value Hook",
        prompt:
          "Write 5 opening hooks that align with this persona's main goal. Persona: {paste}.",
        use_case: "Improve call openings.",
      },
      {
        title: "Closing Script",
        prompt:
          "Draft a closing script that asks for next steps and handles hesitation. Context: {paste}.",
        use_case: "Create strong closes.",
      },
      {
        title: "Email Follow-Up",
        prompt:
          "Write a follow-up email after a discovery call with summary and next steps. Notes: {paste}.",
        use_case: "Standardize follow-ups.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Script library database with persona tags.",
      },
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Editable script templates and call notes.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Objection tracking and win-rate sheet.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-log calls and attach script versions.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Follow-up and proposal email templates.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Deal size and pipeline value calculator.",
      },
    ],
    quickWinChecklist: [
      { label: "List your top 3 buyer personas" },
      { label: "Write 10 common objections" },
      { label: "Build a discovery script framework" },
      { label: "Draft one persona-specific script" },
      { label: "Create a follow-up email template" },
      { label: "Publish a sample script preview" },
      { label: "Share the kit with 10 sales reps" },
      { label: "Collect feedback and refine" },
    ],
    bonusUpgrade:
      "Expand into a sales enablement platform with script analytics, coaching notes, and call integration.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "1/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "3/5" },
      { field: "Demand Tags", value: "sales, templates, automation" },
    ],
  },
  {
    sideHustleId: "202",
    overview:
      "Micro-Course Generator is a service that converts long-form content into structured micro-courses with summaries, visuals, and quizzes. The core user is a creator or educator who already has YouTube or podcast content but wants a paid learning product quickly. The AI approach works because it can summarize, outline lessons, and draft quizzes fast, while templates keep the course consistent.",
    actionPlanRows: [
      {
        phase: "Content Intake",
        what: "Collect source videos, transcripts, or podcast episodes.",
        tools: ["Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Outline",
        what: "Generate a lesson outline and learning objectives.",
        tools: ["ChatGPT", "Notion"],
        time: "3 hours",
      },
      {
        phase: "Lesson Drafts",
        what: "Draft 5-10 micro-lessons with summaries and key takeaways.",
        tools: ["ChatGPT"],
        time: "4 hours",
      },
      {
        phase: "Visual Assets",
        what: "Create slides or lesson visuals for each module.",
        tools: ["Canva"],
        time: "4 hours",
      },
      {
        phase: "Quiz Build",
        what: "Generate quizzes and knowledge checks per lesson.",
        tools: ["ChatGPT", "Notion"],
        time: "3 hours",
      },
      {
        phase: "Packaging",
        what: "Package lessons into a course hub with navigation.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Pricing",
        what: "Define pricing tiers and bonus materials.",
        tools: ["Sheets"],
        time: "2 hours",
      },
      {
        phase: "Launch",
        what: "Publish the micro-course and a preview lesson.",
        tools: ["Gumroad", "Loom"],
        time: "2 hours",
      },
      {
        phase: "Iteration",
        what: "Add new modules and refresh based on feedback.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Single Micro-Course",
        description: "5-7 lessons with summaries and quiz modules.",
        price: "$200-600",
        frequency: "One-time",
      },
      {
        offer: "Course Bundle",
        description: "2-3 micro-courses from a content series.",
        price: "$700-1500",
        frequency: "One-time",
      },
      {
        offer: "Creator Retainer",
        description: "Monthly repurpose package for new episodes.",
        price: "$400-900",
        frequency: "Monthly",
      },
      {
        offer: "Visual Upgrade",
        description: "Custom branded slide design and templates.",
        price: "$150-300",
        frequency: "Add-on",
      },
      {
        offer: "Quiz Add-on",
        description: "Advanced quizzes and assessment logic.",
        price: "$100-250",
        frequency: "Add-on",
      },
      {
        offer: "Launch Support",
        description: "Sales page copy and email launch sequence.",
        price: "$200-500",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Turn your content into a micro-course in 10 days\n\nHi {name}, I turn long-form content into structured micro-courses with lessons, visuals, and quizzes. If you share 3-5 episodes, I can deliver a ready-to-sell micro-course in 10 days. Want a sample outline?",
      linkedin_dm:
        "Hey {name}, I help creators repurpose podcasts or YouTube videos into paid micro-courses. If you want a new product fast, I can share a sample outline.",
      upwork_bio:
        "Micro-Course Generator | Turn long-form content into structured lessons, visuals, and quizzes.",
      short_hook:
        "Turn your content into a paid micro-course fast.",
    },
    promptPack: [
      {
        title: "Lesson Outline",
        prompt:
          "Create a 6-lesson outline from this transcript with objectives and key takeaways. Transcript: {paste}.",
        use_case: "Turn transcripts into lesson plans.",
      },
      {
        title: "Lesson Summary",
        prompt:
          "Summarize this lesson into 5 bullet points and 3 key takeaways. Lesson: {paste}.",
        use_case: "Create lesson summaries quickly.",
      },
      {
        title: "Quiz Builder",
        prompt:
          "Write a 5-question quiz with answers based on this lesson. Lesson: {paste}.",
        use_case: "Generate quizzes per module.",
      },
      {
        title: "Slide Script",
        prompt:
          "Turn this lesson into a slide-by-slide outline (10 slides max). Lesson: {paste}.",
        use_case: "Create visual assets.",
      },
      {
        title: "Course Pitch",
        prompt:
          "Write a short sales pitch for this micro-course with outcomes and audience. Course: {paste}.",
        use_case: "Support launch copy.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Course hub template with modules and navigation.",
      },
      {
        asset_type: "Template",
        tool: "Canva",
        description: "Slide deck templates for lessons.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Lesson checklist and production tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-import transcripts and generate tasks.",
      },
      {
        asset_type: "Script",
        tool: "Google Docs",
        description: "Lesson script and narration template.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Pricing calculator for course bundles.",
      },
    ],
    quickWinChecklist: [
      { label: "Pick 3 source episodes to repurpose" },
      { label: "Generate a 6-lesson outline" },
      { label: "Draft one lesson summary" },
      { label: "Create 5 slides in Canva" },
      { label: "Build a 5-question quiz" },
      { label: "Publish a preview lesson" },
      { label: "Pitch 10 creators a pilot" },
      { label: "Deliver a paid micro-course" },
    ],
    bonusUpgrade:
      "Scale into a micro-course studio offering monthly repurpose pipelines and learner analytics.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "education, repurpose, content" },
    ],
  },
  {
    sideHustleId: "203",
    overview:
      "AI Licensing Advisor is a consulting service that helps creators and brands understand AI licensing, rights, and content usage policies. The core user is a creator, agency, or brand team that uses AI tools and wants clear guidance on usage rights and risk boundaries. The AI approach works because it speeds up policy research and scenario mapping, while human review ensures accuracy and context. This service provides informational guidance, not legal advice.",
    actionPlanRows: [
      {
        phase: "Client Intake",
        what: "Collect use cases, content types, and distribution channels.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Policy Research",
        what: "Review AI tool terms and usage policies relevant to the client.",
        tools: ["Policy DB", "Notion"],
        time: "4 hours",
      },
      {
        phase: "Risk Mapping",
        what: "Identify licensing risks and gray areas for the use case.",
        tools: ["Claude", "Notion"],
        time: "3 hours",
      },
      {
        phase: "Usage Guidelines",
        what: "Draft do and do not rules for the client workflow.",
        tools: ["Notion"],
        time: "3 hours",
      },
      {
        phase: "Template Build",
        what: "Create reusable policy checklists and disclosure language.",
        tools: ["Google Docs"],
        time: "3 hours",
      },
      {
        phase: "Scenario Review",
        what: "Run 3-5 example scenarios through the guidelines.",
        tools: ["Claude"],
        time: "2 hours",
      },
      {
        phase: "Report Delivery",
        what: "Deliver a clear report with risks and recommendations.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Training",
        what: "Run a 60-minute training session for stakeholders.",
        tools: ["Zoom"],
        time: "1 hour",
      },
      {
        phase: "Updates",
        what: "Provide quarterly updates as policies change.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Policy Review",
        description: "Review AI tool policies and deliver a summary.",
        price: "$500-1200",
        frequency: "One-time",
      },
      {
        offer: "Licensing Audit",
        description: "Full audit of AI usage and risk map report.",
        price: "$1200-2500",
        frequency: "One-time",
      },
      {
        offer: "Team Training",
        description: "Workshop on AI usage rights and risk guidelines.",
        price: "$500-1000",
        frequency: "One-time",
      },
      {
        offer: "Policy Toolkit",
        description: "Templates and checklists for ongoing compliance.",
        price: "$300-700",
        frequency: "One-time",
      },
      {
        offer: "Update Retainer",
        description: "Quarterly policy updates and reviews.",
        price: "$400-900",
        frequency: "Quarterly",
      },
      {
        offer: "Scenario Review Add-on",
        description: "Review 5 additional AI usage scenarios.",
        price: "$200-500",
        frequency: "Add-on",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Clarify AI usage rights for your team\n\nHi {name}, I run an AI Licensing Advisor service that helps teams understand tool usage rights and reduce risk. I review policies and deliver clear guidelines and templates. Want a sample report outline?",
      linkedin_dm:
        "Hey {name}, I help teams navigate AI licensing and usage rights with clear guidelines and templates. If this is a priority, I can share a sample report.",
      upwork_bio:
        "AI Licensing Advisor | Usage rights audits, policy summaries, and team training (informational guidance).",
      short_hook:
        "Clear AI usage rights and risk guidelines for your team.",
    },
    promptPack: [
      {
        title: "Policy Summary",
        prompt:
          "Summarize the usage rights and restrictions from this policy in plain language. Policy: {paste}.",
        use_case: "Quickly digest policy terms.",
      },
      {
        title: "Risk Flags",
        prompt:
          "Identify potential licensing risks for this use case. Use case: {paste}.",
        use_case: "Highlight risk areas.",
      },
      {
        title: "Disclosure Draft",
        prompt:
          "Write a short AI usage disclosure paragraph for this content workflow. Workflow: {paste}.",
        use_case: "Create disclosure language.",
      },
      {
        title: "Scenario Analysis",
        prompt:
          "Analyze this AI usage scenario and suggest safer alternatives. Scenario: {paste}.",
        use_case: "Evaluate edge cases.",
      },
      {
        title: "Checklist Builder",
        prompt:
          "Create a compliance checklist for this AI workflow. Workflow: {paste}.",
        use_case: "Operationalize guidance.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Notion",
        description: "AI usage policy audit template.",
      },
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Disclosure and usage guidelines templates.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Policy change tracker and review schedule.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-alerts for policy updates.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client intake and follow-up templates.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Risk scoring worksheet for AI workflows.",
      },
    ],
    quickWinChecklist: [
      { label: "Select 3 AI tools to specialize in" },
      { label: "Create a policy summary template" },
      { label: "Build a risk checklist" },
      { label: "Draft a sample usage guideline" },
      { label: "Review one real client scenario" },
      { label: "Publish a sample report outline" },
      { label: "Reach out to 10 creators or agencies" },
      { label: "Deliver a paid policy review" },
    ],
    bonusUpgrade:
      "Expand into a compliance subscription that monitors tool policies and updates client guidance automatically.",
    summaryRows: [
      { field: "Difficulty", value: "3/5" },
      { field: "Time-to-Cash", value: "3/5" },
      { field: "Startup Cost", value: "2/5" },
      { field: "Revenue Potential", value: "5/5" },
      { field: "Demand Tags", value: "legal, ai, consulting" },
    ],
  },
  {
    sideHustleId: "204",
    overview:
      "Claude-Powered Career Story Crafter is a service that turns messy career histories into polished resumes, LinkedIn profiles, and interview stories. The core user is a job seeker or career switcher who needs clear positioning fast. The AI approach works because Claude can synthesize long histories into outcomes-focused narratives, while the specialist ensures accuracy, ATS readiness, and tone.",
    actionPlanRows: [
      {
        phase: "Intake Call",
        what: "Run a 45-minute intake to capture career history and goals.",
        tools: ["Zoom", "Notion"],
        time: "1 hour",
      },
      {
        phase: "Asset Collection",
        what: "Collect existing resume, LinkedIn, and job descriptions.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Resume Draft",
        what: "Use Claude to draft a modern, ATS-friendly resume.",
        tools: ["Claude"],
        time: "3 hours",
      },
      {
        phase: "LinkedIn Rewrite",
        what: "Rewrite LinkedIn headline and About section.",
        tools: ["Claude"],
        time: "2 hours",
      },
      {
        phase: "Story Bank",
        what: "Generate 8-12 STAR interview stories.",
        tools: ["Claude"],
        time: "3 hours",
      },
      {
        phase: "Polish",
        what: "Edit for clarity, impact metrics, and tone.",
        tools: ["Notion"],
        time: "2 hours",
      },
      {
        phase: "Design",
        what: "Format resume in a clean, modern layout.",
        tools: ["Canva"],
        time: "2 hours",
      },
      {
        phase: "Delivery",
        what: "Deliver files with a quick usage guide.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Support",
        what: "Offer a 2-week revision window for updates.",
        tools: ["Gmail"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Resume Refresh",
        description: "ATS-friendly resume rewrite with one revision.",
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
        description: "Updates and role-specific tailoring each month.",
        price: "$100-250",
        frequency: "Monthly",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Resume + LinkedIn rewrite that lands more interviews\n\nHi {name}, I help job seekers turn messy experience into clear, ATS-ready resumes and LinkedIn profiles. I use Claude to draft fast, then polish for impact. Want a sample rewrite?",
      linkedin_dm:
        "Hey {name}, I turn career history into a clean resume, LinkedIn About, and interview story bank. If you are job hunting, I can share a sample before/after.",
      social_post:
        "Job searching? I create ATS-ready resumes, LinkedIn rewrites, and STAR story banks using Claude. DM for a sample.",
      short_hook:
        "Resume, LinkedIn, and interview stories done fast.",
    },
    promptPack: [
      {
        title: "Resume Rewrite",
        prompt:
          "Turn this raw career history into a modern resume for a {role} role. History: {paste}.",
        use_case: "Draft the resume quickly.",
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
        use_case: "Strengthen resume outcomes.",
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
    sideHustleId: "205",
    overview:
      "Nonprofit Grant Draft Co-Pilot is a service that creates first-draft grant narratives and impact summaries for small nonprofits. The core user is a nonprofit leader who needs to apply for multiple grants with limited staff. The AI approach works because it can draft structured narratives quickly, while the specialist ensures alignment with funder requirements and local context.",
    actionPlanRows: [
      {
        phase: "Grant Intake",
        what: "Collect funder requirements, past grants, and program data.",
        tools: ["Google Drive"],
        time: "2 hours",
      },
      {
        phase: "Program Summary",
        what: "Draft a concise program overview and impact metrics.",
        tools: ["Claude", "Google Docs"],
        time: "3 hours",
      },
      {
        phase: "Narrative Draft",
        what: "Write a full grant narrative aligned to funder questions.",
        tools: ["Claude"],
        time: "4 hours",
      },
      {
        phase: "Localization",
        what: "Tailor the draft to the funder priorities and language.",
        tools: ["Google Docs"],
        time: "3 hours",
      },
      {
        phase: "Impact Highlights",
        what: "Create a 1-page impact summary for attachments.",
        tools: ["Canva"],
        time: "2 hours",
      },
      {
        phase: "Compliance Check",
        what: "Verify word count, required sections, and formatting.",
        tools: ["Google Docs"],
        time: "1 hour",
      },
      {
        phase: "Delivery",
        what: "Deliver drafts with a checklist for final review.",
        tools: ["Google Drive"],
        time: "1 hour",
      },
      {
        phase: "Revision",
        what: "Provide one revision round based on feedback.",
        tools: ["Google Docs"],
        time: "2 hours",
      },
      {
        phase: "Library",
        what: "Create a reusable library of program narratives.",
        tools: ["Notion"],
        time: "Ongoing",
      },
    ],
    monetizationRows: [
      {
        offer: "Single Grant Draft",
        description: "Full narrative draft for one application.",
        price: "$300-700",
        frequency: "One-time",
      },
      {
        offer: "Grant Bundle",
        description: "3 grant drafts with shared program data.",
        price: "$800-1600",
        frequency: "One-time",
      },
      {
        offer: "Monthly Support",
        description: "Ongoing drafting and edits for active cycles.",
        price: "$400-900",
        frequency: "Monthly",
      },
      {
        offer: "Impact Summary",
        description: "One-page visual impact report add-on.",
        price: "$150-300",
        frequency: "Add-on",
      },
      {
        offer: "Template Pack",
        description: "Reusable narrative templates and prompts.",
        price: "$200-400",
        frequency: "One-time",
      },
      {
        offer: "Review Only",
        description: "Edit and polish existing grant drafts.",
        price: "$200-500",
        frequency: "One-time",
      },
    ],
    outreachTemplates: {
      cold_email:
        "Subject: Faster grant drafts for your team\n\nHi {name}, I help nonprofits draft grant narratives and impact summaries quickly using Claude, then polish for funder requirements. If you share a current RFP, I can deliver a clean first draft in a week. Want a sample outline?",
      linkedin_dm:
        "Hey {name}, I help nonprofits draft grant narratives and impact summaries with fast turnaround. If you have an upcoming deadline, I can share a sample draft format.",
      upwork_bio:
        "Nonprofit Grant Draft Co-Pilot | Grant narratives, impact summaries, and reusable templates for nonprofits.",
      short_hook:
        "Fast, funder-aligned grant drafts for nonprofits.",
    },
    promptPack: [
      {
        title: "Grant Narrative Draft",
        prompt:
          "Draft a 1000-word narrative answering these funder questions. Inputs: {paste}.",
        use_case: "Create the core narrative quickly.",
      },
      {
        title: "Impact Summary",
        prompt:
          "Summarize this program into a 300-word impact overview with metrics. Program: {paste}.",
        use_case: "Create one-page impact summaries.",
      },
      {
        title: "Funder Alignment",
        prompt:
          "Rewrite this paragraph to align with these funder priorities. Paragraph: {paste}. Priorities: {paste}.",
        use_case: "Tailor to funder priorities.",
      },
      {
        title: "Budget Narrative",
        prompt:
          "Draft a concise budget narrative explaining how funds will be used. Inputs: {paste}.",
        use_case: "Support budget sections.",
      },
      {
        title: "Outcomes and Evaluation",
        prompt:
          "Write an outcomes and evaluation section with 3 measurable indicators. Program: {paste}.",
        use_case: "Strengthen evaluation sections.",
      },
    ],
    toolkitRows: [
      {
        asset_type: "Template",
        tool: "Google Docs",
        description: "Grant narrative templates with section prompts.",
      },
      {
        asset_type: "Template",
        tool: "Notion",
        description: "Program data and outcomes tracker.",
      },
      {
        asset_type: "Tracker",
        tool: "Sheets",
        description: "Grant calendar and submission tracker.",
      },
      {
        asset_type: "Automation",
        tool: "Zapier",
        description: "Auto-save RFPs and deadlines into tracker.",
      },
      {
        asset_type: "Script",
        tool: "Gmail",
        description: "Client intake and document request email.",
      },
      {
        asset_type: "Calculator",
        tool: "Sheets",
        description: "Budget narrative worksheet.",
      },
    ],
    quickWinChecklist: [
      { label: "Collect 2 winning grant examples" },
      { label: "Build a grant narrative template" },
      { label: "Draft a sample impact summary" },
      { label: "Create an intake checklist for nonprofits" },
      { label: "Publish a sample grant outline" },
      { label: "Reach out to 10 local nonprofits" },
      { label: "Deliver a pilot grant draft" },
      { label: "Create a reusable narrative library" },
    ],
    bonusUpgrade:
      "Expand into a grant operations partner with pipeline management, grant calendars, and submission support.",
    summaryRows: [
      { field: "Difficulty", value: "2/5" },
      { field: "Time-to-Cash", value: "2/5" },
      { field: "Startup Cost", value: "1/5" },
      { field: "Revenue Potential", value: "4/5" },
      { field: "Demand Tags", value: "nonprofit, b2b, content, fundraising" },
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

  console.log(`✅ Seeded ${playbooks.length} playbooks (200-205).`);
} catch (error) {
  console.error("❌ Failed to seed playbooks:", error);
  process.exitCode = 1;
} finally {
  await sql.end();
}
