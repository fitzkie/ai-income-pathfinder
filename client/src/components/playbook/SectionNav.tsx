import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface SectionNavItem {
  id: string;
  label: string;
}

interface SectionNavProps {
  items: SectionNavItem[];
  checklistProgress?: { completed: number; total: number };
}

export function SectionNav({ items, checklistProgress }: SectionNavProps) {
  return (
    <nav className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Jump to section</p>
      <div className="space-y-1">
        {items.map((item) => {
          const isChecklist = item.id === "quick-win-checklist";
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-200",
                "hover:bg-zinc-900/80"
              )}
            >
              <span>{item.label}</span>
              {isChecklist && checklistProgress ? (
                <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                  {checklistProgress.completed}/{checklistProgress.total}
                </Badge>
              ) : null}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
