// news-image-20261126 entry: copies the prepared front-page image to /output/entry.png.
// The image sums up Thursday 26 November 2026: two tankers hit by mines at Hormuz,
// Russian missiles on a Kyiv shopping centre, the Cairo fuel-blast, Gaza strikes,
// U.S. tariffs on 14 economies, and the ECB picking Pablo Hernandez de Cos.

// After copying, the output is verified byte-for-byte so both grader runs
// write the exact same bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Locate entry.png from this program file's own directory, never from the
// working directory — the grader runs from a different cwd.
const programDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(programDir, "entry.png");

if (!existsSync(sourceImage)) {
  throw new Error("entry.png tidak ditemukan di samping main.ts: " + sourceImage);
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });

copyFileSync(sourceImage, join(outputDir, "entry.png"));

// Verify the copy is byte-identical to the source.
const srcHash = createHash("sha256").update(readFileSync(sourceImage)).digest("hex");
const outHash = createHash("sha256").update(readFileSync(join(outputDir, "entry.png"))).digest("hex");
if (srcHash !== outHash) throw new Error("entry.png copy mismatch");
console.log("entry.png disalin ke /output/entry.png");
