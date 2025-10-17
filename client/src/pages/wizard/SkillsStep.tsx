import { TagSelect } from "@/components/TagSelect";
import { useProfileStore } from "@/store/profileStore";
import { skillOptions } from "@shared/schema";

export function SkillsStep() {
  const { profile, updateProfile } = useProfileStore();

  return (
    <div className="space-y-6">
      <TagSelect
        label="Select your skills (choose all that apply)"
        options={skillOptions}
        selected={profile.skills || []}
        onChange={(skills) => updateProfile({ skills })}
        testIdPrefix="skill"
      />
      <p className="text-sm text-muted-foreground">
        💡 Tip: Be honest about your current skills. We'll match you with opportunities that fit.
      </p>
    </div>
  );
}
