import { SliderWithValue } from "@/components/SliderWithValue";
import { TagSelect } from "@/components/TagSelect";
import { useProfileStore } from "@/store/profileStore";
import { toolOptions } from "@shared/schema";

export function AssetsStep() {
  const { profile, updateProfile } = useProfileStore();

  return (
    <div className="space-y-8">
      <SliderWithValue
        label="Existing audience size (followers/subscribers)"
        value={profile.assets?.audience ?? 0}
        onChange={(audience) =>
          updateProfile({ assets: { ...profile.assets!, audience } })
        }
        min={0}
        max={100000}
        step={1000}
        testId="slider-audience"
      />

      <SliderWithValue
        label="Budget to invest"
        value={profile.assets?.budget ?? 0}
        onChange={(budget) =>
          updateProfile({ assets: { ...profile.assets!, budget } })
        }
        min={0}
        max={5000}
        step={100}
        unit="$"
        testId="slider-budget"
      />

      <SliderWithValue
        label="Time available per week"
        value={profile.assets?.timePerWeek ?? 10}
        onChange={(timePerWeek) =>
          updateProfile({ assets: { ...profile.assets!, timePerWeek } })
        }
        min={1}
        max={40}
        step={1}
        unit=" hrs"
        testId="slider-time"
      />

      <TagSelect
        label="Tools you already use"
        options={toolOptions}
        selected={profile.assets?.tools || []}
        onChange={(tools) =>
          updateProfile({ assets: { ...profile.assets!, tools } })
        }
        testIdPrefix="tool"
      />
    </div>
  );
}
