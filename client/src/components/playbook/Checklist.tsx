import { Checkbox } from "@/components/ui/checkbox";

interface ChecklistProps {
  items: { label: string }[];
  value: Record<number, boolean>;
  onChange: (next: Record<number, boolean>) => void;
}

export function Checklist({ items, value, onChange }: ChecklistProps) {
  const handleToggle = (index: number) => {
    onChange({ ...value, [index]: !value[index] });
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <label key={item.label} className="flex items-start gap-3 text-sm text-zinc-200">
          <Checkbox
            checked={value[index] ?? false}
            onCheckedChange={() => handleToggle(index)}
            className="mt-0.5 border-zinc-600 data-[state=checked]:bg-[#ebb437] data-[state=checked]:border-[#ebb437]"
          />
          <span className={value[index] ? "text-zinc-500 line-through" : ""}>{item.label}</span>
        </label>
      ))}
    </div>
  );
}
