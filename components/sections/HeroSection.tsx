"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import { DotPattern } from "@/components/ui/DotPattern";

const roles = [
  "Ingeniero de Sistemas",
  "Analista de Datos",
  "Desarrollador Web",
  "Data & BI Specialist",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.slice(0, text.length - 1)
              : currentRole.slice(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Interactive dot pattern background */}
      <div className="absolute inset-0 pointer-events-auto">
        <DotPattern dotColor="#1e3a5f" dotSize={16} />
      </div>

      {/* Geometric decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[var(--color-accent-light)] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-primary)] text-sm font-medium mb-6"
            >
              <MapPin size={14} />
              Bucaramanga, Colombia
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-main)] leading-tight">
              Miguel Fernando
              <br />
              <span className="text-[var(--color-primary)]">
                Pardo Maldonado
              </span>
            </h1>

            {/* Typewriter */}
            <div className="mt-4 h-8">
              <span className="text-xl sm:text-2xl text-[var(--color-text-secondary)] font-medium">
                {text}
              </span>
              <span className="typewriter-cursor" />
            </div>

            {/* Description */}
            <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ingeniero de Sistemas en etapa de grado de la Universidad
              Industrial de Santander. Experiencia en Power BI, DAX, Power Apps
              y desarrollo web con Next.js. Transformo datos en decisiones
              estratégicas y construyo soluciones digitales con IA.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#proyectos-data"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-all hover:-translate-y-0.5"
              >
                Ver Proyectos
                <ArrowDown size={16} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text-main)] font-medium hover:bg-[var(--color-bg-alt)] transition-all hover:-translate-y-0.5"
              >
                Contactar
              </a>
            </div>
          </motion.div>

          {/* Right visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-md w-full"
          >
            <div className="relative aspect-square">
              {/* Abstract geometric visual */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-accent-light)] to-white border border-[var(--color-border)] overflow-hidden">
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={`${(i + 1) * 12.5}%`}
                      x2="100%"
                      y2={`${(i + 1) * 12.5}%`}
                      stroke="var(--color-primary)"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={`${(i + 1) * 12.5}%`}
                      y1="0"
                      x2={`${(i + 1) * 12.5}%`}
                      y2="100%"
                      stroke="var(--color-primary)"
                      strokeWidth="0.5"
                    />
                  ))}
                </svg>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-1/4 w-20 h-20 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center"
                >
                  <span className="text-2xl font-mono font-bold text-[var(--color-primary)]">&lt;/&gt;</span>
                </motion.div>

                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 right-1/4 w-16 h-16 rounded-lg bg-[#F2C811]/15 border border-[#F2C811]/30 flex items-center justify-center"
                >
                  <span className="text-xl font-mono font-bold text-[#92400E]">BI</span>
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 10, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-1/4 left-1/3 w-24 h-14 rounded-lg bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15 flex items-center justify-center"
                >
                  <span className="text-sm font-mono text-[var(--color-primary)]">SELECT *</span>
                </motion.div>

                {/* Decorative circles */}
                <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[var(--color-success)]" />
                <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                <div className="absolute top-1/3 right-8 w-2 h-2 rounded-full bg-[#F2C811]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
