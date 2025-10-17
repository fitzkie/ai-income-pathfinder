import { Opportunity } from "@shared/schema";

export const opportunities: Opportunity[] = [
  {
    id: "1",
    slug: "affiliate-blog-ai-content-engine",
    title: "Affiliate Blog + AI Content Engine",
    summary: "Use AI to create SEO blog posts around affiliate niches, monetize through links.",
    category: "Content",
    skillsNeeded: ["writing", "basic seo"],
    assetsHelpful: ["wordpress", "chatgpt"],
    difficulty: 2,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 2,
    demandTags: ["affiliate-marketing", "seo", "blogging"],
    exampleTasks: [
      "Research affiliate niches with low competition",
      "Generate blog posts optimized for long-tail keywords",
      "Insert affiliate links and publish on schedule"
    ],
    examplePrompts: [
      "Write a 1500-word blog post optimized for 'best AI tools for teachers', include clear headings and product recommendations.",
      "Summarize 10 trending affiliate niches from Reddit and Google Trends."
    ]
  },
  {
    id: "2",
    slug: "youtube-faceless-channel",
    title: "YouTube Faceless Channel (AI Script + B-Roll)",
    summary: "Use ChatGPT to write scripts and stock footage for faceless monetized channels.",
    category: "Content",
    skillsNeeded: ["writing", "video editing"],
    assetsHelpful: ["youtube", "descript", "pictory"],
    difficulty: 3,
    timeToCash: 4,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["youtube-automation", "faceless-channel", "content-monetization"],
    exampleTasks: [
      "Write engaging scripts for trending topics",
      "Use stock B-roll and AI voiceovers to create videos",
      "Publish 3+ times per week to grow watch time"
    ],
    examplePrompts: [
      "Generate a 5-minute YouTube script about 'Top 7 Future AI Tools' with hook, body, and CTA.",
      "Give me 20 faceless channel niches with RPM above $10."
    ]
  },
  {
    id: "3",
    slug: "tiktok-product-reviewer",
    title: "TikTok Product Reviewer",
    summary: "Create short AI-scripted TikToks reviewing trending Amazon/TikTok Shop products.",
    category: "Content",
    skillsNeeded: ["short-form video", "storytelling"],
    assetsHelpful: ["tiktok"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["tiktok-shop", "ugc", "product-reviews"],
    exampleTasks: [
      "Research trending TikTok Shop products",
      "Generate short punchy scripts with AI",
      "Shoot UGC-style reviews and include affiliate links"
    ],
    examplePrompts: [
      "Write a 30-second TikTok script for a trending LED water bottle targeting Gen Z.",
      "Give me 10 TikTok product review hooks."
    ]
  },
  {
    id: "4",
    slug: "etsy-printables-store",
    title: "Etsy Printables Store",
    summary: "Use AI + Canva to design printable templates and sell them passively on Etsy.",
    category: "Commerce",
    skillsNeeded: ["design", "research"],
    assetsHelpful: ["etsy", "canva"],
    difficulty: 2,
    timeToCash: 3,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["etsy", "printables", "canva"],
    exampleTasks: [
      "Research trending printable niches like planners or wall art",
      "Design templates using Canva and AI-generated ideas",
      "List them with SEO-optimized titles"
    ],
    examplePrompts: [
      "Give me 10 printable planner ideas trending on Etsy this month.",
      "Generate product descriptions for a minimalist wedding seating chart template."
    ]
  },
  {
    id: "5",
    slug: "prompt-packs-playbooks",
    title: "Prompt Packs & Playbooks",
    summary: "Create niche-specific prompt bundles and sell them on Gumroad or Etsy.",
    category: "Digital Products",
    skillsNeeded: ["writing", "ai-usage"],
    assetsHelpful: ["gumroad"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["prompts", "gumroad", "digital-downloads"],
    exampleTasks: [
      "Create prompt packs for niche audiences like realtors or YouTubers",
      "Bundle prompts with instructions and use-cases",
      "Sell through Gumroad or Etsy"
    ],
    examplePrompts: [
      "Give me 20 ChatGPT prompts for real estate agents to write better listings.",
      "Structure a 30-prompt Notion template for YouTube scriptwriting."
    ]
  },
  {
    id: "6",
    slug: "notion-template-seller",
    title: "Notion Template Seller",
    summary: "Design Notion templates using AI research to identify trending productivity niches.",
    category: "Digital Products",
    skillsNeeded: ["notion", "design", "research"],
    assetsHelpful: ["gumroad", "notion"],
    difficulty: 2,
    timeToCash: 3,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["notion", "templates", "productivity"],
    exampleTasks: [
      "Research top-selling Notion templates",
      "Build your own using AI for structure and copy",
      "List on Gumroad with demo videos"
    ],
    examplePrompts: [
      "Analyze top 20 Notion templates on Gumroad for trends and pricing.",
      "Generate the structure and descriptions for a Notion 'Life OS' dashboard."
    ]
  },
  {
    id: "7",
    slug: "podcast-content-repurposer",
    title: "Podcast Content Repurposer",
    summary: "Turn podcast episodes into tweets, blog posts, reels using AI transcription and summarization.",
    category: "Services",
    skillsNeeded: ["writing", "editing", "content repurposing"],
    assetsHelpful: ["descript", "canva"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["podcast", "repurposing", "short-form-content"],
    exampleTasks: [
      "Transcribe episodes with Whisper or Descript",
      "Summarize into threads, posts, or carousels",
      "Offer this as a service to podcasters"
    ],
    examplePrompts: [
      "Summarize this podcast transcript into 5 viral tweets.",
      "Extract 10 short clips with hooks from a 45-min podcast."
    ]
  },
  {
    id: "8",
    slug: "linkedin-ghostwriter-ai",
    title: "LinkedIn Ghostwriter (AI Assisted)",
    summary: "Offer B2B content writing services for founders and executives using AI as co-writer.",
    category: "Services",
    skillsNeeded: ["writing", "linkedin"],
    assetsHelpful: ["linkedin", "chatgpt"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 4,
    demandTags: ["linkedin", "ghostwriting", "b2b-content"],
    exampleTasks: [
      "Interview client or review their content",
      "Generate post drafts with AI",
      "Edit to match voice and tone"
    ],
    examplePrompts: [
      "Draft 5 LinkedIn posts about SaaS growth with a conversational founder tone.",
      "Summarize 3 blog posts into LinkedIn carousels."
    ]
  },
  {
    id: "9",
    slug: "resume-linkedin-optimizer",
    title: "Resume & LinkedIn Optimizer",
    summary: "Use AI to rewrite resumes and LinkedIn profiles to help job seekers stand out.",
    category: "Services",
    skillsNeeded: ["editing", "career-coaching"],
    assetsHelpful: ["linkedin"],
    difficulty: 2,
    timeToCash: 1,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["job-search", "resume", "career"],
    exampleTasks: [
      "Collect client resume data",
      "Rewrite using AI templates and keyword optimization",
      "Deliver polished profiles with fast turnaround"
    ],
    examplePrompts: [
      "Rewrite this resume for a senior marketing manager role using SEO keywords.",
      "Draft a LinkedIn 'About' section in a confident, authentic tone."
    ]
  },
  {
    id: "10",
    slug: "tiktok-hook-script-pack",
    title: "TikTok Hook & Script Pack Service",
    summary: "Sell packs of viral TikTok hooks, captions, and script templates for creators.",
    category: "Digital Products",
    skillsNeeded: ["short-form video", "copywriting"],
    assetsHelpful: ["tiktok", "gumroad"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["tiktok", "hooks", "scripts"],
    exampleTasks: [
      "Generate viral hook lists using GPT",
      "Package as editable Notion/Google Docs",
      "Sell on Gumroad or Fiverr"
    ],
    examplePrompts: [
      "Generate 50 viral TikTok hooks for finance content creators.",
      "Give me 10 short script structures for under 30s storytelling."
    ]
  },
  {
    id: "11",
    slug: "caption-hashtag-generator-tool",
    title: "Caption + Hashtag Generator Tool",
    summary: "Build a simple GPT-powered web tool that generates captions and hashtags for creators.",
    category: "SaaS",
    skillsNeeded: ["coding", "frontend", "api-integration"],
    assetsHelpful: ["chatgpt"],
    difficulty: 3,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["tiktok", "instagram", "social-media-tools"],
    exampleTasks: [
      "Create a simple UI with prompt input",
      "Integrate OpenAI to generate captions and hashtags",
      "Launch a freemium version"
    ],
    examplePrompts: [
      "Generate 10 Instagram captions and hashtags for a travel reel about Bali.",
      "Write short, witty captions for TikTok beauty content."
    ]
  },
  {
    id: "12",
    slug: "ai-research-concierge",
    title: "AI Research Concierge",
    summary: "Offer research services for entrepreneurs using AI to summarize and find data fast.",
    category: "Services",
    skillsNeeded: ["research", "writing"],
    assetsHelpful: ["chatgpt"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["market-research", "competitive-analysis", "startups"],
    exampleTasks: [
      "Research industry trends",
      "Summarize competitor data",
      "Deliver structured reports"
    ],
    examplePrompts: [
      "Summarize top 10 AI startups in legal tech with funding and unique features.",
      "Find and summarize the top 5 pain points for Shopify store owners in 2025."
    ]
  },
  {
    id: "13",
    slug: "digital-product-reviewer",
    title: "Digital Product Reviewer (Medium + Newsletter)",
    summary: "Use AI to review trending tools/products, write short articles, and monetize via affiliate.",
    category: "Content",
    skillsNeeded: ["writing", "tool-research"],
    assetsHelpful: ["medium", "substack"],
    difficulty: 2,
    timeToCash: 3,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["medium", "affiliate", "product-reviews"],
    exampleTasks: [
      "Pick trending AI tools weekly",
      "Use GPT to draft structured reviews",
      "Publish to Medium or newsletter"
    ],
    examplePrompts: [
      "Write a review article on a new AI writing tool in a witty but professional tone.",
      "Summarize top 5 AI Chrome extensions trending this month."
    ]
  },
  {
    id: "14",
    slug: "ugc-creator-ai-scriptwriting",
    title: "UGC Creator with AI Scriptwriting",
    summary: "Sell short-form content packages to brands by combining your personality with AI scripting.",
    category: "Content",
    skillsNeeded: ["short-form video", "performance"],
    assetsHelpful: ["tiktok", "instagram"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["ugc", "brand-content", "tiktok-shop"],
    exampleTasks: [
      "Get briefs from brands",
      "Use AI to generate hook/script variations",
      "Shoot content and deliver"
    ],
    examplePrompts: [
      "Write 5 UGC-style TikTok scripts for a new skincare serum targeting Gen Z.",
      "Give me 10 variations of a 'reaction style' TikTok hook for a gadget."
    ]
  },
  {
    id: "15",
    slug: "ai-chatbot-services-smb",
    title: "AI Chatbot Services for SMBs",
    summary: "Build custom chatbots for small businesses to automate FAQs, lead qualification, and customer support.",
    category: "Services",
    skillsNeeded: ["coding", "api-integration"],
    assetsHelpful: ["chatgpt"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["chatbots", "smb", "automation"],
    exampleTasks: [
      "Identify SMBs with high FAQ volume",
      "Build custom GPT-powered chatbots",
      "Integrate with websites and provide maintenance"
    ],
    examplePrompts: [
      "Create a chatbot script for a dental office handling appointment bookings and FAQs.",
      "Generate 20 common customer questions for a local restaurant chatbot."
    ]
  },
  {
    id: "16",
    slug: "local-business-ai-packages",
    title: "Local Business AI Packages",
    summary: "Offer AI-powered services like review responses, social posts, and listing optimization for local businesses.",
    category: "Services",
    skillsNeeded: ["sales", "writing"],
    assetsHelpful: ["chatgpt"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["local-business", "gmb", "reviews"],
    exampleTasks: [
      "Prospect local businesses with poor online presence",
      "Use AI to draft review responses and social posts",
      "Deliver monthly packages with analytics"
    ],
    examplePrompts: [
      "Write 10 responses to negative reviews for a plumbing business in a professional tone.",
      "Generate a week's worth of Instagram posts for a local coffee shop."
    ]
  },
  {
    id: "17",
    slug: "course-workbook-ai-creation",
    title: "Course/Workbook Creation with AI",
    summary: "Help experts turn their knowledge into online courses or workbooks using AI for content generation.",
    category: "Services",
    skillsNeeded: ["teaching", "writing"],
    assetsHelpful: ["chatgpt", "notion"],
    difficulty: 3,
    timeToCash: 3,
    startupCost: 1,
    typicalARPU: 4,
    demandTags: ["courses", "education", "content-creation"],
    exampleTasks: [
      "Interview subject matter experts",
      "Use AI to structure modules and write content",
      "Design workbooks and deliver final product"
    ],
    examplePrompts: [
      "Create a course outline for 'Email Marketing for Freelancers' with 6 modules.",
      "Generate 20 practical exercises for a social media course workbook."
    ]
  },
  {
    id: "18",
    slug: "amazon-kdp-ai-enhanced",
    title: "Amazon KDP Low/No-Content Enhanced by AI",
    summary: "Use AI to research niches and create enhanced low-content books (journals, planners, activity books).",
    category: "Commerce",
    skillsNeeded: ["design", "research"],
    assetsHelpful: ["canva"],
    difficulty: 2,
    timeToCash: 3,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["kdp", "publishing", "passive-income"],
    exampleTasks: [
      "Research trending KDP niches using AI analysis",
      "Design interiors with Canva and AI suggestions",
      "Publish and optimize listings for keywords"
    ],
    examplePrompts: [
      "Find 15 profitable low-content book niches on Amazon with low competition.",
      "Generate 50 gratitude journal prompts for young professionals."
    ]
  },
  {
    id: "19",
    slug: "email-newsletter-monetization",
    title: "Email Newsletter Monetization (Curation + Sponsors)",
    summary: "Start a niche newsletter using AI for content curation, grow audience, and attract sponsors.",
    category: "Content",
    skillsNeeded: ["writing", "research"],
    assetsHelpful: ["substack"],
    difficulty: 3,
    timeToCash: 4,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["newsletter", "curation", "sponsorships"],
    exampleTasks: [
      "Pick a niche with engaged audience potential",
      "Use AI to curate and summarize weekly content",
      "Grow to 1k+ subscribers and pitch sponsors"
    ],
    examplePrompts: [
      "Curate the top 5 AI news stories this week with a brief summary for each.",
      "Write a compelling pitch to sponsors for a marketing newsletter with 2k subscribers."
    ]
  },
  {
    id: "20",
    slug: "gumroad-bundles-assets-sops",
    title: "Gumroad Bundles (Assets + Prompts + SOPs)",
    summary: "Package AI prompts, templates, and SOPs into digital bundles for specific professions or use cases.",
    category: "Digital Products",
    skillsNeeded: ["writing", "design"],
    assetsHelpful: ["gumroad", "canva"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["gumroad", "bundles", "templates"],
    exampleTasks: [
      "Identify high-demand professions needing AI help",
      "Create comprehensive bundles with prompts, templates, and guides",
      "Launch with email sequence and social proof"
    ],
    examplePrompts: [
      "Create a bundle outline for 'AI Tools for Real Estate Agents' with prompts, checklists, and templates.",
      "Generate 30 email templates for e-commerce brands using AI tone adjustment."
    ]
  },
  {
    id: "21",
    slug: "micro-saas-gpt-single-feature",
    title: "Micro-SaaS with GPT (Single-Feature Tools)",
    summary: "Build simple, focused web tools powered by GPT for specific tasks (e.g., bio generator, email subject tester).",
    category: "SaaS",
    skillsNeeded: ["coding", "frontend", "api-integration"],
    assetsHelpful: ["chatgpt"],
    difficulty: 4,
    timeToCash: 4,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["micro-saas", "gpt", "tools"],
    exampleTasks: [
      "Identify a pain point that needs automation",
      "Build MVP with clean UI and GPT integration",
      "Launch freemium model with viral sharing"
    ],
    examplePrompts: [
      "List 10 micro-SaaS ideas for content creators using GPT APIs.",
      "Write a product description for a 'LinkedIn Bio Generator' tool."
    ]
  },
  {
    id: "22",
    slug: "data-cleaning-enrichment-freelance",
    title: "Data Cleaning & Enrichment Freelance (AI-Assisted)",
    summary: "Offer data services to startups using AI to clean, categorize, and enrich datasets faster.",
    category: "Services",
    skillsNeeded: ["data analysis", "coding"],
    assetsHelpful: ["chatgpt"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 4,
    demandTags: ["data", "freelance", "startups"],
    exampleTasks: [
      "Find startups with messy data on Upwork",
      "Use AI to categorize, clean, and enrich datasets",
      "Deliver CSV/JSON with documentation"
    ],
    examplePrompts: [
      "Write a regex pattern to clean and standardize 10k email addresses.",
      "Categorize 500 product descriptions into 10 categories using GPT."
    ]
  },
  {
    id: "23",
    slug: "ai-newsletter-curator",
    title: "AI Newsletter Curator",
    summary: "Curate trending AI news, tools, and niche opportunities into a weekly newsletter and monetize through sponsorships and affiliate links.",
    category: "Content",
    skillsNeeded: ["writing", "research"],
    assetsHelpful: ["substack"],
    difficulty: 3,
    timeToCash: 4,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["newsletter", "curation", "ai-tools"],
    exampleTasks: [
      "Scan daily AI news using Perplexity/Feedly",
      "Summarize top stories and tools",
      "Distribute via email with CTA for affiliate offers"
    ],
    examplePrompts: [
      "Summarize today's top 5 AI launches in a punchy newsletter intro.",
      "Create a newsletter section highlighting 3 underrated AI tools with affiliate links."
    ]
  },
  {
    id: "24",
    slug: "midjourney-print-shop",
    title: "Midjourney Print Shop",
    summary: "Use Midjourney to generate unique artwork and sell prints, canvases, or merch through print-on-demand services.",
    category: "Commerce",
    skillsNeeded: ["design"],
    assetsHelpful: ["shopify"],
    difficulty: 3,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["midjourney", "print-on-demand", "art"],
    exampleTasks: [
      "Generate themed collections (e.g., cosmic botanicals, vintage sci-fi)",
      "Upload designs to print-on-demand platform",
      "Create simple landing pages and run targeted ads"
    ],
    examplePrompts: [
      "Create a Midjourney prompt for a 'retro-futuristic botanical garden' poster.",
      "Generate 20 variations of a 'celestial animal' art series."
    ]
  },
  {
    id: "25",
    slug: "micro-saas-niche-industries",
    title: "Micro-SaaS for Niche Industries",
    summary: "Build lightweight AI-powered web tools solving specific problems for industries (e.g., legal clause generator, real estate listing enhancer).",
    category: "SaaS",
    skillsNeeded: ["coding", "ai-usage"],
    assetsHelpful: [],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 3,
    typicalARPU: 4,
    demandTags: ["saas", "micro-apps", "niche-tools"],
    exampleTasks: [
      "Identify niche with repetitive manual tasks",
      "Prototype a GPT-based solution with simple UI",
      "Launch freemium model with Stripe billing"
    ],
    examplePrompts: [
      "List 10 tedious tasks in real estate that could be automated with GPT.",
      "Draft the system prompt for a 'contract clause generator' specialized in commercial leases."
    ]
  },
  {
    id: "26",
    slug: "youtube-script-pack-marketplace",
    title: "YouTube Script Pack Marketplace",
    summary: "Sell packs of AI-generated YouTube scripts and hooks for different niches to creators who want plug-and-play content.",
    category: "Digital Products",
    skillsNeeded: ["writing", "storytelling"],
    assetsHelpful: ["gumroad", "notion"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["youtube", "scripts", "content-creators"],
    exampleTasks: [
      "Generate themed script packs (e.g., productivity, tech reviews, finance)",
      "Bundle in Notion/Docs with structure and CTA templates",
      "Sell through Gumroad or Shopify"
    ],
    examplePrompts: [
      "Generate 5 YouTube video scripts for a personal finance channel with hook-body-CTA structure.",
      "Give me 20 viral YouTube hooks for tech reviews."
    ]
  },
  {
    id: "27",
    slug: "local-business-ai-packages",
    title: "Local Business AI Packages",
    summary: "Offer pre-built AI solutions for local businesses: chatbot FAQ, review response automation, blog post generation.",
    category: "Services",
    skillsNeeded: ["ai-usage"],
    assetsHelpful: ["chatgpt", "notion"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["local-business", "chatbot", "automation"],
    exampleTasks: [
      "Identify service businesses lacking content/automation",
      "Create simple chatbot templates and content workflows",
      "Pitch pre-packaged services with monthly retainer"
    ],
    examplePrompts: [
      "Draft a restaurant FAQ chatbot script for common customer questions.",
      "Generate 10 blog titles for a local plumbing business to rank in Google."
    ]
  },
  {
    id: "28",
    slug: "elearning-course-co-creation",
    title: "E-Learning Course Co-Creation",
    summary: "Partner with experts to build online courses using AI for research, structure, and production — then split profits.",
    category: "Services",
    skillsNeeded: ["teaching", "editing", "research"],
    assetsHelpful: ["chatgpt"],
    difficulty: 4,
    timeToCash: 4,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["online-courses", "elearning", "knowledge-commerce"],
    exampleTasks: [
      "Outline course structure using GPT",
      "Generate lesson drafts and supporting materials",
      "Partner with domain experts to record modules"
    ],
    examplePrompts: [
      "Create a 6-module course outline for 'AI for Realtors' with key takeaways and exercises.",
      "Generate lesson scripts and quizzes for a productivity course."
    ]
  },
  {
    id: "29",
    slug: "data-enrichment-service",
    title: "Data Enrichment as a Service",
    summary: "Use AI to clean, deduplicate, and enrich datasets for businesses — high demand in sales, marketing, and recruiting.",
    category: "Services",
    skillsNeeded: ["data analysis"],
    assetsHelpful: ["chatgpt", "notion"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["data-enrichment", "sales", "b2b"],
    exampleTasks: [
      "Take messy spreadsheets and enrich company info using GPT or APIs",
      "Build repeatable cleaning workflows",
      "Sell per-record or per-project services"
    ],
    examplePrompts: [
      "Standardize these company names and enrich with industry + HQ location.",
      "Remove duplicates and infer missing job titles from LinkedIn bios."
    ]
  },
  {
    id: "30",
    slug: "ai-landing-page-builder",
    title: "AI Landing Page Builder",
    summary: "Create a micro SaaS tool that generates optimized landing pages using GPT for copy and templates for design.",
    category: "SaaS",
    skillsNeeded: ["coding", "copywriting"],
    assetsHelpful: [],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 3,
    typicalARPU: 4,
    demandTags: ["landing-pages", "copywriting", "web-tools"],
    exampleTasks: [
      "Design a simple form-based UI for users to describe their offer",
      "Use GPT to generate hero copy, features, and CTAs",
      "Deploy with Stripe subscriptions for pro users"
    ],
    examplePrompts: [
      "Generate high-converting hero copy for a SaaS landing page targeting fitness coaches.",
      "List 10 landing page layouts that work for lead generation."
    ]
  },
  {
    id: "31",
    slug: "script-to-shorts-repurposing",
    title: "Script-to-Shorts Repurposing Studio",
    summary: "Offer a service that turns long-form YouTube scripts or podcast transcripts into short-form TikToks and Reels using AI.",
    category: "Services",
    skillsNeeded: ["video editing", "storytelling", "ai-usage"],
    assetsHelpful: ["chatgpt"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["content-repurposing", "shorts", "tiktok"],
    exampleTasks: [
      "Take a 10-minute script and slice it into 3–5 viral short scripts",
      "Generate captions, hashtags, and thumbnails",
      "Offer subscription packages for creators"
    ],
    examplePrompts: [
      "Turn this YouTube transcript into 5 TikTok scripts with engaging hooks.",
      "Generate caption + hashtag combos for short-form clips."
    ]
  },
  {
    id: "32",
    slug: "industry-trend-reports",
    title: "Industry Trend Reports with AI",
    summary: "Create and sell monthly niche market reports using GPT for synthesis and data visualization tools for charts.",
    category: "Digital Products",
    skillsNeeded: ["research", "writing", "data analysis"],
    assetsHelpful: ["chatgpt", "canva", "gumroad"],
    difficulty: 4,
    timeToCash: 4,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["trend-reports", "market-research", "b2b"],
    exampleTasks: [
      "Aggregate niche data from APIs and web sources",
      "Use GPT to summarize insights and highlight opportunities",
      "Package reports as PDFs and sell via Gumroad or subscription"
    ],
    examplePrompts: [
      "Summarize the top 10 growth trends in the creator economy this quarter.",
      "Generate a structured market report outline for the Web3 gaming niche."
    ]
  },
  {
    id: "33",
    slug: "automated-webinar-generator",
    title: "Automated Webinar Generator",
    summary: "Use AI to generate, script, and design evergreen webinars for course creators and coaches.",
    category: "Services",
    skillsNeeded: ["copywriting", "presentation-design", "ai-tools"],
    assetsHelpful: ["chatgpt", "canva", "loom"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["webinars", "courses", "funnels"],
    exampleTasks: [
      "Interview the client and outline webinar structure",
      "Use AI to write the entire script and slides",
      "Deliver ready-to-record or done-for-you webinar decks"
    ],
    examplePrompts: [
      "Generate a 45-minute webinar script for a productivity course, with clear sections and CTAs.",
      "Create a slide outline for a webinar funnel targeting busy professionals."
    ]
  },
  {
    id: "34",
    slug: "ai-tiktok-caption-hook-generator",
    title: "AI TikTok Caption + Hook Generator",
    summary: "Build a web app that generates viral TikTok hooks and captions for creators, using GPT and trend data.",
    category: "SaaS",
    skillsNeeded: ["frontend", "api-integration", "copywriting"],
    assetsHelpful: ["openai-api", "vercel"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["tiktok", "hooks", "social-media-tools"],
    exampleTasks: [
      "Design a simple interface where creators input their niche",
      "Generate 10 hook + caption combos instantly",
      "Offer freemium tier with upgrade for bulk generation"
    ],
    examplePrompts: [
      "Generate 10 TikTok hooks and captions for a beauty niche tutorial.",
      "Write punchy, curiosity-driven captions for a tech tips account."
    ]
  },
  {
    id: "35",
    slug: "chatbot-personality-designer",
    title: "Chatbot Personality Designer",
    summary: "Offer businesses or creators the service of designing unique chatbot personalities with tone, style, and workflows.",
    category: "Services",
    skillsNeeded: ["prompt-engineering", "ux-writing", "persona-design"],
    assetsHelpful: ["chatgpt", "notion", "zapier"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["chatbots", "branding", "customer-service"],
    exampleTasks: [
      "Interview client to define personality and use cases",
      "Design system prompts and workflows",
      "Deploy via ChatGPT, WhatsApp bots, or web widgets"
    ],
    examplePrompts: [
      "Create a brand voice and chatbot system prompt for a luxury skincare brand.",
      "Design a friendly, helpful persona for a SaaS onboarding bot."
    ]
  },
  {
    id: "36",
    slug: "ai-sales-page-copywriter",
    title: "AI Sales Page Copywriter",
    summary: "Use AI to write high-converting sales pages and VSL scripts for digital product owners and coaches.",
    category: "Services",
    skillsNeeded: ["copywriting", "funnels", "ai-tools"],
    assetsHelpful: ["chatgpt", "notion"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["sales-copy", "funnels", "digital-products"],
    exampleTasks: [
      "Collect client offer details via questionnaire",
      "Use AI to generate headline, body, social proof, and CTAs",
      "Edit and deliver in polished format"
    ],
    examplePrompts: [
      "Write a high-converting sales page for a 6-week fitness challenge.",
      "Generate 5 variations of hero headlines for an online course landing page."
    ]
  },
  {
    id: "37",
    slug: "ai-powered-job-board",
    title: "AI-Powered Job Board",
    summary: "Create a niche job board where AI curates and summarizes the best job listings daily.",
    category: "SaaS",
    skillsNeeded: ["scraping", "api", "frontend"],
    assetsHelpful: ["openai-api", "vercel", "supabase"],
    difficulty: 4,
    timeToCash: 4,
    startupCost: 3,
    typicalARPU: 4,
    demandTags: ["job-board", "niche", "ai-curation"],
    exampleTasks: [
      "Scrape jobs from multiple sources",
      "Summarize job listings with GPT for readability",
      "Monetize through featured listings or subscriptions"
    ],
    examplePrompts: [
      "Summarize this job listing into 3 key bullet points: role, skills, salary.",
      "Generate SEO meta descriptions for job board pages."
    ]
  },
  {
    id: "38",
    slug: "brand-naming-messaging-studio",
    title: "Brand Naming & Messaging Studio",
    summary: "Offer AI-assisted brand naming, tagline creation, and messaging kits for startups and creators.",
    category: "Services",
    skillsNeeded: ["brand-strategy", "copywriting", "prompt-engineering"],
    assetsHelpful: ["chatgpt", "notion", "figma"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["branding", "copywriting", "startups"],
    exampleTasks: [
      "Interview client to define positioning",
      "Use GPT to generate name/tagline sets and storylines",
      "Package deliverables as a brand kit"
    ],
    examplePrompts: [
      "Generate 10 brand names for a health tech startup that sound premium.",
      "Write 5 tagline options for an eco-friendly clothing brand."
    ]
  },
  {
    id: "39",
    slug: "newsletter-to-twitter-ghostwriter",
    title: "Newsletter-to-Twitter Ghostwriter",
    summary: "Turn long-form newsletters into viral Twitter/X threads for creators and charge per thread or subscription.",
    category: "Services",
    skillsNeeded: ["writing", "editing", "social-media"],
    assetsHelpful: ["chatgpt", "twitter"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["ghostwriting", "twitter", "repurposing"],
    exampleTasks: [
      "Take a weekly Substack issue and distill it into punchy threads",
      "Format for maximum virality with hooks and spacing",
      "Offer ghostwriting retainers to creators"
    ],
    examplePrompts: [
      "Condense this 1000-word newsletter into a 10-tweet viral thread.",
      "Generate 3 alternative hooks for the opening tweet."
    ]
  },
  {
    id: "40",
    slug: "automated-niche-directory",
    title: "Automated Niche Directory",
    summary: "Use AI to generate and maintain curated directories (tools, influencers, products) in specific niches.",
    category: "SaaS",
    skillsNeeded: ["scraping", "api-integration", "frontend"],
    assetsHelpful: ["openai-api", "vercel", "supabase"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 3,
    typicalARPU: 4,
    demandTags: ["directories", "niche", "content-curation"],
    exampleTasks: [
      "Scrape niche resources and clean data",
      "Use GPT to categorize and summarize each entry",
      "Offer searchable directory with affiliate links or subscriptions"
    ],
    examplePrompts: [
      "Summarize this AI tool into a 50-word directory listing with key features.",
      "Categorize this list of 200 URLs into 10 niche categories."
    ]
  },
  {
    id: "41",
    slug: "ai-enhanced-voiceover-service",
    title: "AI-Enhanced Voiceover Service",
    summary: "Offer voiceover services using AI-generated voices, ideal for content creators, audiobook authors, and ad agencies.",
    category: "Services",
    skillsNeeded: ["audio-editing", "voiceover", "ai-tools"],
    assetsHelpful: ["play.ht", "elevenlabs", "descript"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["voiceover", "content-creation", "ads"],
    exampleTasks: [
      "Receive scripts and generate professional AI voiceovers",
      "Mix and deliver in multiple formats",
      "Sell packages per word, minute, or project"
    ],
    examplePrompts: [
      "Convert this 1-minute script into a warm, friendly female voice.",
      "List 5 brand tones for voiceover: authoritative, playful, casual, etc."
    ]
  },
  {
    id: "42",
    slug: "ai-powered-product-launch-kits",
    title: "AI-Powered Product Launch Kits",
    summary: "Sell launch kits that include copy, visuals, hashtags, and press release drafts generated by AI for indie founders.",
    category: "Digital Products",
    skillsNeeded: ["marketing", "copywriting", "design"],
    assetsHelpful: ["chatgpt", "canva", "gumroad"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["product-launch", "marketing", "indie-hackers"],
    exampleTasks: [
      "Create reusable launch kit templates",
      "Use GPT to personalize for different industries",
      "Sell as one-off downloads or subscription packs"
    ],
    examplePrompts: [
      "Generate a product launch tweet thread, press release, and email for a new Chrome extension.",
      "Write 10 hashtags and captions for a mobile app launch."
    ]
  },
  {
    id: "43",
    slug: "ai-influencer-outreach-assistant",
    title: "AI Influencer Outreach Assistant",
    summary: "Offer brands or creators automated influencer outreach using GPT for personalized DMs and email pitches.",
    category: "Services",
    skillsNeeded: ["outreach", "copywriting", "ai-tools"],
    assetsHelpful: ["chatgpt", "snov.io", "notion"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["influencer-marketing", "outreach", "brands"],
    exampleTasks: [
      "Find influencers in specific niches",
      "Use GPT to personalize outreach messages",
      "Track responses in Notion or CRM"
    ],
    examplePrompts: [
      "Write a personalized outreach email to a mid-tier fitness influencer for a brand collab.",
      "Generate 10 DM templates for reaching out to creators about affiliate programs."
    ]
  },
  {
    id: "44",
    slug: "ai-powered-legal-template-generator",
    title: "AI-Powered Legal Template Generator",
    summary: "Build a tool or service that generates basic contracts, NDAs, and agreements tailored to user input.",
    category: "SaaS",
    skillsNeeded: ["prompt-engineering", "legal-knowledge", "frontend"],
    assetsHelpful: ["openai-api", "vercel"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 3,
    typicalARPU: 4,
    demandTags: ["legal", "contracts", "b2b"],
    exampleTasks: [
      "Collect user info via forms",
      "Use GPT to generate draft legal documents",
      "Add disclaimers and upsell legal review services"
    ],
    examplePrompts: [
      "Draft a mutual NDA for a startup and contractor relationship.",
      "Generate a freelance service agreement with milestone payment clauses."
    ]
  },
  {
    id: "45",
    slug: "course-outline-generator",
    title: "Course Outline Generator",
    summary: "Sell a SaaS or service that generates detailed course outlines and lesson plans for creators and coaches.",
    category: "SaaS",
    skillsNeeded: ["instructional-design", "frontend", "copywriting"],
    assetsHelpful: ["openai-api", "vercel"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["courses", "education", "content-creators"],
    exampleTasks: [
      "Build a simple UI to collect topic/goals",
      "Use GPT to generate outlines, module titles, and lesson ideas",
      "Offer freemium with upsell for full export"
    ],
    examplePrompts: [
      "Generate a 6-module course outline on 'AI for copywriters' with exercises.",
      "List 10 lesson titles for a beginner crypto course."
    ]
  },
  {
    id: "46",
    slug: "youtube-seo-optimization-service",
    title: "YouTube SEO Optimization Service",
    summary: "Offer creators AI-powered title, description, and tag optimization for YouTube videos.",
    category: "Services",
    skillsNeeded: ["seo", "copywriting", "youtube"],
    assetsHelpful: ["chatgpt", "tubebuddy"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["youtube", "seo", "video-optimization"],
    exampleTasks: [
      "Take raw titles/descriptions and rewrite them for click-through rate",
      "Suggest tags and keywords",
      "Offer as per-video service or monthly retainer"
    ],
    examplePrompts: [
      "Rewrite this YouTube title for higher CTR: '5 AI Tools for Productivity'.",
      "Generate tags and SEO description for a finance niche video."
    ]
  },
  {
    id: "47",
    slug: "ai-powered-recruiting-assistant",
    title: "AI-Powered Recruiting Assistant",
    summary: "Provide AI-summarized candidate profiles and outreach messages for recruiters.",
    category: "Services",
    skillsNeeded: ["recruiting", "copywriting", "data-cleaning"],
    assetsHelpful: ["chatgpt", "linkedin"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["recruiting", "b2b", "automation"],
    exampleTasks: [
      "Summarize LinkedIn profiles into quick recruiter briefs",
      "Generate personalized outreach messages",
      "Automate shortlisting with GPT"
    ],
    examplePrompts: [
      "Summarize this LinkedIn profile into a recruiter brief with key skills.",
      "Generate a personalized outreach email to a senior data scientist candidate."
    ]
  },
  {
    id: "48",
    slug: "ai-script-coverage-editing-service",
    title: "AI Script Coverage & Editing Service",
    summary: "Offer AI-assisted screenplay analysis, coverage, and editing suggestions for writers and filmmakers.",
    category: "Services",
    skillsNeeded: ["scriptwriting", "editing", "prompt-engineering"],
    assetsHelpful: ["chatgpt", "final-draft"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["film", "writing", "screenplays"],
    exampleTasks: [
      "Upload and analyze screenplays",
      "Use GPT to provide structured coverage",
      "Offer line editing and story suggestions"
    ],
    examplePrompts: [
      "Analyze this screenplay and give notes on pacing, character arcs, and dialogue.",
      "Summarize the logline, strengths, and weaknesses of this script."
    ]
  },
  {
    id: "49",
    slug: "automated-social-carousel-designer",
    title: "Automated Social Carousel Designer",
    summary: "Build a tool that generates social media carousel posts from bullet points or text.",
    category: "SaaS",
    skillsNeeded: ["frontend", "design", "api-integration"],
    assetsHelpful: ["openai-api", "canva-api", "vercel"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 3,
    typicalARPU: 4,
    demandTags: ["social-media", "carousels", "design-automation"],
    exampleTasks: [
      "Build UI where users input text/bullet points",
      "Generate carousel layouts using GPT + design templates",
      "Export as PNG/PDF for Instagram/LinkedIn"
    ],
    examplePrompts: [
      "Turn these 10 tips into a carousel post layout.",
      "Generate a LinkedIn carousel on 'Growth Marketing Strategies'."
    ]
  },
  {
    id: "50",
    slug: "tiktok-niche-research-reports",
    title: "TikTok Niche Research Reports",
    summary: "Sell detailed research reports on trending TikTok niches, competitor analysis, and content ideas.",
    category: "Digital Products",
    skillsNeeded: ["research", "tiktok", "writing"],
    assetsHelpful: ["chatgpt", "gumroad"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["tiktok", "research", "content-strategy"],
    exampleTasks: [
      "Analyze trending niches and hashtags",
      "Compile competitor analysis and viral patterns",
      "Package as PDF reports for creators"
    ],
    examplePrompts: [
      "Research the top 10 TikTok niches with the highest engagement in Q1 2025.",
      "Analyze 3 top creators in the finance niche and summarize their strategies."
    ]
  },
  {
    id: "51",
    slug: "email-sequence-generator",
    title: "Email Sequence Generator",
    summary: "Build a SaaS tool that generates complete email sequences for onboarding, nurturing, or sales.",
    category: "SaaS",
    skillsNeeded: ["copywriting", "email-marketing", "frontend"],
    assetsHelpful: ["openai-api", "vercel"],
    difficulty: 3,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["email-marketing", "automation", "saas"],
    exampleTasks: [
      "Create form to collect campaign goals and audience details",
      "Use GPT to generate 5-10 email sequence drafts",
      "Offer export to CSV or ESP integrations"
    ],
    examplePrompts: [
      "Generate a 7-email welcome sequence for a SaaS product targeting freelancers.",
      "Write a 5-email sales sequence for an online course launch."
    ]
  },
  {
    id: "52",
    slug: "podcast-show-notes-generator",
    title: "Podcast Show Notes Generator",
    summary: "Offer AI-generated show notes, timestamps, and key takeaways for podcasters.",
    category: "Services",
    skillsNeeded: ["transcription", "writing", "ai-tools"],
    assetsHelpful: ["descript", "chatgpt"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["podcast", "transcription", "content"],
    exampleTasks: [
      "Transcribe podcast episodes using AI",
      "Generate formatted show notes with timestamps",
      "Deliver as blog posts or formatted documents"
    ],
    examplePrompts: [
      "Generate show notes with timestamps for this 45-minute podcast transcript.",
      "Summarize the top 5 takeaways from this episode."
    ]
  },
  {
    id: "53",
    slug: "ai-spreadsheet-formula-helper",
    title: "AI Spreadsheet Formula Helper",
    summary: "Build a tool that generates Excel/Google Sheets formulas from natural language descriptions.",
    category: "SaaS",
    skillsNeeded: ["spreadsheets", "frontend", "api-integration"],
    assetsHelpful: ["openai-api", "vercel"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["spreadsheets", "productivity", "tools"],
    exampleTasks: [
      "Build simple UI for users to describe formula needs",
      "Use GPT to generate working formulas",
      "Offer freemium with advanced features for paid users"
    ],
    examplePrompts: [
      "Generate a formula to calculate compound interest over 5 years.",
      "Create a VLOOKUP formula that matches employee IDs to departments."
    ]
  },
  {
    id: "54",
    slug: "instagram-caption-pack-seller",
    title: "Instagram Caption Pack Seller",
    summary: "Sell themed packs of Instagram captions and hashtag sets for different niches.",
    category: "Digital Products",
    skillsNeeded: ["copywriting", "social-media", "instagram"],
    assetsHelpful: ["chatgpt", "gumroad"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["instagram", "captions", "content-packs"],
    exampleTasks: [
      "Generate niche-specific caption packs (e.g., fitness, travel, beauty)",
      "Include hashtag sets for each caption",
      "Package as downloadable docs or Notion templates"
    ],
    examplePrompts: [
      "Generate 50 Instagram captions for fitness influencers with motivational themes.",
      "Create 30 travel captions with wanderlust vibes and hashtag sets."
    ]
  },
  {
    id: "55",
    slug: "automated-resume-tailoring-tool",
    title: "Automated Resume Tailoring Tool",
    summary: "Build a SaaS that automatically tailors resumes to specific job descriptions using AI.",
    category: "SaaS",
    skillsNeeded: ["ai-tools", "frontend", "career-coaching"],
    assetsHelpful: ["openai-api", "vercel"],
    difficulty: 3,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["resume", "job-search", "career"],
    exampleTasks: [
      "Upload resume and job description",
      "Use AI to rewrite resume sections to match keywords",
      "Export tailored resume in multiple formats"
    ],
    examplePrompts: [
      "Tailor this resume for a senior product manager role with these job requirements.",
      "Optimize this resume's skills section for an ATS system."
    ]
  },
  {
    id: "56",
    slug: "midjourney-prompt-marketplace",
    title: "Midjourney Prompt Marketplace",
    summary: "Create a marketplace where users can buy and sell high-quality Midjourney prompts.",
    category: "Commerce",
    skillsNeeded: ["prompt-engineering", "curation", "ecommerce"],
    assetsHelpful: ["midjourney", "shopify"],
    difficulty: 3,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["midjourney", "prompts", "marketplace"],
    exampleTasks: [
      "Curate high-quality prompts from creators",
      "Build marketplace with preview images",
      "Take commission on sales or charge listing fees"
    ],
    examplePrompts: [
      "Create a detailed Midjourney prompt for 'cyberpunk cityscapes at sunset'.",
      "Generate 10 prompts for fantasy character portraits."
    ]
  },
  {
    id: "57",
    slug: "tiktok-ad-script-service",
    title: "TikTok Ad Script Service",
    summary: "Write high-converting TikTok ad scripts for DTC brands using AI-assisted copywriting.",
    category: "Services",
    skillsNeeded: ["copywriting", "advertising", "tiktok"],
    assetsHelpful: ["chatgpt"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["tiktok-ads", "ecommerce", "advertising"],
    exampleTasks: [
      "Research brand and product positioning",
      "Use AI to generate multiple script variations",
      "Deliver formatted scripts with scene suggestions"
    ],
    examplePrompts: [
      "Write 5 TikTok ad scripts for a skincare brand targeting Gen Z women.",
      "Generate a problem-agitate-solve ad script for a productivity app."
    ]
  },
  {
    id: "58",
    slug: "ai-productized-consulting",
    title: "AI Productized Consulting",
    summary: "Offer standardized consulting packages powered by AI analysis and insights for specific industries.",
    category: "Services",
    skillsNeeded: ["consulting", "industry-expertise", "ai-tools"],
    assetsHelpful: ["chatgpt", "notion"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["consulting", "b2b", "ai-analysis"],
    exampleTasks: [
      "Create standardized deliverables (audits, reports, strategies)",
      "Use AI to accelerate research and analysis",
      "Package as fixed-price offerings for specific niches"
    ],
    examplePrompts: [
      "Conduct a content marketing audit and provide 10 actionable recommendations.",
      "Analyze this company's LinkedIn presence and suggest improvements."
    ]
  },
  {
    id: "59",
    slug: "ai-flashcard-generator-education",
    title: "AI Flashcard Generator for Education",
    summary: "Build a tool that converts study materials, notes, or textbooks into flashcard sets automatically.",
    category: "SaaS",
    skillsNeeded: ["education", "frontend", "api-integration"],
    assetsHelpful: ["openai-api", "vercel"],
    difficulty: 3,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 4,
    demandTags: ["education", "study-tools", "flashcards"],
    exampleTasks: [
      "Upload text or paste study notes",
      "Use AI to extract key concepts and generate Q&A flashcards",
      "Export to Anki, Quizlet, or PDF"
    ],
    examplePrompts: [
      "Generate 30 flashcards from this biology textbook chapter.",
      "Create Q&A flashcards for this history lecture transcript."
    ]
  },
  {
    id: "60",
    slug: "ai-social-media-audit-service",
    title: "AI Social Media Audit Service",
    summary: "Offer comprehensive social media audits using AI to analyze content performance and provide actionable insights.",
    category: "Services",
    skillsNeeded: ["social-media", "analytics", "ai-tools"],
    assetsHelpful: ["chatgpt", "notion"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["social-media", "audits", "analytics"],
    exampleTasks: [
      "Analyze client's social media profiles and content",
      "Use AI to identify patterns and opportunities",
      "Deliver detailed report with recommendations"
    ],
    examplePrompts: [
      "Audit this Instagram profile and suggest 10 content improvements.",
      "Analyze engagement patterns across the last 50 posts."
    ]
  },
  {
    id: "61",
    slug: "ai-pitch-deck-generator",
    title: "AI Pitch Deck Generator",
    summary: "Create a tool or service that generates investor pitch decks from startup information.",
    category: "SaaS",
    skillsNeeded: ["business", "design", "copywriting"],
    assetsHelpful: ["openai-api", "canva"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 3,
    typicalARPU: 4,
    demandTags: ["startups", "pitch-decks", "fundraising"],
    exampleTasks: [
      "Collect startup info via structured forms",
      "Generate pitch deck content and structure with AI",
      "Provide editable templates in PowerPoint/Figma"
    ],
    examplePrompts: [
      "Generate a 10-slide pitch deck outline for a B2B SaaS startup.",
      "Write the problem-solution slides for a fintech pitch deck."
    ]
  },
  {
    id: "62",
    slug: "ai-content-repurposing-agency",
    title: "AI Content Repurposing Agency",
    summary: "Offer done-for-you content repurposing: turn blogs into tweets, videos into carousels, podcasts into articles.",
    category: "Services",
    skillsNeeded: ["content-strategy", "editing", "design"],
    assetsHelpful: ["chatgpt", "canva", "descript"],
    difficulty: 3,
    timeToCash: 2,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["content-repurposing", "agency", "social-media"],
    exampleTasks: [
      "Take client's existing content and repurpose it",
      "Use AI for transcription, summarization, and reformatting",
      "Deliver ready-to-publish content across platforms"
    ],
    examplePrompts: [
      "Turn this blog post into 10 tweet threads.",
      "Convert this podcast episode into a LinkedIn carousel."
    ]
  },
  {
    id: "63",
    slug: "ai-competitor-monitoring-tool",
    title: "AI Competitor Monitoring Tool",
    summary: "Build a SaaS that tracks competitor content, pricing, and strategies using AI analysis.",
    category: "SaaS",
    skillsNeeded: ["scraping", "ai-analysis", "frontend"],
    assetsHelpful: ["openai-api", "vercel"],
    difficulty: 4,
    timeToCash: 4,
    startupCost: 3,
    typicalARPU: 4,
    demandTags: ["competitive-analysis", "monitoring", "b2b"],
    exampleTasks: [
      "Scrape competitor websites and social media",
      "Use AI to summarize changes and insights",
      "Send weekly digests to subscribers"
    ],
    examplePrompts: [
      "Summarize the key changes in this competitor's pricing page.",
      "Analyze these 10 competitor blog posts for content gaps."
    ]
  },
  {
    id: "64",
    slug: "ai-video-script-to-blog-converter",
    title: "AI Video Script to Blog Converter",
    summary: "Convert video transcripts or scripts into SEO-optimized blog posts automatically.",
    category: "Services",
    skillsNeeded: ["seo", "writing", "video"],
    assetsHelpful: ["chatgpt", "descript"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["content-conversion", "seo", "video"],
    exampleTasks: [
      "Transcribe video content",
      "Use AI to reformat into blog structure with SEO",
      "Deliver formatted blog posts ready to publish"
    ],
    examplePrompts: [
      "Convert this YouTube video transcript into a 1500-word SEO blog post.",
      "Turn this webinar script into a comprehensive how-to article."
    ]
  },
  {
    id: "65",
    slug: "ai-meeting-notes-action-items",
    title: "AI Meeting Notes & Action Items",
    summary: "Offer a service that transcribes meetings and generates summaries with action items.",
    category: "Services",
    skillsNeeded: ["transcription", "business-analysis", "ai-tools"],
    assetsHelpful: ["otter.ai", "chatgpt"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["meetings", "productivity", "b2b"],
    exampleTasks: [
      "Record or receive meeting recordings",
      "Transcribe and use AI to extract action items",
      "Deliver formatted notes and task lists"
    ],
    examplePrompts: [
      "Summarize this 1-hour meeting transcript and list all action items.",
      "Extract key decisions and next steps from this board meeting."
    ]
  },
  {
    id: "66",
    slug: "ai-wedding-speech-writer",
    title: "AI Wedding Speech Writer",
    summary: "Help people write personalized wedding speeches using AI-guided prompts and templates.",
    category: "Services",
    skillsNeeded: ["writing", "storytelling", "ai-tools"],
    assetsHelpful: ["chatgpt"],
    difficulty: 2,
    timeToCash: 1,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["weddings", "speeches", "personal"],
    exampleTasks: [
      "Interview client about relationship and key memories",
      "Use AI to draft speech structure and content",
      "Edit and deliver polished speech"
    ],
    examplePrompts: [
      "Write a 5-minute best man speech with humor and heartfelt moments.",
      "Generate a maid of honor speech about a 20-year friendship."
    ]
  },
  {
    id: "67",
    slug: "ai-product-description-writer",
    title: "AI Product Description Writer",
    summary: "Offer bulk product description writing for e-commerce stores using AI.",
    category: "Services",
    skillsNeeded: ["copywriting", "ecommerce", "seo"],
    assetsHelpful: ["chatgpt"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["ecommerce", "copywriting", "product-descriptions"],
    exampleTasks: [
      "Receive product details and images",
      "Use AI to generate SEO-optimized descriptions",
      "Deliver in bulk via CSV or direct upload"
    ],
    examplePrompts: [
      "Write a compelling product description for an eco-friendly water bottle.",
      "Generate 100 product descriptions for a fashion e-commerce store."
    ]
  },
  {
    id: "68",
    slug: "ai-custom-chatgpt-builder-service",
    title: "AI Custom ChatGPT Builder Service",
    summary: "Build custom GPT assistants for businesses with specific knowledge bases and workflows.",
    category: "Services",
    skillsNeeded: ["ai-tools", "prompt-engineering", "business-analysis"],
    assetsHelpful: ["chatgpt", "openai-api"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["custom-gpt", "ai-assistants", "b2b"],
    exampleTasks: [
      "Understand client's business needs and workflows",
      "Build custom GPT with knowledge base and instructions",
      "Deliver and train team on usage"
    ],
    examplePrompts: [
      "Create a custom GPT for a law firm's contract review process.",
      "Build an AI assistant for customer support with company FAQs."
    ]
  },
  {
    id: "69",
    slug: "ai-book-summary-service",
    title: "AI Book Summary Service",
    summary: "Create concise, high-quality book summaries and sell them as digital products or subscriptions.",
    category: "Digital Products",
    skillsNeeded: ["reading", "writing", "synthesis"],
    assetsHelpful: ["chatgpt", "gumroad"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["books", "summaries", "education"],
    exampleTasks: [
      "Read or process book content with AI",
      "Generate structured summaries with key takeaways",
      "Package as PDFs or Notion docs"
    ],
    examplePrompts: [
      "Summarize 'Atomic Habits' into a 5-page executive summary.",
      "Extract the top 10 lessons from this business book."
    ]
  },
  {
    id: "70",
    slug: "ai-dating-profile-optimizer",
    title: "AI Dating Profile Optimizer",
    summary: "Help people improve their dating profiles with AI-optimized photos, bios, and conversation starters.",
    category: "Services",
    skillsNeeded: ["copywriting", "psychology", "ai-tools"],
    assetsHelpful: ["chatgpt"],
    difficulty: 2,
    timeToCash: 1,
    startupCost: 1,
    typicalARPU: 3,
    demandTags: ["dating", "profiles", "personal-branding"],
    exampleTasks: [
      "Review client's dating profile",
      "Use AI to rewrite bio and suggest improvements",
      "Provide conversation starter templates"
    ],
    examplePrompts: [
      "Rewrite this dating bio to be more engaging and authentic.",
      "Generate 10 conversation starters for someone interested in hiking and photography."
    ]
  },
  {
    id: "71",
    slug: "ai-grant-proposal-writer",
    title: "AI Grant Proposal Writer",
    summary: "Help nonprofits and researchers write grant proposals using AI for research and drafting.",
    category: "Services",
    skillsNeeded: ["grant-writing", "research", "nonprofit"],
    assetsHelpful: ["chatgpt", "notion"],
    difficulty: 4,
    timeToCash: 3,
    startupCost: 2,
    typicalARPU: 3,
    demandTags: ["grants", "nonprofits", "fundraising"],
    exampleTasks: [
      "Research grant requirements and priorities",
      "Use AI to draft proposal sections",
      "Edit and refine for submission"
    ],
    examplePrompts: [
      "Draft a needs statement for an education nonprofit grant proposal.",
      "Write the project description for a research grant application."
    ]
  },
  {
    id: "72",
    slug: "ai-meditation-script-generator",
    title: "AI Meditation Script Generator",
    summary: "Create and sell meditation scripts or offer custom script writing for wellness apps and coaches.",
    category: "Digital Products",
    skillsNeeded: ["wellness", "writing", "mindfulness"],
    assetsHelpful: ["chatgpt", "gumroad"],
    difficulty: 2,
    timeToCash: 2,
    startupCost: 1,
    typicalARPU: 2,
    demandTags: ["meditation", "wellness", "mindfulness"],
    exampleTasks: [
      "Generate themed meditation scripts (sleep, anxiety, focus)",
      "Package as audio-ready scripts",
      "Sell as bundles or custom service"
    ],
    examplePrompts: [
      "Write a 10-minute guided meditation script for sleep and relaxation.",
      "Generate 5 meditation scripts for stress relief targeting busy professionals."
    ]
  }
];
