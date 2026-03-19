"use client";

import { motion } from "framer-motion";
import { BarChart2, Code2, Sparkles, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: BarChart2,
    title: "Analítica de Datos & BI",
    description:
      "Diseño y desarrollo de dashboards ejecutivos en Power BI, análisis de datos con DAX y Power Query, reportes gerenciales e indicadores clave de negocio para la toma de decisiones estratégicas.",
    highlights: ["Power BI", "DAX", "Power Query", "Excel Avanzado"],
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Creación de aplicaciones web modernas y responsivas con Next.js y React. Diseño con Tailwind CSS y shadcn/ui para interfaces elegantes, rápidas y con excelente experiencia de usuario.",
    highlights: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: Sparkles,
    title: "Consultoría & IA",
    description:
      "Implementación de flujos inteligentes con IA, automatización de procesos con Power Automate y Power Apps, e integración de herramientas como Claude para optimizar la productividad.",
    highlights: ["Claude AI", "Power Automate", "Power Apps", "Prompt Engineering"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="¿En qué puedo ayudarte?"
          subtitle="Servicios profesionales adaptados a tus necesidades"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-xl border border-[var(--color-border)] p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <service.icon
                  size={24}
                  className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {service.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2 py-0.5 rounded-md bg-[var(--color-bg-alt)] text-xs font-medium text-[var(--color-text-secondary)]"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors group/link"
              >
                Conversemos
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
