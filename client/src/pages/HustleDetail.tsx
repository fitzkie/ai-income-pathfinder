import { useMemo, useState } from "react";
import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import type { Opportunity } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FitScoreBadge } from "@/components/FitScoreBadge";
import { SectionCard } from "@/components/playbook/SectionCard";
import { SectionNav } from "@/components/playbook/SectionNav";
import { ActionPlanTable, MonetizationTable, SummaryTable, ToolkitTable } from "@/components/playbook/PlaybookTable";
import { ScriptBlock } from "@/components/playbook/ScriptBlock";
import { PromptCard } from "@/components/playbook/PromptCard";
import { EntitlementGate } from "@/components/playbook/EntitlementGate";
import { PaywallModal } from "@/components/playbook/PaywallModal";
import { useEntitlement } from "@/hooks/useEntitlement";
import { useSavedPlaybooks } from "@/hooks/useSavedPlaybooks";
import { buildPlaybookForOpportunity } from "@/data/playbooks";

const upgradeUrl = "https://brianscottfitzgerald.com";

const sectionItems = [
  { id: "overview", label: "Overview" },
  { id: "action-plan", label: "Step-by-Step Action Plan" },
  { id: "monetization", label: "Monetization Breakdown" },
  { id: "outreach-templates", label: "Outreach Templates" },
  { id: "prompt-pack", label: "Prompt Pack" },
  { id: "toolkit", label: "Toolkit" },
  { id: "quick-win-checklist", label: "Quick Win Checklist" },
  { id: "bonus-upgrade", label: "Bonus Upgrade" },
  { id: "summary", label: "Summary" },
];

const getPreviewText = (text: string, sentences = 2) => {
  const parts = text.split(". ");
  return parts.slice(0, sentences).join(". ") + (parts.length > sentences ? "." : "");
};

