import { Link } from "wouter";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AI Income Pathfinder</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container relative z-10 max-w-7xl mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Tell me who you are.{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                I'll find you the best AI side-income.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Answer 8 quick questions. Get personalized AI monetization paths with fit scores, demand insights, and 7-day action plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/wizard">
                <Button size="lg" className="group gap-2" data-testid="button-start">
                  Start Your Assessment
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">5 minutes, zero fluff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Personalized Matching</h3>
              <p className="text-sm text-muted-foreground">
                Our scoring algorithm analyzes your skills, interests, assets, and constraints to find perfect-fit opportunities.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-chart-2/10">
                <Target className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold">Real Demand Signals</h3>
              <p className="text-sm text-muted-foreground">
                See trending opportunities backed by market data from Google Trends, job platforms, and social metrics.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-chart-4/10">
                <Sparkles className="h-6 w-6 text-chart-4" />
              </div>
              <h3 className="text-xl font-semibold">Actionable Plans</h3>
              <p className="text-sm text-muted-foreground">
                Get detailed 7-day action plans with tasks, tools, and AI prompts to launch your side income fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center text-sm text-muted-foreground">
          <p>Built to help you make money with AI. No data sale. Your profile, your control.</p>
        </div>
      </footer>
    </div>
  );
}
