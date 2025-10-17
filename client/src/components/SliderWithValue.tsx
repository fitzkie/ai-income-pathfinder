import { Slider } from "@/components/ui/slider";

interface SliderWithValueProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  testId?: string;
}

export function SliderWithValue({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = "",
  testId = "slider",
}: SliderWithValueProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-semibold text-primary" data-testid={`${testId}-value`}>
          {value}{unit}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        min={min}
        max={max}
        step={step}
        data-testid={testId}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}
