import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProgressStepper } from "@/components/ProgressStepper";
import { useProfileStore } from "@/store/profileStore";
import { wizardSteps } from "@shared/schema";
import { SkillsStep } from "./wizard/SkillsStep";
import { InterestsStep } from "./wizard/InterestsStep";
import { AssetsStep } from "./wizard/AssetsStep";
import { NetworkStep } from "./wizard/NetworkStep";
import { ConstraintsStep } from "./wizard/ConstraintsStep";
import { GoalsStep } from "./wizard/GoalsStep";
import { WorkStyleStep } from "./wizard/WorkStyleStep";
import { HunchesStep } from "./wizard/HunchesStep";

export default function Wizard() {
  const [, setLocation] = useLocation();
  const { currentStep, setStep, profile } = useProfileStore();
  const [isSaving, setIsSaving] = useState(false);

  const currentStepData = wizardSteps[currentStep];

  useEffect(() => {
    // Auto-save indication
    const timer = setTimeout(() => {
      setIsSaving(true);
      setTimeout(() => setIsSaving(false), 500);
    }, 1000);
    return () => clearTimeout(timer);
  }, [profile]);

  const handleNext = () => {
    if (currentStep < wizardSteps.length - 1) {
      setStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setLocation("/results");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setLocation("/");
    }
  };

  const renderStep = () => {
    switch (wizardSteps[currentStep].id) {
      case "skills":
        return <SkillsStep />;
      case "interests":
        return <InterestsStep />;
      case "assets":
        return <AssetsStep />;
      case "network":
        return <NetworkStep />;
      case "constraints":
        return <ConstraintsStep />;
      case "goals":
        return <GoalsStep />;
      case "workstyle":
        return <WorkStyleStep />;
      case "hunches":
        return <HunchesStep />;
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (wizardSteps[currentStep].id) {
      case "skills":
        return (profile.skills?.length ?? 0) > 0;
      case "interests":
        return (profile.interests?.length ?? 0) > 0;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <Button variant="ghost" onClick={handleBack} data-testid="button-back">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            {isSaving && (
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Save className="h-3 w-3" />
                Saved
              </span>
            )}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Wizard Content */}
      <div className="container max-w-3xl mx-auto px-4 pt-12">
        <ProgressStepper currentStep={currentStep} />

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">{currentStepData.title}</CardTitle>
            <CardDescription>{currentStepData.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            data-testid="button-previous"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            data-testid="button-next"
          >
            {currentStep === wizardSteps.length - 1 ? "See Results" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
