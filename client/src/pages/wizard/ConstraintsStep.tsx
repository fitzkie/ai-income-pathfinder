import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useProfileStore } from "@/store/profileStore";

export function ConstraintsStep() {
  const { profile, updateProfile } = useProfileStore();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label>Risk tolerance</Label>
        <RadioGroup
          value={profile.constraints?.risk ?? "medium"}
          onValueChange={(risk: "low" | "medium" | "high") =>
            updateProfile({ constraints: { ...profile.constraints!, risk } })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="low" id="risk-low" data-testid="radio-risk-low" />
            <Label htmlFor="risk-low" className="font-normal cursor-pointer">
              Low - I prefer safe, proven methods
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="risk-medium" data-testid="radio-risk-medium" />
            <Label htmlFor="risk-medium" className="font-normal cursor-pointer">
              Medium - I'm open to some experimentation
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="risk-high" data-testid="radio-risk-high" />
            <Label htmlFor="risk-high" className="font-normal cursor-pointer">
              High - I love trying new things
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label>Timeline to first income</Label>
        <RadioGroup
          value={profile.constraints?.timeline ?? "normal"}
          onValueChange={(timeline: "fast" | "normal" | "long") =>
            updateProfile({ constraints: { ...profile.constraints!, timeline } })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fast" id="timeline-fast" data-testid="radio-timeline-fast" />
            <Label htmlFor="timeline-fast" className="font-normal cursor-pointer">
              Fast - I want to earn within 1-2 weeks
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="normal" id="timeline-normal" data-testid="radio-timeline-normal" />
            <Label htmlFor="timeline-normal" className="font-normal cursor-pointer">
              Normal - 1-2 months is fine
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="long" id="timeline-long" data-testid="radio-timeline-long" />
            <Label htmlFor="timeline-long" className="font-normal cursor-pointer">
              Long - I'm building for 3+ months
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="on-camera" className="font-normal">
          I'm comfortable being on camera
        </Label>
        <Switch
          id="on-camera"
          checked={profile.constraints?.onCamera ?? false}
          onCheckedChange={(onCamera) =>
            updateProfile({ constraints: { ...profile.constraints!, onCamera } })
          }
          data-testid="switch-on-camera"
        />
      </div>
    </div>
  );
}
