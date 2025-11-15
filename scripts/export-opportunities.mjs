import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadOpportunitiesFromCsv, exportedHeaders, formatOpportunityRow } from "./opportunity-utils.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(__dirname, "../attached_assets/203-side-hustles-full.csv");
const opportunities = loadOpportunitiesFromCsv();

const rows = [exportedHeaders, ...opportunities.map(formatOpportunityRow)];
const csvText = rows.map((row) => row.map(escapeCell).join(",")).join("\n");

fs.writeFileSync(outputPath, csvText, "utf8");
console.log(`✅ Exported ${opportunities.length} opportunities to ${outputPath}`);

function escapeCell(value) {
  const cell = value ?? "";
  if (cell === "") return "";
  if (/[",\n]/.test(cell)) {
    return `"${cell.replace(/"/g, '""')}"`;
  }
  return cell;
}
