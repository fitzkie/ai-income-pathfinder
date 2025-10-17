import { TagSelect } from "@/components/TagSelect";
import { useProfileStore } from "@/store/profileStore";
import { interestOptions } from "@shared/schema";

export function InterestsStep() {
  const { profile, updateProfile } = useProfileStore();

  return (
    <div className="space-y-6">
      <TagSelect
        label="What do you enjoy doing?"
        options={interestOptions}
        selected={profile.interests || []}
        onChange={(interests) => updateProfile({ interests })}
        testIdPrefix="interest"
      />
      <p className="text-sm text-muted-foreground">
        💡 Tip: Pick what genuinely excites you. You'll stick with it longer.
      </p>
    </div>
  );
}
