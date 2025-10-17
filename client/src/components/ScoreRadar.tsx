import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ScoreBreakdown } from '@shared/schema';

interface ScoreRadarProps {
  breakdown: ScoreBreakdown;
}

export function ScoreRadar({ breakdown }: ScoreRadarProps) {
  const data = [
    { subject: 'Skill Match', value: breakdown.skill, fullMark: 100 },
    { subject: 'Interest', value: breakdown.interest, fullMark: 100 },
    { subject: 'Assets', value: breakdown.assets, fullMark: 100 },
    { subject: 'Constraints', value: breakdown.constraints, fullMark: 100 },
    { subject: 'Time to Cash', value: breakdown.timeToCash, fullMark: 100 },
    { subject: 'Demand', value: breakdown.demand, fullMark: 100 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
        />
        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
        <Radar
          name="Fit Score"
          dataKey="value"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.3}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
