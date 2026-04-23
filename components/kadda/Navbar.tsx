"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KaddaLockup } from "./KaddaLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#insignias", label: "Insignias" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-out ${
          scrolled
            ? "bg-[color:var(--color-cream)]/85 backdrop-blur-xl border-b border-[color:var(--color-border)] py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="container-kadda flex items-center justify-between gap-6">
          <a
            href="#top"
            className="text-[color:var(--color-burgundy)] transition-opacity hover:opacity-80"
            aria-label="kadda · inicio"
          >
            <KaddaLockup compact />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-burgundy)] transition-colors font-light tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:karold.antolinez@outlook.com"
            className="hidden md:inline-flex btn-arrow items-center gap-2 rounded-full bg-[color:var(--color-burgundy)] px-5 py-2.5 text-xs tracking-[0.18em] uppercase text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-burgundy-deep)]"
          >
            Hablemos
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] text-[color:var(--color-burgundy)]"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-[color:var(--color-cream)] pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                  className="font-display text-4xl text-[color:var(--color-burgundy)]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:karold.antolinez@outlook.com"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-burgundy)] px-6 py-3 text-xs tracking-[0.2em] uppercase text-[color:var(--color-cream)]"
              >
                Hablemos <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
