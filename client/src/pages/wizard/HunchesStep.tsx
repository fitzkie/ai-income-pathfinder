import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useProfileStore } from "@/store/profileStore";

export function HunchesStep() {
  const { profile, updateProfile } = useProfileStore();
  const [inputValue, setInputValue] = useState("");

  const addHunch = () => {
    if (inputValue.trim() && !profile.marketHunches?.includes(inputValue.trim())) {
      updateProfile({
        marketHunches: [...(profile.marketHunches || []), inputValue.trim()],
      });
      setInputValue("");
    }
  };

  const removeHunch = (hunch: string) => {
    updateProfile({
      marketHunches: profile.marketHunches?.filter((h) => h !== hunch) || [],
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          Any niches or markets you think are trending? (Optional)
        </p>
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addHunch()}
            placeholder="e.g., TikTok automation, AI coaching..."
            data-testid="input-hunch"
          />
          <Button onClick={addHunch} type="button" data-testid="button-add-hunch">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {profile.marketHunches && profile.marketHunches.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium">Your hunches:</p>
          <div className="flex flex-wrap gap-2">
            {profile.marketHunches.map((hunch) => (
              <Badge key={hunch} variant="secondary" className="gap-2 px-3 py-1.5">
                {hunch}
                <button
                  onClick={() => removeHunch(hunch)}
                  className="hover:text-destructive"
                  data-testid={`remove-hunch-${hunch.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        💡 Tip: We'll factor these into your recommendations, but you can skip this step.
      </p>
    </div>
  );
}
