import { SliderWithValue } from "@/components/SliderWithValue";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useProfileStore } from "@/store/profileStore";

export function GoalsStep() {
  const { profile, updateProfile } = useProfileStore();

  return (
    <div className="space-y-8">
      <SliderWithValue
        label="Monthly income target"
        value={profile.goals?.incomeTarget ?? 500}
        onChange={(incomeTarget) =>
          updateProfile({ goals: { ...profile.goals!, incomeTarget } })
        }
        min={100}
        max={10000}
        step={100}
        unit="$"
        testId="slider-income-target"
      />

      <div className="space-y-4">
        <Label>Passive vs. active income preference</Label>
        <RadioGroup
          value={profile.goals?.passiveVsActive ?? "balanced"}
          onValueChange={(passiveVsActive: "passive" | "balanced" | "active") =>
            updateProfile({ goals: { ...profile.goals!, passiveVsActive } })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="passive" id="income-passive" data-testid="radio-passive" />
            <Label htmlFor="income-passive" className="font-normal cursor-pointer">
              Passive - Set it and (mostly) forget it
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="balanced" id="income-balanced" data-testid="radio-balanced" />
            <Label htmlFor="income-balanced" className="font-normal cursor-pointer">
              Balanced - Mix of both
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="active" id="income-active" data-testid="radio-active" />
            <Label htmlFor="income-active" className="font-normal cursor-pointer">
              Active - I'll trade time for money
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label>B2B vs. B2C preference</Label>
        <RadioGroup
          value={profile.goals?.b2bVsB2c ?? "both"}
          onValueChange={(b2bVsB2c: "b2b" | "both" | "b2c") =>
            updateProfile({ goals: { ...profile.goals!, b2bVsB2c } })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="b2b" id="market-b2b" data-testid="radio-b2b" />
            <Label htmlFor="market-b2b" className="font-normal cursor-pointer">
              B2B - Sell to businesses
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="both" id="market-both" data-testid="radio-both" />
            <Label htmlFor="market-both" className="font-normal cursor-pointer">
              Both - I'm flexible
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="b2c" id="market-b2c" data-testid="radio-b2c" />
            <Label htmlFor="market-b2c" className="font-normal cursor-pointer">
              B2C - Sell to consumers
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
