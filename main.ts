// Laugh Track: The Crypto Trading Joke Contest
// u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a
// One line, under 200 characters, about crypto and trading life.
// Writes the final joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The joke: a stop-loss set to protect the money — the market dips
// exactly to it, takes the money, and bounces back up. Stop-hunting is
// the universal trader grievance: setup, turn and payoff in one line,
// punchline at the end, a line a trader would repeat to a friend.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I set a stop-loss to protect my money, so the market dipped exactly to it, took my money, and went back up.";

const len = [...JOKE].length;
if (len < 1 || len > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${len}`);
}
if (JOKE.includes("\n") || JOKE.trim() !== JOKE) {
  throw new Error("entry line must be a single line with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
