import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type {
  MonetizationRow,
  PlaybookActionRow,
  SummaryRow,
  ToolkitRow,
} from "@shared/schema";

export function ActionPlanTable({ rows }: { rows: PlaybookActionRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-zinc-800">
          <TableHead className="text-zinc-400">Phase</TableHead>
          <TableHead className="text-zinc-400">What to Do</TableHead>
          <TableHead className="text-zinc-400">Tool Stack</TableHead>
          <TableHead className="text-zinc-400">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={`${row.phase}-${row.time}`} className="border-zinc-900">
            <TableCell className="text-zinc-200">{row.phase}</TableCell>
            <TableCell className="text-zinc-200">{row.what}</TableCell>
            <TableCell className="text-zinc-200">
              <div className="flex flex-wrap gap-2">
                {row.tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="border-zinc-700 text-zinc-300">
                    {tool}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell className="text-zinc-200">{row.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function MonetizationTable({ rows }: { rows: MonetizationRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-zinc-800">
          <TableHead className="text-zinc-400">Offer</TableHead>
          <TableHead className="text-zinc-400">Description</TableHead>
          <TableHead className="text-zinc-400">Price</TableHead>
          <TableHead className="text-zinc-400">Frequency</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={`${row.offer}-${row.price}`} className="border-zinc-900">
            <TableCell className="text-zinc-200">{row.offer}</TableCell>
            <TableCell className="text-zinc-200">{row.description}</TableCell>
            <TableCell className="text-zinc-200">{row.price}</TableCell>
            <TableCell className="text-zinc-200">{row.frequency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function ToolkitTable({ rows }: { rows: ToolkitRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-zinc-800">
          <TableHead className="text-zinc-400">Asset Type</TableHead>
          <TableHead className="text-zinc-400">Tool</TableHead>
          <TableHead className="text-zinc-400">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={`${row.assetType}-${row.tool}`} className="border-zinc-900">
            <TableCell className="text-zinc-200">
              <Badge variant="secondary" className="bg-zinc-900 text-zinc-200">
                {row.assetType}
              </Badge>
            </TableCell>
            <TableCell className="text-zinc-200">{row.tool}</TableCell>
            <TableCell className="text-zinc-200">{row.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function SummaryTable({ rows }: { rows: SummaryRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-zinc-800">
          <TableHead className="text-zinc-400">Field</TableHead>
          <TableHead className="text-zinc-400">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.field} className="border-zinc-900">
            <TableCell className="text-zinc-200">{row.field}</TableCell>
            <TableCell className="text-zinc-200">{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
