"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  BarChart3,
  PieChart,
  LayoutDashboard,
  Calculator,
  BrainCircuit,
  MessageSquareCode,
  Workflow,
  Cloud,
  Sparkles,
  GitBranch,
  Code2,
  Palette,
  Database,
  Leaf,
  Cylinder,
  Globe,
  Terminal,
  Monitor,
  Cpu,
  Filter,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PlatziLogo, MITLogo } from "@/components/ui/InstitutionLogos";
import { certificates } from "@/lib/data/certificates";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  BarChart3,
  PieChart,
  LayoutDashboard,
  Calculator,
  BrainCircuit,
  MessageSquareCode,
  Workflow,
  Cloud,
  Sparkles,
  GitBranch,
  Code2,
  Palette,
  Database,
  Leaf,
  Cylinder,
  Globe,
  Terminal,
  Monitor,
  Cpu,
};

export default function CertificatesSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const categories = useMemo(() => {
    const cats = [...new Set(certificates.map((c) => c.category))];
    return ["Todos", ...cats];
  }, []);

  const categoryColors = useMemo(() => {
    const map: Record<string, string> = {};
    certificates.forEach((c) => {
      map[c.category] = c.categoryColor;
    });
    return map;
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "Todos") return certificates;
    return certificates.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="certificados" className="py-20 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Formación & Certificados"
          subtitle="Aprendizaje continuo en las mejores plataformas educativas"
        />

        {/* Filter bar */}
        <div className="mb-8 flex flex-wrap items-center gap-2 justify-center">
          <Filter size={16} className="text-[var(--color-text-secondary)] mr-1" />
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            const color = cat === "Todos" ? "var(--color-primary)" : categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "text-white shadow-md scale-105"
                    : "bg-white text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: color,
                        borderColor: color,
                      }
                    : undefined
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Certificates grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Rocket;
              const isMIT = cert.institution.includes("MIT");

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl border border-[var(--color-border)] p-5 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--color-primary)]/8 transition-all duration-300 text-center flex flex-col items-center h-full">
                    {/* Medal / Badge Shape */}
                    <div className="relative mb-4">
                      {/* Ribbon tails */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                        <div
                          className="w-3 h-5 rounded-b-sm -rotate-12"
                          style={{ backgroundColor: `${cert.categoryColor}40` }}
                        />
                        <div
                          className="w-3 h-5 rounded-b-sm rotate-12"
                          style={{ backgroundColor: `${cert.categoryColor}40` }}
                        />
                      </div>

                      {/* Medal circle */}
                      <div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${cert.categoryColor}20, ${cert.categoryColor}08)`,
                          border: `2.5px solid ${cert.categoryColor}50`,
                          boxShadow: `0 0 0 4px ${cert.categoryColor}10, inset 0 2px 4px ${cert.categoryColor}10`,
                        }}
                      >
                        {/* Inner decorative ring */}
                        <div
                          className="absolute inset-1.5 rounded-full"
                          style={{
                            border: `1px dashed ${cert.categoryColor}30`,
                          }}
                        />
                        <Icon
                          size={28}
                          style={{ color: cert.categoryColor }}
                          className="relative z-10"
                        />
                      </div>

                      {/* Star accent on top */}
                      <div
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-[8px] font-bold"
                        style={{ backgroundColor: cert.categoryColor }}
                      >
                        ★
                      </div>
                    </div>

                    {/* Certificate name */}
                    <h3 className="text-sm font-bold text-[var(--color-text-main)] leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors min-h-[2.5rem] flex items-center">
                      {cert.name}
                    </h3>

                    {/* Category badge */}
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3"
                      style={{
                        backgroundColor: `${cert.categoryColor}12`,
                        color: cert.categoryColor,
                      }}
                    >
                      {cert.category}
                    </span>

                    {/* Bottom: Institution + Year */}
                    <div className="mt-auto pt-3 border-t border-[var(--color-border)] w-full flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {isMIT ? (
                          <MITLogo size={12} />
                        ) : (
                          <PlatziLogo size={16} />
                        )}
                        <span className="text-[11px] font-medium text-[var(--color-text-secondary)]">
                          {cert.institution}
                        </span>
                      </div>
                      <span className="text-[11px] text-[var(--color-text-secondary)]">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
