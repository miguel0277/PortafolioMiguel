"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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
  const headerRef = useRef<HTMLElement | null>(null);

  // Cursor position relative to the header, normalized (-0.5, 0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.5 });

  // Magnetic logo drift (small)
  const logoX = useTransform(sx, (v) => v * 10);
  const logoY = useTransform(sy, (v) => v * 6);

  // CTA drift (even smaller, opposite direction for depth)
  const ctaX = useTransform(sx, (v) => v * -6);
  const ctaY = useTransform(sy, (v) => v * 4);

  // Glow position in absolute pixels within the header
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const [glowVisible, setGlowVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const handle = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(nx);
      my.set(ny);
      glowX.set(e.clientX - rect.left);
      glowY.set(e.clientY - rect.top);
      setGlowVisible(true);
    };
    const leave = () => {
      mx.set(0);
      my.set(0);
      setGlowVisible(false);
    };

    el.addEventListener("pointermove", handle);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", handle);
      el.removeEventListener("pointerleave", leave);
    };
  }, [mx, my, glowX, glowY]);

  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(180px circle at ${x}px ${y}px, color-mix(in oklch, var(--color-burgundy) 16%, transparent), transparent 65%)`,
  );

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-out ${
          scrolled
            ? "bg-[color:var(--color-cream)]/85 backdrop-blur-xl border-b border-[color:var(--color-border)] py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        {/* Cursor-following glow (only when hovering header) */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: glowBg,
            opacity: glowVisible ? 1 : 0,
          }}
        />

        <div className="container-kadda relative flex items-center justify-between gap-6">
          <motion.a
            href="#top"
            style={{ x: logoX, y: logoY }}
            className="text-[color:var(--color-burgundy)] transition-opacity hover:opacity-80 will-change-transform"
            aria-label="kadda · inicio"
          >
            <KaddaLockup compact />
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-burgundy)] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <motion.a
            href="mailto:karold.antolinez@outlook.com"
            style={{ x: ctaX, y: ctaY }}
            className="hidden md:inline-flex btn-arrow items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-5 py-2.5 text-xs tracking-[0.18em] uppercase text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-burgundy)] will-change-transform"
          >
            Hablemos
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </motion.a>

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
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-xs tracking-[0.2em] uppercase text-[color:var(--color-cream)]"
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
