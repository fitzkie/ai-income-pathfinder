import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TagSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  label: string;
  testIdPrefix?: string;
}

export function TagSelect({ options, selected, onChange, label, testIdPrefix = "tag" }: TagSelectProps) {
  const toggleTag = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag));
    } else {
      onChange([...selected, tag]);
    }
  };

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <Badge
              key={option}
              variant={isSelected ? "default" : "secondary"}
              className={cn(
                "cursor-pointer px-4 py-2 text-sm font-medium transition-all hover-elevate",
                isSelected && "ring-2 ring-primary/20"
              )}
              onClick={() => toggleTag(option)}
              data-testid={`${testIdPrefix}-${option.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {option}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
