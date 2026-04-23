"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KaddaOrnament } from "./KaddaLogo";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  year: string;
  title: string;
  tagline: string;
  summary: string;
  reto: string;
  categorias: string[];
  herramientas: string[];
  image: string;
  accent: "burgundy" | "slate" | "deep";
  align: "left" | "right";
};

const PROJECTS: Project[] = [
  {
    id: "balancewatch",
    year: "2024",
    title: "Balancewatch",
    tagline: "Cuidándote en cada paso del camino.",
    summary:
      "App para smartwatch que acompaña discretamente a personas con TCA en su recuperación, detectando episodios y conectando al equipo médico sin invadir la privacidad del usuario.",
    reto: "¿Cómo acompañar digitalmente a pacientes con TCA sin invadir su privacidad?",
    categorias: ["UX Research", "Wearable", "Salud Mental"],
    herramientas: ["Figma", "Illustrator", "Notion"],
    image: "/karold/balancewatch.jpg",
    accent: "burgundy",
    align: "left",
  },
  {
    id: "conectando",
    year: "2025",
    title: "Conectando",
    tagline: "Reconectar con lo que te devuelve energía.",
    summary:
      "Sitio web para promover talleres y espacios donde las personas reconectan con actividades de ocio que las distraen, motivan y regresan al bienestar cotidiano.",
    reto: "¿Cómo motivar a las personas a reconectar con actividades de ocio que les devuelvan el bienestar?",
    categorias: ["UI Design", "Sitio Web", "Bienestar"],
    herramientas: ["Figma", "Illustrator"],
    image: "/karold/conectando.jpg",
    accent: "slate",
    align: "right",
  },
  {
    id: "vpop",
    year: "2025",
    title: "Vpop",
    tagline: "Estampa lo tuyo, compra lo tuyo.",
    summary:
      "Prototipo de e-commerce para personalizar y estampar prendas y objetos a medida antes de comprarlos: una experiencia fluida, tactil y divertida.",
    reto: "¿Cómo hacer que personalizar una prenda estampada sea una experiencia fluida y divertida?",
    categorias: ["UI Design", "E-commerce", "Prototipado"],
    herramientas: ["Figma"],
    image: "/karold/vpop.jpg",
    accent: "deep",
    align: "left",
  },
];

const accentOverlay = {
  burgundy: "bg-[color:var(--color-burgundy)]/10",
  slate: "bg-[color:var(--color-ink)]/10",
  deep: "bg-[color:var(--color-burgundy-deep)]/10",
} as const;

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="relative py-24 md:py-32 overflow-hidden isolate"
    >
      <div className="container-kadda">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[color:var(--color-burgundy)]/40" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-burgundy)]/80">
                Portafolio · 03
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] text-[color:var(--color-burgundy)] max-w-3xl"
            >
              Proyectos{" "}
              <span className="font-serif-italic text-[color:var(--color-ink)]">
                seleccionados
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
            Tres procesos que resumen cómo investigo, decido y diseño con
            propósito. Cada uno con su reto, su método y su cierre.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-36">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Extras teaser */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-28 md:mt-36 rounded-3xl border border-[color:var(--color-burgundy)]/25 bg-[color:var(--color-cream-soft)]/60 overflow-hidden relative"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -bottom-20 w-[320px] text-[color:var(--color-burgundy)]/10"
          >
            <KaddaOrnament className="animate-orbit-rev" />
          </div>

          <div className="relative grid md:grid-cols-12 gap-6 p-8 md:p-12 items-center">
            <div className="md:col-span-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-burgundy)]/80">
                Playground · Extras
              </p>
              <h3 className="mt-3 font-display text-3xl md:text-5xl text-[color:var(--color-burgundy)] leading-tight">
                Exploraciones gráficas, packaging,{" "}
                <span className="font-serif-italic">posters</span>.
              </h3>
              <p className="mt-4 max-w-xl text-sm md:text-base text-[color:var(--color-text)]/70 leading-relaxed">
                Un espacio para los experimentos visuales que no entran en una
                categoría, pero sí definen la mirada con la que observo cada
                proyecto.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="#contacto"
                className="btn-arrow inline-flex items-center gap-2 rounded-full border border-[color:var(--color-burgundy)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[color:var(--color-burgundy)] hover:bg-[color:var(--color-burgundy)] hover:text-[color:var(--color-cream)] transition-colors"
              >
                Solicitar acceso
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Project Row ---------------- */

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isRight = project.align === "right";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* IMAGE */}
        <div
          className={`lg:col-span-7 ${
            isRight ? "lg:order-2" : ""
          } relative group`}
        >
          <div className="relative aspect-[16/11] rounded-[24px] overflow-hidden bg-[color:var(--color-cream-deep)]">
            <Image
              src={project.image}
              alt={`Mockup — ${project.title}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
            />
            <div className={`absolute inset-0 ${accentOverlay[project.accent]} mix-blend-multiply`} />
          </div>

          {/* Floating index chip */}
          <div className="absolute -top-5 left-6 bg-[color:var(--color-burgundy)] text-[color:var(--color-cream)] rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.28em]">
            {String(index + 1).padStart(2, "0")} / {String(3).padStart(2, "0")}
          </div>
        </div>

        {/* TEXT */}
        <div className={`lg:col-span-5 ${isRight ? "lg:order-1" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-burgundy)]/70">
              {project.year}
            </span>
            <span className="h-px w-6 bg-[color:var(--color-burgundy)]/30" />
            <div className="flex flex-wrap gap-1.5">
              {project.categorias.map((c) => (
                <span
                  key={c}
                  className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink)]/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <h3 className="font-display text-5xl md:text-6xl text-[color:var(--color-burgundy)] leading-[0.95]">
            {project.title}
          </h3>
          <p className="mt-3 font-serif-italic text-xl text-[color:var(--color-ink)]/80">
            {project.tagline}
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--color-text)]/80 max-w-md">
            {project.summary}
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-burgundy)]/70 mb-1.5">
                Reto
              </p>
              <p className="text-sm italic text-[color:var(--color-text)]/80 max-w-md">
                “{project.reto}”
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-burgundy)]/70 mb-2">
                Herramientas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.herramientas.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] rounded-full border border-[color:var(--color-border-strong)] px-2.5 py-1 text-[color:var(--color-ink)]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={`#${project.id}`}
            className="btn-arrow mt-10 inline-flex items-center gap-2 text-sm text-[color:var(--color-burgundy)] hover:text-[color:var(--color-burgundy-deep)] group"
          >
            <span className="link-underline">Ver case study</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
