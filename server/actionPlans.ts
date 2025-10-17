import { Opportunity } from "@shared/schema";

export function generateActionPlan(opportunity: Opportunity) {
  // Generic 7-day action plan template that adapts to opportunity
  const isService = opportunity.category === "Services";
  const isContent = opportunity.category === "Content";
  const isProduct = opportunity.category === "Digital Products" || opportunity.category === "Commerce";
  const isSaaS = opportunity.category === "SaaS";
  
  return [
    {
      day: 1,
      title: "Setup & Research",
      tasks: [
        "Create necessary accounts (platforms, tools, payment)",
        "Research 10 examples in this niche",
        "Note what works and what gaps exist",
      ],
    },
    {
      day: 2,
      title: "Market Validation",
      tasks: [
        "Identify target audience and their pain points",
        "Analyze pricing from 5 competitors",
        "Define your unique angle or improvement",
      ],
    },
    {
      day: 3,
      title: isService ? "Service Package Design" : isProduct ? "Product MVP" : isSaaS ? "Build MVP" : "Content MVP",
      tasks: isService 
        ? [
          "Define 3 service tiers (basic, standard, premium)",
          "Create simple deliverables list",
          "Draft service description and FAQs"
        ]
        : isProduct
        ? [
          "Design/create first version of product",
          "Get feedback from 3 people in target audience",
          "Iterate based on feedback"
        ]
        : isSaaS
        ? [
          "Build core feature with simple UI",
          "Test with 5 potential users",
          "Fix critical bugs and UX issues"
        ]
        : [
          "Create first piece of content",
          "Optimize for SEO/platform algorithm",
          "Publish and track initial response"
        ],
    },
    {
      day: 4,
      title: "Pricing & Positioning",
      tasks: [
        "Set competitive pricing based on research",
        "Write compelling offer/product description",
        "Prepare social proof or portfolio examples",
      ],
    },
    {
      day: 5,
      title: "Launch & Outreach",
      tasks: isService || isSaaS
        ? [
          "Reach out to 10 potential clients/users",
          "Post offer on 2-3 relevant platforms",
          "Engage in 5 niche communities"
        ]
        : [
          "Launch on primary platform",
          "Share across 3 social channels",
          "Engage with initial audience feedback"
        ],
    },
    {
      day: 6,
      title: "Feedback & Iteration",
      tasks: [
        "Collect feedback from early users/viewers",
        "Identify top 3 improvements needed",
        "Make quick iterations based on insights",
      ],
    },
    {
      day: 7,
      title: "Optimize & Scale",
      tasks: [
        "Publish improved version 2.0",
        "Set up analytics to track performance",
        "Plan next week's content/outreach strategy",
      ],
    },
  ];
}
