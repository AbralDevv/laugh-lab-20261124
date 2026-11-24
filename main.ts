import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laugh Lab (u-suroso-69-one-liner-laugh-lab-6ccf3aae):
// the excuse a robot vacuum gives after eating a sock, written verbatim
// to /output/entry.txt, no trailing newline. Under the 200-char gate.
const LINE =
  "The sock looked like a dust bunny with ambition. I did what any vacuum would do: I believed in it, then inhaled it.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-200`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
