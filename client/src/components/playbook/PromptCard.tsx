import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PromptCardProps {
  title: string;
  prompt: string;
  useCase: string;
}

export function PromptCard({ title, prompt, useCase }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="text-xs text-zinc-500 mt-1">{useCase}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 border border-zinc-800 text-zinc-200"
          onClick={handleCopy}
          aria-label={`Copy prompt for ${title}`}
        >
          {copied ? <Check className="h-4 w-4 text-[#ebb437]" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <p className="mt-3 text-xs text-zinc-200 whitespace-pre-wrap">{prompt}</p>
    </div>
  );
}
