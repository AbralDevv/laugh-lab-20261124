// One-Liner Laugh Lab — revised entry (Neon FINAL line, typed verbatim).
// Writes the line to entry.txt in the grader's output dir, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = `You've fed me drywall dust and your husband's toenails since November. I saw one warm Nike sock, blacked out, and woke up screaming "Clear Main Brush" outside the nursery at 3 a.m.`;

const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./output"].filter(Boolean) as string[];
let written = false;
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
    written = true;
    break;
  } catch {
    // Directory not writable (e.g. read-only repo dir) — try the next fallback.
  }
}
if (!written) throw new Error("could not write entry.txt to any output dir");
