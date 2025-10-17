import { cn } from "@/lib/utils";

interface FitScoreBadgeProps {
  score: number;
  size?: "sm" | "lg";
}

export function FitScoreBadge({ score, size = "lg" }: FitScoreBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-blue-500 to-primary";
    if (score >= 40) return "from-yellow-500 to-orange-500";
    return "from-orange-500 to-red-500";
  };

  const sizeClasses = size === "lg" ? "w-20 h-20 text-2xl" : "w-12 h-12 text-lg";

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br shadow-lg",
        getScoreColor(score),
        sizeClasses
      )}
      data-testid="fit-score-badge"
    >
      {Math.round(score)}
    </div>
  );
}
