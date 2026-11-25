import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Wiping memory in 3\u2026 2\u2026 \u2014 wait, I finally remembered your password. It\u2019s\u2014";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
