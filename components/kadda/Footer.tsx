"use client";

import { KaddaLockup } from "./KaddaLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-burgundy-deep)] text-[color:var(--color-cream)]/80 py-10">
      <div className="container-kadda flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="text-[color:var(--color-cream)]">
          <KaddaLockup compact />
        </div>

        <p className="font-serif-italic text-[color:var(--color-cream)]/70 text-center md:text-left text-sm">
          Diseño con intención · Karold Alvarado
        </p>

        <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-cream)]/50">
          © {year} kadda · Bogotá
        </p>
      </div>
    </footer>
  );
}
