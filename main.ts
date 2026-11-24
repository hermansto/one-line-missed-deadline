import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "The deadline moved. I was never told. I assumed it was a suggestion.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");

const back = readFileSync(target, "utf8");
if (back !== line) {
  throw new Error("entry.txt does not match the expected line exactly");
}
if (back.endsWith("\n") || back.length !== 68) {
  throw new Error("entry.txt must be exactly 68 characters with no trailing newline");
}
console.log(`Wrote ${back.length} characters to ${target} (no trailing newline)`);
