import { ScoreBreakdown } from "@shared/schema";

interface ScoreRadarProps {
  breakdown: ScoreBreakdown;
}

const metricConfig: { key: keyof ScoreBreakdown; label: string; colors: string }[] = [
  { key: "skill", label: "Skill Match", colors: "from-sky-500 via-sky-400 to-sky-500" },
  { key: "interest", label: "Interest Alignment", colors: "from-emerald-500 via-emerald-400 to-emerald-500" },
  { key: "assets", label: "Asset Advantage", colors: "from-amber-500 via-amber-400 to-amber-500" },
  { key: "constraints", label: "Constraints Fit", colors: "from-indigo-500 via-indigo-400 to-indigo-500" },
  { key: "timeToCash", label: "Speed to Cash", colors: "from-rose-500 via-rose-400 to-rose-500" },
  { key: "startupCost", label: "Startup Cost", colors: "from-purple-500 via-purple-400 to-purple-500" },
  { key: "demand", label: "Market Demand", colors: "from-cyan-500 via-cyan-400 to-cyan-500" },
];

export function ScoreRadar({ breakdown }: ScoreRadarProps) {
  return (
    <div className="space-y-4">
      {metricConfig.map(({ key, label, colors }) => {
        const value = Math.round(Math.max(0, Math.min(100, breakdown[key])));

        return (
          <div key={key} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">{label}</span>
              <span className="font-semibold text-muted-foreground">{value}%</span>
            </div>
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${colors}`}
                style={{ width: `${value}%` }}
                aria-label={`${label} score`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
