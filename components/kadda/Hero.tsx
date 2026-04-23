"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { KaddaOrnament } from "./KaddaLogo";
import { ArrowDown } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yOrn1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yOrn2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden grain isolate flex items-center pt-28 pb-12 lg:pt-32"
    >
      {/* Background subtle burgundy wash top */}
      <motion.div
        style={{ opacity: opacityBg }}
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[color:var(--color-cream-deep)]/60 to-transparent"
        aria-hidden="true"
      />

      {/* Decorative ornaments floating */}
      <motion.div
        style={{ y: yOrn1 }}
        className="pointer-events-none absolute -top-10 -right-10 md:top-10 md:right-12 w-[220px] md:w-[320px] text-[color:var(--color-burgundy)]/10"
        aria-hidden="true"
      >
        <div className="animate-orbit">
          <KaddaOrnament />
        </div>
      </motion.div>

      <motion.div
        style={{ y: yOrn2 }}
        className="pointer-events-none absolute -bottom-20 -left-16 md:left-10 md:bottom-24 w-[180px] md:w-[240px] text-[color:var(--color-slate)]/20"
        aria-hidden="true"
      >
        <div className="animate-orbit-rev">
          <KaddaOrnament />
        </div>
      </motion.div>

      <div className="container-kadda relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
        {/* LEFT — Wordmark + tagline */}
        <div className="lg:col-span-8 relative">
          <motion.span
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-burgundy)]/70"
          >
            <span className="h-px w-8 bg-[color:var(--color-burgundy)]/40" />
            Diseñadora de interacción · Bogotá, CO
          </motion.span>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-[color:var(--color-burgundy)] leading-[0.88]"
          >
            <span className="block text-[clamp(4.5rem,16vw,13rem)]">kadda</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 max-w-xl text-lg md:text-2xl font-light leading-[1.35] text-[color:var(--color-ink)]"
          >
            Convierto{" "}
            <span className="font-serif-italic text-[color:var(--color-burgundy)]">
              necesidades reales
            </span>{" "}
            en experiencias con propósito.
          </motion.p>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 max-w-lg text-sm md:text-[15px] leading-relaxed text-[color:var(--color-text-soft)]"
          >
            Karold Dayana Alvarado — diseño de interacción con intención.
            Experiencias que conectan a las personas con lo que necesitan, con
            claridad, criterio y carácter propio.
          </motion.p>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portafolio"
              className="btn-arrow inline-flex items-center gap-2 rounded-full bg-[color:var(--color-burgundy)] px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-burgundy-deep)]"
            >
              Ver portafolio
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7 3m4 4L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#sobre-mi"
              className="link-underline text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-burgundy)]"
            >
              Conocer a Karold
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Concept Card (inspired by "cartas" SVG) */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, rotate: 8, y: 30 }}
            animate={{ opacity: 1, rotate: 6, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[340px]"
          >
            {/* Shadow/back card */}
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-[color:var(--color-slate)]/30"
              aria-hidden="true"
            />
            {/* Main card */}
            <div className="relative rounded-[28px] border-2 border-[color:var(--color-ink)] bg-[color:var(--color-ink)] px-8 py-12 overflow-hidden">
              {/* Corner ornaments */}
              <div className="absolute top-4 left-4 w-10 text-[color:var(--color-cream)]/80">
                <KaddaOrnament />
              </div>
              <div className="absolute bottom-4 right-4 w-10 text-[color:var(--color-cream)]/80 rotate-180">
                <KaddaOrnament />
              </div>

              <div className="flex flex-col items-center text-center py-10">
                <span className="font-display text-[140px] leading-none text-[color:var(--color-cream)]">
                  k
                </span>
                <span className="mt-2 font-serif-italic text-[color:var(--color-slate-soft)] text-lg">
                  Warm Precision
                </span>
                <div className="mt-6 h-px w-14 bg-[color:var(--color-cream)]/40" />
                <span className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-cream)]/70">
                  2023 — now
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[color:var(--color-burgundy)]/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </motion.div>
    </section>
  );
}
