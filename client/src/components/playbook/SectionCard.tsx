import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export function SectionCard({ id, title, subtitle, action, children }: SectionCardProps) {
  return (
    <Card id={id} className="bg-zinc-950/80 border-zinc-800">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="text-lg text-white">{title}</CardTitle>
          {subtitle ? <p className="text-sm text-zinc-400 mt-1">{subtitle}</p> : null}
        </div>
        {action}
      </CardHeader>
      <CardContent className="text-sm text-zinc-200">{children}</CardContent>
    </Card>
  );
}
