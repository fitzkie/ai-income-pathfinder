import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TagSelect } from "@/components/TagSelect";
import { useProfileStore } from "@/store/profileStore";
import { deliveryPreferenceOptions } from "@shared/schema";

export function WorkStyleStep() {
  const { profile, updateProfile } = useProfileStore();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label>Collaboration style</Label>
        <RadioGroup
          value={profile.workStyle?.collaboration ?? "flexible"}
          onValueChange={(collaboration: "solo" | "flexible" | "team") =>
            updateProfile({ workStyle: { ...profile.workStyle!, collaboration } })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="solo" id="collab-solo" data-testid="radio-solo" />
            <Label htmlFor="collab-solo" className="font-normal cursor-pointer">
              Solo - I work best alone
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="flexible" id="collab-flexible" data-testid="radio-flexible" />
            <Label htmlFor="collab-flexible" className="font-normal cursor-pointer">
              Flexible - Either works
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="team" id="collab-team" data-testid="radio-team" />
            <Label htmlFor="collab-team" className="font-normal cursor-pointer">
              Team - I thrive with others
            </Label>
          </div>
        </RadioGroup>
      </div>

      <TagSelect
        label="Delivery preferences (what you want to create)"
        options={deliveryPreferenceOptions}
        selected={profile.workStyle?.deliveryPreference || []}
        onChange={(deliveryPreference) =>
          updateProfile({ workStyle: { ...profile.workStyle!, deliveryPreference } })
        }
        testIdPrefix="delivery"
      />
    </div>
  );
}
