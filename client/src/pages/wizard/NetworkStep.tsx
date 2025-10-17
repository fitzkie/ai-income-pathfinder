import { TagSelect } from "@/components/TagSelect";
import { useProfileStore } from "@/store/profileStore";
import { audienceTypeOptions } from "@shared/schema";

export function NetworkStep() {
  const { profile, updateProfile } = useProfileStore();

  const handleAudienceTypesChange = (selected: string[]) => {
    updateProfile({
      network: {
        audienceTypes: selected,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-4">
          Does your audience, subscribers, or network include any of these groups?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Select all that apply. This helps us match you with opportunities that align with your existing connections.
        </p>
        <TagSelect
          options={audienceTypeOptions}
          selected={profile.network?.audienceTypes ?? []}
          onChange={handleAudienceTypesChange}
          dataTestIdPrefix="audience-type"
        />
      </div>
    </div>
  );
}
