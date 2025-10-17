import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, RefreshCw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { RecommendationCard } from "@/components/RecommendationCard";
import { useProfileStore } from "@/store/profileStore";
import { useQuery } from "@tanstack/react-query";
import type { Recommendation } from "@shared/schema";

export default function Results() {
  const [, setLocation] = useLocation();
  const { profile, setStep } = useProfileStore();

  const { data: recommendation, isLoading, error } = useQuery<Recommendation>({
    queryKey: ["/api/recommendations", profile],
    queryFn: async () => {
      const response = await fetch("/api/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      if (!response.ok) throw new Error("Failed to generate recommendations");
      return response.json();
    },
    enabled: !!profile.skills && profile.skills.length > 0,
  });

  const handleTweakAnswers = () => {
    setStep(0);
    setLocation("/wizard");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
          <p className="text-lg text-muted-foreground">Analyzing your profile...</p>
        </div>
      </div>
    );
  }

  if (error || !recommendation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md">
          <p className="text-lg text-destructive">Failed to generate recommendations</p>
          <Button onClick={handleTweakAnswers}>Go Back to Wizard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <Button variant="ghost" onClick={() => setLocation("/")} data-testid="button-home">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Home
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleTweakAnswers} data-testid="button-tweak">
              <RefreshCw className="h-4 w-4 mr-2" />
              Tweak Answers
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Results Content */}
      <div className="container max-w-4xl mx-auto px-4 pt-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Here are your top {recommendation.items.length} AI money-making paths
          </h1>
          <p className="text-muted-foreground">
            Ranked by fit score. Each includes demand insights and a 7-day action plan.
          </p>
        </div>

        <div className="space-y-8">
          {recommendation.items.map((item, index) => (
            <RecommendationCard key={item.opportunity.id} item={item} rank={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
