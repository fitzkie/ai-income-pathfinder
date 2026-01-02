import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScriptBlockProps {
  templates: {
    coldEmail: string;
    linkedInDm: string;
    upworkBio: string;
    shortHook: string;
  };
}

export function ScriptBlock({ templates }: ScriptBlockProps) {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState("coldEmail");

  const activeText = templates[active as keyof ScriptBlockProps["templates"]];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs value={active} onValueChange={setActive} className="w-full">
      <div className="flex items-center justify-between gap-2">
        <TabsList className="bg-zinc-900">
          <TabsTrigger value="coldEmail">Cold Email</TabsTrigger>
          <TabsTrigger value="linkedInDm">LinkedIn DM</TabsTrigger>
          <TabsTrigger value="upworkBio">Upwork Bio</TabsTrigger>
          <TabsTrigger value="shortHook">Short Hook</TabsTrigger>
        </TabsList>
        <Button
          variant="outline"
          size="sm"
          className="border-zinc-700 text-zinc-200"
          onClick={handleCopy}
        >
          {copied ? "Copied. Go get paid." : "Copy"}
        </Button>
      </div>
      <TabsContent value={active} className="mt-4">
        <div className="rounded-md border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-200 whitespace-pre-wrap">
          {activeText}
        </div>
      </TabsContent>
    </Tabs>
  );
}
