import { Profile, Opportunity, DemandSignal, ScoreBreakdown } from "@shared/schema";

// Scoring weights configuration
export const SCORING_WEIGHTS = {
  skill: 0.35,
  interest: 0.15,
  assets: 0.15,
  constraints: 0.10,
  timeToCash: 0.10,
  startupCost: 0.05,
  demand: 0.10,
};

// Helper: Calculate Jaccard similarity between two arrays
function jaccardSimilarity(arr1: string[], arr2: string[]): number {
  if (arr1.length === 0 || arr2.length === 0) return 0;
  
  const set1 = new Set(arr1.map(s => s.toLowerCase()));
  const set2 = new Set(arr2.map(s => s.toLowerCase()));
  
  const set1Array = Array.from(set1);
  const intersection = new Set(set1Array.filter(x => set2.has(x)));
  const union = new Set([...set1Array, ...Array.from(set2)]);
  
  return intersection.size / union.size;
}

// Calculate skill match score
function calculateSkillScore(profile: Profile, opportunity: Opportunity): number {
  const similarity = jaccardSimilarity(profile.skills || [], opportunity.skillsNeeded);
  return similarity * 100;
}

// Calculate interest match score
function calculateInterestScore(profile: Profile, opportunity: Opportunity): number {
  const categoryMatch = profile.interests?.some(interest => 
    opportunity.category.toLowerCase().includes(interest.toLowerCase()) ||
    interest.toLowerCase().includes(opportunity.category.toLowerCase())
  ) ? 1 : 0;
  
  const tagMatch = jaccardSimilarity(profile.interests || [], opportunity.demandTags);
  
  return ((categoryMatch * 0.4) + (tagMatch * 0.6)) * 100;
}

// Calculate asset advantage score
function calculateAssetScore(profile: Profile, opportunity: Opportunity): number {
  let score = 0;
  const assets = profile.assets!;
  
  // Tool overlap
  const toolMatch = jaccardSimilarity(assets.tools || [], opportunity.assetsHelpful);
  score += toolMatch * 40;
  
  // Audience bonus (if they have meaningful audience)
  if (assets.audience > 1000 && opportunity.assetsHelpful.some(a => 
    ['youtube', 'tiktok', 'instagram', 'linkedin', 'twitter', 'substack', 'medium'].includes(a.toLowerCase())
  )) {
    score += 30;
  }
  
  // Time availability (more time = better fit for time-intensive opps)
  if (assets.timePerWeek >= 20 && opportunity.difficulty >= 3) {
    score += 15;
  } else if (assets.timePerWeek >= 10) {
    score += 10;
  }
  
  // Budget (startup cost alignment)
  if (opportunity.startupCost <= 2 || assets.budget >= 500) {
    score += 15;
  }
  
  return Math.min(score, 100);
}

// Calculate constraint fit score
function calculateConstraintScore(profile: Profile, opportunity: Opportunity): number {
  let score = 100;
  const constraints = profile.constraints!;
  
  // Camera requirement penalty
  if (!constraints.onCamera && opportunity.skillsNeeded.some(s => 
    ['short-form video', 'performance', 'video editing'].includes(s)
  )) {
    score -= 40;
  }
  
  // Risk tolerance mismatch
  if (constraints.risk === 'low' && opportunity.difficulty >= 4) {
    score -= 20;
  } else if (constraints.risk === 'high' && opportunity.difficulty <= 2) {
    score -= 10;
  }
  
  // Timeline mismatch
  if (constraints.timeline === 'fast' && opportunity.timeToCash >= 4) {
    score -= 25;
  } else if (constraints.timeline === 'long' && opportunity.timeToCash <= 2) {
    score -= 10;
  }
  
  return Math.max(score, 0);
}

// Calculate time-to-cash score (inverted - lower is better)
function calculateTimeToCashScore(opportunity: Opportunity): number {
  return ((6 - opportunity.timeToCash) / 5) * 100;
}

// Calculate startup cost score (inverted - lower is better)
function calculateStartupCostScore(opportunity: Opportunity): number {
  return ((6 - opportunity.startupCost) / 5) * 100;
}

// Calculate demand score from signals
function calculateDemandScore(signals: DemandSignal[]): number {
  if (signals.length === 0) return 50; // neutral if no data
  
  const avgValue = signals.reduce((sum, sig) => sum + sig.value, 0) / signals.length;
  // Normalize to 0-100 scale (assuming values are -50 to +50)
  return Math.max(0, Math.min(100, 50 + avgValue));
}

// Main scoring function
export function scoreOpportunity(
  profile: Profile,
  opportunity: Opportunity,
  demandSignals: DemandSignal[]
): { total: number; breakdown: ScoreBreakdown } {
  const breakdown: ScoreBreakdown = {
    skill: calculateSkillScore(profile, opportunity),
    interest: calculateInterestScore(profile, opportunity),
    assets: calculateAssetScore(profile, opportunity),
    constraints: calculateConstraintScore(profile, opportunity),
    timeToCash: calculateTimeToCashScore(opportunity),
    startupCost: calculateStartupCostScore(opportunity),
    demand: calculateDemandScore(demandSignals),
  };
  
  const total = 
    breakdown.skill * SCORING_WEIGHTS.skill +
    breakdown.interest * SCORING_WEIGHTS.interest +
    breakdown.assets * SCORING_WEIGHTS.assets +
    breakdown.constraints * SCORING_WEIGHTS.constraints +
    breakdown.timeToCash * SCORING_WEIGHTS.timeToCash +
    breakdown.startupCost * SCORING_WEIGHTS.startupCost +
    breakdown.demand * SCORING_WEIGHTS.demand;
  
  return { total, breakdown };
}

// Generate rationale bullets for why this opportunity matched
export function generateRationale(
  profile: Profile,
  opportunity: Opportunity,
  breakdown: ScoreBreakdown
): string[] {
  const rationale: string[] = [];
  
  // Skill match
  if (breakdown.skill >= 60) {
    const matchedSkills = (profile.skills || []).filter(s => 
      opportunity.skillsNeeded.some(needed => 
        s.toLowerCase().includes(needed.toLowerCase()) || 
        needed.toLowerCase().includes(s.toLowerCase())
      )
    );
    if (matchedSkills.length > 0) {
      rationale.push(`Your ${matchedSkills.slice(0, 2).join(' and ')} skills are a strong match`);
    }
  }
  
  // Asset advantage
  if (breakdown.assets >= 50) {
    if (profile.assets?.audience && profile.assets.audience > 1000) {
      rationale.push(`Your existing audience of ${profile.assets.audience.toLocaleString()} gives you a head start`);
    } else if (profile.assets?.tools && profile.assets.tools.length > 0) {
      rationale.push(`You already have the tools needed (${profile.assets.tools.slice(0, 2).join(', ')})`);
    }
  }
  
  // Timeline fit
  if (breakdown.timeToCash >= 70 && profile.constraints?.timeline === 'fast') {
    rationale.push(`Fast time-to-cash aligns with your ${profile.constraints.timeline} timeline goal`);
  }
  
  // Low barrier
  if (breakdown.startupCost >= 80) {
    rationale.push(`Minimal startup cost makes this low-risk to try`);
  }
  
  // Demand
  if (breakdown.demand >= 65) {
    rationale.push(`Market demand is trending upward based on recent signals`);
  }
  
  // Work style fit
  if (opportunity.category === 'Services' && profile.workStyle?.collaboration === 'solo') {
    rationale.push(`Service-based model fits your solo work preference`);
  }
  
  return rationale.slice(0, 5); // Max 5 bullets
}
