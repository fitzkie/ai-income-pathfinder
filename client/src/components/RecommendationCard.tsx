import { useState } from "react";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RecommendationItem } from "@shared/schema";
import { FitScoreBadge } from "./FitScoreBadge";
import { ScoreRadar } from "./ScoreRadar";
import { DemandBadge } from "./DemandBadge";

interface RecommendationCardProps {
  item: RecommendationItem;
  rank: number;
}

export function RecommendationCard({ item, rank }: RecommendationCardProps) {
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const copyPrompt = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(index);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <Card className="overflow-hidden" data-testid={`recommendation-card-${rank}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
              <Badge variant="secondary" className="text-xs">
                {item.opportunity.category}
              </Badge>
            </div>
            <CardTitle className="text-2xl mb-2" data-testid={`recommendation-title-${rank}`}>
              {item.opportunity.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{item.opportunity.summary}</p>
          </div>
          <FitScoreBadge score={item.fitScore} />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Radar Chart */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Score Breakdown</h4>
          <ScoreRadar breakdown={item.scoreBreakdown} />
        </div>

        {/* Demand Snapshot */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-semibold">Demand Snapshot</h4>
            <Badge variant="outline" className="text-xs">Sample Data</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.demandSignals.map((signal, idx) => (
              <DemandBadge key={idx} signal={signal} />
            ))}
          </div>
        </div>

        {/* Why This Matched You */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Why this matched you</h4>
          <ul className="space-y-2">
            {item.rationale.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Plan */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="action-plan">
            <AccordionTrigger className="text-sm font-semibold" data-testid={`action-plan-toggle-${rank}`}>
              7-Day Action Plan
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 mt-2">
                {item.actionPlan.map((day) => (
                  <div key={day.day} className="space-y-2">
                    <h5 className="text-sm font-semibold text-primary">
                      Day {day.day}: {day.title}
                    </h5>
                    <ul className="space-y-1 pl-4">
                      {day.tasks.map((task, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Example Prompts */}
        {item.opportunity.examplePrompts.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-3">Starter Prompts</h4>
            <div className="space-y-3">
              {item.opportunity.examplePrompts.map((prompt, idx) => (
                <div
                  key={idx}
                  className="relative bg-muted/50 rounded-md p-3 font-mono text-xs group"
                  data-testid={`prompt-${rank}-${idx}`}
                >
                  <p className="pr-10 text-foreground/90">{prompt}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyPrompt(prompt, idx)}
                    data-testid={`copy-prompt-${rank}-${idx}`}
                  >
                    {copiedPrompt === idx ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
