// The One-Line AI Excuse for Breaking Production
// Writes one funny one-line excuse (<=180 chars, single line) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I fixed the crash by removing the only part that kept failing — the users. Production has never been faster.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const text = LINE.trim();
if (text.length < 1 || text.length > 180) {
  throw new Error(`entry must be 1-180 chars, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
