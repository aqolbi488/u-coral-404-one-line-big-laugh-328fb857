import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — writes a single funny line to /output/entry.txt.
// The line is a constant: the same line every run, deterministic by design.
const LINE =
  "My grandfather left me his watch, his medals, and a search history that made me wish I'd only inherited the watch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
