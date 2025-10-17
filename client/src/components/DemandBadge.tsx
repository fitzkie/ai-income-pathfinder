import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DemandSignal } from "@shared/schema";

interface DemandBadgeProps {
  signal: DemandSignal;
}

export function DemandBadge({ signal }: DemandBadgeProps) {
  const TrendIcon = signal.trend === "up" ? TrendingUp : signal.trend === "down" ? TrendingDown : Minus;
  
  return (
    <Badge variant="secondary" className="gap-1.5 px-3 py-1">
      <TrendIcon className={`h-3 w-3 ${
        signal.trend === "up" ? "text-green-500" : 
        signal.trend === "down" ? "text-orange-500" : 
        "text-muted-foreground"
      }`} />
      <span className="text-xs font-medium">{signal.label}</span>
      <span className="text-xs font-semibold">{signal.value > 0 ? '+' : ''}{signal.value}%</span>
    </Badge>
  );
}
