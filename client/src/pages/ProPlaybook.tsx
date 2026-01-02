import { useEffect, useMemo, useState } from "react";
import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import type { Opportunity } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useEntitlement } from "@/hooks/useEntitlement";
import { useSavedPlaybooks } from "@/hooks/useSavedPlaybooks";
import { buildPlaybookForOpportunity } from "@/data/playbooks";
import { PlaybookHeader } from "@/components/playbook/PlaybookHeader";
import { SectionCard } from "@/components/playbook/SectionCard";
import { SectionNav } from "@/components/playbook/SectionNav";
import { EntitlementGate } from "@/components/playbook/EntitlementGate";
import { PaywallModal } from "@/components/playbook/PaywallModal";
import { ScriptBlock } from "@/components/playbook/ScriptBlock";
import { PromptCard } from "@/components/playbook/PromptCard";
import { Checklist } from "@/components/playbook/Checklist";
import { ActionPlanTable, MonetizationTable, SummaryTable, ToolkitTable } from "@/components/playbook/PlaybookTable";

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

export default function ProPlaybook() {
  const [, params] = useRoute("/pro/:id");
  const { toast } = useToast();
  const { isPro, setPlan } = useEntitlement();
  const { toggleSaved, isSaved } = useSavedPlaybooks();
  const [paywallOpen, setPaywallOpen] = useState(false);

  const { data: opportunities, isLoading } = useQuery<Opportunity[]>({
    queryKey: ["/api/opportunities"],
  });

  const opportunity = useMemo(() => {
    if (!opportunities || !params?.id) return null;
    return opportunities.find((opp) => opp.slug === params.id || opp.id === params.id) || null;
  }, [opportunities, params?.id]);

  const playbook = opportunity ? buildPlaybookForOpportunity(opportunity) : null;

  const storageKey = playbook ? `playbook-checklist-${playbook.id}` : null;
  const [checklistState, setChecklistState] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!storageKey || typeof window === "undefined") return;
    const raw = window.localStorage.getItem(storageKey);
    if (raw) {
      try {
        setChecklistState(JSON.parse(raw));
      } catch {
        setChecklistState({});
      }
    }
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey || typeof window === "undefined") return;
    window.localStorage.setItem(storageKey, JSON.stringify(checklistState));
  }, [checklistState, storageKey]);

  if (isLoading || !playbook || !opportunity) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-sm text-zinc-400">Loading playbook…</p>
      </div>
    );
  }

  const checklistTotal = playbook.quickWinChecklist.length;
  const checklistCompleted = Object.values(checklistState).filter(Boolean).length;

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

      <PlaybookHeader
        title={opportunity.title}
        tags={opportunity.demandTags}
        isPro={isPro}
        onUpgrade={() => setPaywallOpen(true)}
        onSave={() => toggleSaved(opportunity.slug)}
        onGenerate={() =>
          toast({
            title: "Generating variations",
            description: "Give us 10–20 seconds to spin a fresh version.",
          })
        }
      />

      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Button
          variant="ghost"
          className="text-zinc-200 mb-6"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to results
        </Button>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-zinc-400">
            {isSaved(opportunity.slug) ? "Saved in your library" : "Save this playbook for later."}
          </p>
          <Button
            variant="outline"
            className="border-zinc-700 text-zinc-200"
            onClick={() => toggleSaved(opportunity.slug)}
          >
            {isSaved(opportunity.slug) ? "Saved" : "Save"}
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <SectionNav
                items={sectionItems}
                checklistProgress={{ completed: checklistCompleted, total: checklistTotal }}
              />
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

            <SectionCard id="overview" title="Overview" subtitle="What this is">
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <p className="text-sm text-zinc-200">{playbook.overview}</p>
              </EntitlementGate>
            </SectionCard>

            <SectionCard id="action-plan" title="Step-by-Step Action Plan" subtitle="Execution roadmap">
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <ActionPlanTable rows={playbook.actionPlanRows} />
              </EntitlementGate>
            </SectionCard>

            <SectionCard id="monetization" title="Monetization Breakdown" subtitle="How you get paid">
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <MonetizationTable rows={playbook.monetizationRows} />
              </EntitlementGate>
            </SectionCard>

            <SectionCard id="outreach-templates" title="Outreach Templates" subtitle="Copy-ready scripts">
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <ScriptBlock templates={playbook.outreachTemplates} />
              </EntitlementGate>
            </SectionCard>

            <SectionCard
              id="prompt-pack"
              title="Prompt Pack"
              subtitle="Paste into ChatGPT and ship faster"
              action={
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-200"
                  onClick={() => {
                    const allPrompts = playbook.promptPack.map((p) => `${p.title}: ${p.prompt}`).join("\n\n");
                    navigator.clipboard.writeText(allPrompts);
                    toast({ title: "Copied. Go get paid." });
                  }}
                >
                  Copy all
                </Button>
              }
            >
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <div className="grid gap-4 md:grid-cols-2">
                  {playbook.promptPack.map((prompt) => (
                    <PromptCard key={prompt.title} {...prompt} />
                  ))}
                </div>
              </EntitlementGate>
            </SectionCard>

            <SectionCard id="toolkit" title="Toolkit" subtitle="Assets and tools to move fast">
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <ToolkitTable rows={playbook.toolkitRows} />
              </EntitlementGate>
            </SectionCard>

            <SectionCard
              id="quick-win-checklist"
              title="Quick Win Checklist"
              subtitle="Track your first 7 days"
            >
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <Checklist
                  items={playbook.quickWinChecklist}
                  value={checklistState}
                  onChange={setChecklistState}
                />
              </EntitlementGate>
            </SectionCard>

            <SectionCard id="bonus-upgrade" title="Bonus Upgrade" subtitle="Premium add-on">
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <p className="text-sm text-zinc-200">{playbook.bonusUpgrade}</p>
              </EntitlementGate>
            </SectionCard>

            <SectionCard id="summary" title="Summary" subtitle="Snapshot of key metrics">
              <EntitlementGate locked={!isPro} onUpgrade={() => setPaywallOpen(true)}>
                <SummaryTable rows={playbook.summaryRows} />
              </EntitlementGate>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
