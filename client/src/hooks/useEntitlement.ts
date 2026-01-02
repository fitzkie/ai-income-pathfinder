import { useEffect, useState } from "react";

export type PlanTier = "free" | "pro";

const STORAGE_KEY = "ai-income-pathfinder-plan";

const readStoredPlan = (): PlanTier => {
  if (typeof window === "undefined") return "free";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "pro" ? "pro" : "free";
};

export const useEntitlement = () => {
  const [plan, setPlan] = useState<PlanTier>(() => readStoredPlan());

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, plan);
  }, [plan]);

  return {
    plan,
    isPro: plan === "pro",
    setPlan,
  };
};
