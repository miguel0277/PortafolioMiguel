"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { KaddaOrnament } from "./KaddaLogo";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "karold.antolinez@outlook.com",
    href: "mailto:karold.antolinez@outlook.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 321 987 4090",
    href: "tel:+573219874090",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "karoldalvaradoantolinez",
    href: "https://www.linkedin.com/in/karoldalvaradoantolinez/",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Bogotá, Colombia",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 bg-[color:var(--color-burgundy)] text-[color:var(--color-cream)] overflow-hidden isolate"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 grain" aria-hidden="true" />

      {/* Decorative ornaments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-24 w-[420px] text-[color:var(--color-cream)]/[0.06]"
      >
        <KaddaOrnament className="animate-orbit" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 w-[340px] text-[color:var(--color-cream)]/[0.05]"
      >
        <KaddaOrnament className="animate-orbit-rev" />
      </div>

      <div className="container-kadda relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — Statement */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-[color:var(--color-cream)]/40" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-cream)]/70">
                Contacto · 04
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-[color:var(--color-cream)]"
            >
              Hagamos algo{" "}
              <span className="font-serif-italic text-[color:var(--color-cream)]/80">
                pensado.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-lg text-base md:text-lg leading-relaxed text-[color:var(--color-cream)]/80"
            >
              Abierta a roles de UX/UI junior, prácticas profesionales y
              colaboraciones con startups tech o corporativos que busquen
              diseño con criterio.
            </motion.p>

            <motion.a
              href="mailto:karold.antolinez@outlook.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="btn-arrow mt-12 inline-flex items-center gap-3 rounded-full bg-[color:var(--color-cream)] px-8 py-4 text-xs uppercase tracking-[0.24em] text-[color:var(--color-burgundy)] hover:bg-[color:var(--color-cream-deep)] transition-colors"
            >
              Escribir un mensaje
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </motion.a>
          </div>

          {/* RIGHT — Channels */}
          <div className="lg:col-span-5 lg:pt-6">
            <ul className="divide-y divide-[color:var(--color-cream)]/15 border-y border-[color:var(--color-cream)]/15">
              {CHANNELS.map((c, i) => {
                const Icon = c.icon;
                const content = (
                  <>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-cream)]/25 group-hover:bg-[color:var(--color-cream)] group-hover:text-[color:var(--color-burgundy)] transition-colors">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-cream)]/50">
                          {c.label}
                        </p>
                        <p className="mt-0.5 text-base truncate text-[color:var(--color-cream)] group-hover:text-[color:var(--color-cream-deep)] transition-colors">
                          {c.value}
                        </p>
                      </div>
                    </div>
                    {c.href && (
                      <ArrowUpRight
                        className="h-4 w-4 text-[color:var(--color-cream)]/60 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[color:var(--color-cream)]"
                        strokeWidth={1.5}
                      />
                    )}
                  </>
                );

                return (
                  <motion.li
                    key={c.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                  >
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between py-5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center justify-between py-5">
                        {content}
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
