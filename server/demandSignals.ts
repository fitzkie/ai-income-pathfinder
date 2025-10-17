import { DemandSignal, Opportunity } from "@shared/schema";

// Mock demand signal generator (returns sample data)
export function generateMockDemandSignals(opportunity: Opportunity): DemandSignal[] {
  const signals: DemandSignal[] = [];
  
  // Google Trends - based on category and tags
  const trendValue = Math.floor(Math.random() * 60) - 20; // -20 to +40
  signals.push({
    source: "google_trends",
    metric: "trend_delta",
    value: trendValue,
    label: "Google Search Interest",
    trend: trendValue > 10 ? "up" : trendValue < -10 ? "down" : "stable",
  });
  
  // Product Hunt - for digital products and SaaS
  if (opportunity.category === "Digital Products" || opportunity.category === "SaaS") {
    const phValue = Math.floor(Math.random() * 50) - 10; // -10 to +40
    signals.push({
      source: "product_hunt",
      metric: "posting_volume",
      value: phValue,
      label: "Product Hunt Launches",
      trend: phValue > 15 ? "up" : phValue < -5 ? "down" : "stable",
    });
  }
  
  // Upwork/Fiverr - for services
  if (opportunity.category === "Services") {
    const jobValue = Math.floor(Math.random() * 70) - 10; // -10 to +60
    signals.push({
      source: "upwork",
      metric: "posting_volume",
      value: jobValue,
      label: "Freelance Job Postings",
      trend: jobValue > 20 ? "up" : jobValue < 0 ? "down" : "stable",
    });
  }
  
  // YouTube - for content opportunities
  if (opportunity.category === "Content" || opportunity.demandTags.includes("youtube")) {
    const ytValue = Math.floor(Math.random() * 50) - 15; // -15 to +35
    signals.push({
      source: "youtube",
      metric: "search_interest",
      value: ytValue,
      label: "YouTube Search Volume",
      trend: ytValue > 15 ? "up" : ytValue < -5 ? "down" : "stable",
    });
  }
  
  return signals;
}
