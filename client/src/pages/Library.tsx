import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Opportunity } from "@shared/schema";
import { useSavedPlaybooks } from "@/hooks/useSavedPlaybooks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Library() {
  const { saved } = useSavedPlaybooks();
  const { data: opportunities, isLoading } = useQuery<Opportunity[]>({
    queryKey: ["/api/opportunities"],
  });

  const savedItems = opportunities?.filter((opp) => saved.includes(opp.slug)) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-sm text-zinc-400">Loading your library…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#ebb437]">Library</p>
          <h1 className="text-3xl font-semibold mt-2">Saved Pro Playbooks</h1>
          <p className="text-sm text-zinc-400 mt-2">
            Quick access to the hustles you want to revisit.
          </p>
        </div>

        {savedItems.length === 0 ? (
          <Card className="bg-zinc-950/80 border-zinc-800">
            <CardContent className="py-10 text-center text-sm text-zinc-400">
              No saved playbooks yet. Save a hustle from results or a playbook page.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {savedItems.map((item) => (
              <Card key={item.slug} className="bg-zinc-950/80 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                  <p className="text-sm text-zinc-400">{item.summary}</p>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="border-zinc-700 text-zinc-200">
                    <Link href={`/hustles/${item.slug}`}>View Preview</Link>
                  </Button>
                  <Button asChild className="bg-[#ebb437] text-black hover:bg-[#d6a931]">
                    <Link href={`/pro/${item.slug}`}>Open Pro Playbook</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
