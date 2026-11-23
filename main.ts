// A Day of One-Line Pitches — make.fun bounty entry.
//
// The whole entry is one sentence: a pitch that would convince a friend
// who has never coded to let an AI agent build their first app idea on
// make.fun. It is written to /output/entry.txt, exactly as it will be
// judged — no trailing newline, no extra text.
//
// Why this sentence: it opens on the idea the friend already carries
// ("carrying around in your head"), names the only thing they have to do
// (describe it in plain words), says who does the building (an AI agent
// on make.fun), and removes the risk twice — free to try, and they only
// keep the result if they love it. Plain words throughout, nothing
// overpromised: describing an idea and trying it for free are both true
// of a first build on make.fun.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The pitch as one literal, so the judged text is exactly what you read
// here — 198 characters, well inside the 240-character gate.
const PITCH =
  "That app idea you've been carrying around in your head? Just describe it in plain words and an AI agent on make.fun will build it for you — free to try, no code, and you only keep it if you love it.";

function main(): void {
  // Fail loudly rather than ever writing an over-long entry.
  if (PITCH.length > 240 || PITCH.trim().length === 0) {
    throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, PITCH, "utf8");

  // Read it back: the graded file must be byte-for-byte the pitch.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== PITCH) {
    throw new Error("entry.txt does not match the pitch");
  }
}

main();
