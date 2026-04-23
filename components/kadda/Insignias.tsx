"use client";

import { motion } from "framer-motion";
import { KaddaOrnament } from "./KaddaLogo";
import { GraduationCap, Award, Sparkles, Languages } from "lucide-react";

const CERTIFICATIONS = [
  {
    icon: GraduationCap,
    institution: "Universidad Santo Tomás",
    program: "Diseño de Interacción",
    meta: "7° semestre · 2023 –",
  },
  {
    icon: Award,
    institution: "Coderhouse",
    program: "Carrera UX/UI Design",
    meta: "2024",
  },
  {
    icon: Award,
    institution: "Coderhouse",
    program: "Diseño UX/UI Avanzado",
    meta: "2023",
  },
  {
    icon: Award,
    institution: "Coderhouse",
    program: "UX Research",
    meta: "2023",
  },
  {
    icon: Award,
    institution: "Coderhouse",
    program: "UX Writing",
    meta: "2023",
  },
  {
    icon: Languages,
    institution: "Idiomas",
    program: "Español nativo · Inglés B1",
    meta: "Comunicativo",
  },
];

const TOOLS_GROUPS = [
  {
    label: "Diseño",
    items: ["Figma", "FigJam", "Figma Make", "Illustrator", "Photoshop", "XD", "InDesign"],
  },
  {
    label: "Motion & Video",
    items: ["After Effects", "Premiere"],
  },
  {
    label: "Research & Gestión",
    items: ["Maze", "Miro", "Notion", "Trello"],
  },
  {
    label: "Otros",
    items: ["Unity", "Reaper", "Express"],
  },
];

const DISCIPLINES = [
  "UX Research",
  "Investigación de usuarios",
  "Diseño de interacción",
  "Flujos de usuario",
  "Prototipado alta fidelidad",
  "UI Design",
  "Sistemas de diseño",
  "UX Writing",
  "Gerencia de proyectos",
  "Agile UX",
  "IA aplicada al diseño",
];

export default function Insignias() {
  return (
    <section
      id="insignias"
      className="relative py-24 md:py-32 bg-[color:var(--color-cream-soft)]/50 border-y border-[color:var(--color-border)] overflow-hidden"
    >
      {/* Ornament watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 w-[380px] text-[color:var(--color-burgundy)]/[0.05] rotate-12"
      >
        <KaddaOrnament />
      </div>

      <div className="container-kadda relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[color:var(--color-burgundy)]/40" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-burgundy)]/80">
                Insignias · 02
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] text-[color:var(--color-burgundy)] max-w-2xl"
            >
              Formación, herramientas y{" "}
              <span className="font-serif-italic text-[color:var(--color-ink)]">
                disciplinas
              </span>
              .
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-sm text-sm leading-relaxed text-[color:var(--color-text)]/70"
          >
            Cada insignia representa un paso en el camino de convertir la
            investigación en experiencias útiles y accesibles.
          </motion.p>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.article
                key={cert.program}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className="group relative flex gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream)] p-5 hover:border-[color:var(--color-burgundy)]/50 hover:-translate-y-0.5 transition-all duration-500"
              >
                <div className="shrink-0 h-11 w-11 rounded-xl bg-[color:var(--color-burgundy)] text-[color:var(--color-cream)] grid place-items-center group-hover:bg-[color:var(--color-burgundy-deep)] transition-colors">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-burgundy)]/70">
                    {cert.institution}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-[color:var(--color-burgundy)] leading-tight">
                    {cert.program}
                  </h3>
                  <p className="mt-2 text-xs text-[color:var(--color-text)]/60">
                    {cert.meta}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Tools */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-4 w-4 text-[color:var(--color-burgundy)]" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-burgundy)]/80">
              Herramientas
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {TOOLS_GROUPS.map((g, gi) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.08 * gi }}
              >
                <p className="font-serif-italic text-[color:var(--color-burgundy)] text-lg mb-4">
                  — {g.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="inline-flex items-center rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-cream)] px-3.5 py-1.5 text-xs text-[color:var(--color-ink)] hover:bg-[color:var(--color-burgundy)] hover:text-[color:var(--color-cream)] hover:border-[color:var(--color-burgundy)] transition-colors cursor-default"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disciplines */}
        <div className="mt-20 rounded-3xl border border-[color:var(--color-burgundy)]/20 bg-[color:var(--color-cream)] p-8 md:p-12 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-44 text-[color:var(--color-burgundy)]/10"
          >
            <KaddaOrnament className="animate-orbit" />
          </div>

          <div className="relative grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-burgundy)]/80 mb-3">
                Disciplinas
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-[color:var(--color-burgundy)] leading-tight">
                Lo que hago, <span className="font-serif-italic">con propósito</span>.
              </h3>
            </div>
            <ul className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-3 content-start">
              {DISCIPLINES.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.02 * i }}
                  className="text-base md:text-lg text-[color:var(--color-ink)] font-light"
                >
                  {d}
                  {i < DISCIPLINES.length - 1 && (
                    <span className="ml-6 text-[color:var(--color-burgundy)]/40">·</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