export default function HustleDetail() {
  const [, params] = useRoute("/hustles/:id");
  const [paywallOpen, setPaywallOpen] = useState(false);
  const { setPlan } = useEntitlement();
  const { toggleSaved, isSaved } = useSavedPlaybooks();

  const { data: opportunities, isLoading } = useQuery<Opportunity[]>({
    queryKey: ["/api/opportunities"],
  });

  const opportunity = useMemo(() => {
    if (!opportunities || !params?.id) return null;
    return opportunities.find((opp) => opp.slug === params.id || opp.id === params.id) || null;
  }, [opportunities, params?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-sm text-zinc-400">Loading preview…</p>
      </div>
    );
  }

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-sm text-zinc-400">Hustle not found.</p>
      </div>
    );
  }

  const playbook = buildPlaybookForOpportunity(opportunity);
  const previewChecklist = playbook.quickWinChecklist.slice(0, 3);
  const lockedChecklist = playbook.quickWinChecklist.slice(3);
  const fitScore = Math.min(92, 70 + (5 - opportunity.difficulty) * 6);
  const whyMatched = [
    `Your skills map to ${opportunity.skillsNeeded.slice(0, 2).join(", ") || "the core tasks"}.`,
    `You can start with ${opportunity.assetsHelpful[0] || "the tools you already have"}.`,
    "Low startup effort aligns with fast execution.",
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-16">
      <PaywallModal
        open={paywallOpen}
        onOpenChange={setPaywallOpen}
        upgradeUrl={upgradeUrl}
        onDevUnlock={() => {
          setPlan("pro");
          setPaywallOpen(false);
        }}
      />

      <header className="sticky top-0 z-40 border-b border-zinc-900 bg-black/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Button
            variant="ghost"
            className="text-zinc-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-zinc-700 text-zinc-200"
              onClick={() => toggleSaved(opportunity.slug)}
            >
              {isSaved(opportunity.slug) ? "Saved" : "Save"}
            </Button>
            <Button
              className="bg-[#ebb437] text-black hover:bg-[#d6a931]"
              onClick={() => setPaywallOpen(true)}
            >
              Unlock Full Pro Playbook
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pt-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <Badge variant="secondary" className="bg-zinc-900 text-zinc-200">
                {opportunity.category}
              </Badge>
              {opportunity.demandTags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="border-zinc-700 text-zinc-300">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mt-3 text-3xl font-semibold">{opportunity.title}</h1>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl">{opportunity.summary}</p>
          </div>
          <FitScoreBadge score={fitScore} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <SectionNav items={sectionItems} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="lg:hidden">
              <Select
                onValueChange={(value) => {
                  const target = document.getElementById(value);
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <SelectTrigger className="bg-zinc-900 border-zinc-800 text-zinc-200">
                  <SelectValue placeholder="Jump to section" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200">
                  {sectionItems.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <SectionCard
              id="why-matched"
              title="Why it matched you"
              subtitle="3 reasons this aligns with your inputs"
            >
              <ul className="space-y-2">
                {whyMatched.map((reason) => (
                  <li key={reason} className="text-sm text-zinc-200">
                    • {reason}
                  </li>
                ))}
              </ul>
            </SectionCard>

            {opportunity.scoringFactors.length > 0 ? (
              <SectionCard
                id="boosts"
                title="What boosts this play"
                subtitle="Signals that improve your odds"
              >
                <ul className="space-y-2">
                  {opportunity.scoringFactors.slice(0, 4).map((factor) => (
                    <li key={factor} className="text-sm text-zinc-200">
                      • {factor}
                    </li>
                  ))}
                </ul>
              </SectionCard>
            ) : null}

            <SectionCard id="overview" title="Overview" subtitle="What this is">
              <p className="text-sm text-zinc-200">{getPreviewText(playbook.overview)}</p>
              <div className="mt-4">
                <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                  <p className="text-sm text-zinc-300">{playbook.overview}</p>
                </EntitlementGate>
              </div>
            </SectionCard>

            <SectionCard id="action-plan" title="Step-by-Step Action Plan" subtitle="Preview the flow">
              <ActionPlanTable rows={playbook.actionPlanRows.slice(0, 1)} />
              <div className="mt-4">
                <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                  <ActionPlanTable rows={playbook.actionPlanRows.slice(1, 4)} />
                </EntitlementGate>
              </div>
            </SectionCard>

            <SectionCard id="monetization" title="Monetization Breakdown" subtitle="Preview pricing ideas">
              <MonetizationTable rows={playbook.monetizationRows.slice(0, 1)} />
              <div className="mt-4">
                <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                  <MonetizationTable rows={playbook.monetizationRows.slice(1, 4)} />
                </EntitlementGate>
              </div>
            </SectionCard>

            <SectionCard id="outreach-templates" title="Outreach Templates" subtitle="Scripts are Pro only">
              <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                <ScriptBlock templates={playbook.outreachTemplates} />
              </EntitlementGate>
            </SectionCard>

            <SectionCard id="prompt-pack" title="Prompt Pack" subtitle="Starter prompts preview">
              <div className="grid gap-4 md:grid-cols-2">
                {playbook.promptPack.slice(0, 2).map((prompt) => (
                  <div key={prompt.title} className="pointer-events-none blur-sm opacity-70">
                    <PromptCard {...prompt} />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                  <div className="grid gap-4 md:grid-cols-2">
                    {playbook.promptPack.slice(2, 4).map((prompt) => (
                      <PromptCard key={prompt.title} {...prompt} />
                    ))}
                  </div>
                </EntitlementGate>
              </div>
            </SectionCard>

            <SectionCard id="toolkit" title="Toolkit" subtitle="Preview the stack">
              <ToolkitTable rows={playbook.toolkitRows.slice(0, 1)} />
              <div className="mt-4">
                <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                  <ToolkitTable rows={playbook.toolkitRows.slice(1, 4)} />
                </EntitlementGate>
              </div>
            </SectionCard>

            <SectionCard id="quick-win-checklist" title="Quick Win Checklist" subtitle="First 7 days">
              <ul className="space-y-2 text-sm text-zinc-200">
                {previewChecklist.map((item) => (
                  <li key={item.label}>• {item.label}</li>
                ))}
              </ul>
              <div className="mt-4">
                <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                  <ul className="space-y-2 text-sm text-zinc-200">
                    {lockedChecklist.map((item) => (
                      <li key={item.label}>• {item.label}</li>
                    ))}
                  </ul>
                </EntitlementGate>
              </div>
            </SectionCard>

            <SectionCard id="bonus-upgrade" title="Bonus Upgrade" subtitle="Pro-only insights">
              <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                <p className="text-sm text-zinc-200">{playbook.bonusUpgrade}</p>
              </EntitlementGate>
            </SectionCard>

            <SectionCard id="summary" title="Summary" subtitle="Key metrics snapshot">
              <SummaryTable rows={playbook.summaryRows.slice(0, 2)} />
              <div className="mt-4">
                <EntitlementGate locked onUpgrade={() => setPaywallOpen(true)}>
                  <SummaryTable rows={playbook.summaryRows.slice(2)} />
                </EntitlementGate>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
