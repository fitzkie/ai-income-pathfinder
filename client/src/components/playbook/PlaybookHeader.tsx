import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PlaybookHeaderProps {
  title: string;
  tags: string[];
  isPro: boolean;
  onUpgrade: () => void;
  onSave?: () => void;
  onGenerate?: () => void;
}

export function PlaybookHeader({
  title,
  tags,
  isPro,
  onUpgrade,
  onSave,
  onGenerate,
}: PlaybookHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ebb437]">
            AI Income Pathfinder
          </span>
          <div className="hidden h-6 w-px bg-zinc-800 md:block" />
          <div className="hidden md:block">
            <p className="text-sm text-zinc-400">Playbook</p>
            <h1 className="text-base font-semibold text-white">{title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-zinc-900 text-zinc-200">
              {tag}
            </Badge>
          ))}
          {isPro ? (
            <Badge className="bg-[#ebb437] text-black">Unlocked</Badge>
          ) : (
            <Button variant="outline" className="border-[#ebb437] text-[#ebb437]" onClick={onUpgrade}>
              Upgrade
            </Button>
          )}
          {onGenerate ? (
            <Button variant="secondary" className="bg-zinc-900 text-white" onClick={onGenerate}>
              Generate
            </Button>
          ) : null}
          {onSave ? (
            <Button variant="outline" className="border-zinc-700 text-zinc-200" onClick={onSave}>
              Save
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
