"use client";

import { KaddaOrnament } from "./KaddaLogo";

const WORDS = [
  "Humana",
  "Analítica",
  "Intencional",
  "UX Research",
  "Sistemas de diseño",
  "Agile UX",
  "IA aplicada",
];

export default function Marquee() {
  return (
    <div
      className="relative bg-[color:var(--color-burgundy)] text-[color:var(--color-cream)] overflow-hidden border-y border-[color:var(--color-burgundy-deep)]"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap py-6 animate-marquee">
        {[...WORDS, ...WORDS, ...WORDS].map((w, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 font-display text-3xl md:text-5xl tracking-tight"
          >
            {w}
            <KaddaOrnament className="w-5 h-5 text-[color:var(--color-cream)]/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
