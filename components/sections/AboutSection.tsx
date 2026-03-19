"use client";

import { motion } from "framer-motion";
import {
  Users,
  Brain,
  MessageSquare,
  Target,
  Lightbulb,
  Handshake,
  FolderKanban,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import { softSkills, technicalSkills } from "@/lib/data/skills";

const softSkillIcons: Record<string, React.ElementType> = {
  Liderazgo: Users,
  "Gestión del Conocimiento": Brain,
  "Pensamiento Analítico": Lightbulb,
  "Comunicación Efectiva": MessageSquare,
  "Trabajo en Equipo": Handshake,
  "Resolución de Problemas": Target,
  "Gestión de Proyectos": FolderKanban,
  "Dirección Empresarial": TrendingUp,
};

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Quién Soy Profesionalmente"
          subtitle="Ingeniero de Sistemas e Informática con pasión por los datos y el desarrollo web"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Ingeniero de Sistemas e Informática en etapa de grado de la
              Universidad Industrial de Santander (UIS) en Bucaramanga, Colombia.
              Con experiencia comprobada en análisis de datos, Business Intelligence
              y automatización de procesos en entornos de alta exigencia como
              Ecopetrol.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Me especializo en Power BI (DAX y M), Python para análisis de datos,
              bases de datos SQL y NoSQL, y desarrollo de aplicaciones con Power Apps
              y Power Automate. Tengo un interés particular en la aplicación de IA
              en contextos empresariales y en la transformación digital de procesos
              mediante metodologías ágiles (SCRUM).
            </p>

            {/* Soft Skills */}
            <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-4">
              Habilidades Blandas
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => {
                const Icon = softSkillIcons[skill.name];
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-primary)] text-sm font-medium"
                  >
                    {Icon && <Icon size={14} />}
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-6">
              Skills Técnicos
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((category) => (
                <div key={category.category}>
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-2.5 uppercase tracking-wide">
                    {category.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <TechBadge
                        key={skill.name}
                        name={skill.name}
                        color={skill.color}
                        size="md"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
