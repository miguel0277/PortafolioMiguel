"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KaddaOrnament } from "./KaddaLogo";

const PILLARS = [
  {
    title: "Humana",
    body: "Mis proyectos parten de comprender a las personas y sus necesidades reales. La empatía es el punto de partida, no un adorno.",
    numeral: "01",
  },
  {
    title: "Analítica",
    body: "Sustento cada decisión en investigación, datos o pruebas con usuarios. Lo que se puede validar, se valida.",
    numeral: "02",
  },
  {
    title: "Intencional",
    body: "Cada elemento tiene un propósito dentro de la experiencia. Sin ruido, sin rellenos: diseño que sostiene un para qué.",
    numeral: "03",
  },
];

const STATS = [
  { value: "7°", label: "Semestre en\nDiseño de Interacción" },
  { value: "4", label: "Certificaciones\nCoderhouse" },
  { value: "12+", label: "Herramientas\nde diseño" },
  { value: "B1", label: "Inglés\ncomunicativo" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative py-24 md:py-32 overflow-hidden isolate"
    >
      {/* Soft section background with subtle ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 w-[420px] text-[color:var(--color-burgundy)]/[0.04]"
      >
        <KaddaOrnament className="animate-float-slow" />
      </div>

      <div className="container-kadda relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-[color:var(--color-burgundy)]/40" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-burgundy)]/80">
            Sobre mí · 01
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — Portrait composed with ornamental frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] max-w-[440px] mx-auto lg:mx-0">
              {/* Frame back shape */}
              <div className="absolute inset-0 rounded-[28px] border border-[color:var(--color-burgundy)]/30 translate-x-4 translate-y-4" />

              {/* Portrait container */}
              <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[color:var(--color-cream-deep)]">
                <Image
                  src="/karold/portrait.jpg"
                  alt="Retrato editorial de Karold Alvarado"
                  fill
                  sizes="(min-width: 1024px) 440px, 90vw"
                  className="object-cover"
                  priority
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-burgundy)]/20 via-transparent to-transparent mix-blend-multiply" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -left-6 bottom-10 bg-[color:var(--color-cream)] border-2 border-[color:var(--color-burgundy)] rounded-2xl px-5 py-3"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-burgundy)]/70">
                  Basada en
                </p>
                <p className="font-display text-xl text-[color:var(--color-burgundy)] leading-tight">
                  Bogotá · CO
                </p>
              </motion.div>

              {/* Ornament */}
              <div className="absolute -top-6 -right-6 w-16 text-[color:var(--color-burgundy)] animate-float-slow">
                <KaddaOrnament />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Narrative + pillars */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] text-[color:var(--color-burgundy)]"
            >
              Diseñadora que{" "}
              <span className="font-serif-italic text-[color:var(--color-ink)]">
                entiende
              </span>{" "}
              a las personas.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 space-y-5 max-w-xl text-[15px] md:text-base leading-relaxed text-[color:var(--color-text)]/85"
            >
              <p>
                Soy <strong className="font-medium">Karold Alvarado</strong>,
                estudiante de Diseño de Interacción en la Universidad Santo
                Tomás (Tunja) y formada en UX/UI por Coderhouse. Trabajo en la
                intersección entre investigación, estrategia visual y escritura
                clara.
              </p>
              <p>
                Me interesa lo que{" "}
                <span className="font-serif-italic text-[color:var(--color-burgundy)]">
                  ocurre antes de diseñar
                </span>
                : escuchar, analizar, dudar. Me gusta acompañar procesos
                sensibles con discreción y convertir hallazgos complejos en
                decisiones simples.
              </p>
            </motion.div>

            {/* Pillars grid */}
            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              {PILLARS.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.1 * i }}
                  className="group relative rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream-soft)]/60 p-5 hover:border-[color:var(--color-burgundy)]/40 hover:bg-[color:var(--color-cream-soft)] transition-all duration-500"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif-italic text-[color:var(--color-burgundy)]/50 text-sm">
                      {p.numeral}
                    </span>
                    <KaddaOrnament className="w-4 h-4 text-[color:var(--color-burgundy)]/40 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-[color:var(--color-burgundy)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--color-text)]/75">
                    {p.body}
                  </p>
                </motion.article>
              ))}
            </div>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 border-t border-[color:var(--color-border)]">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.value}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className={`pt-6 pb-2 pr-3 ${
                    i !== 0
                      ? "sm:border-l sm:border-[color:var(--color-border)] sm:pl-5"
                      : ""
                  }`}
                >
                  <p className="font-display text-4xl text-[color:var(--color-burgundy)] leading-none">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text)]/60 whitespace-pre-line leading-snug">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
