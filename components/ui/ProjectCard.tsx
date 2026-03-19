"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Container,
  Radar,
  ShieldCheck,
  Wrench,
  Lock,
  AppWindow,
  Rocket,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import TechBadge from "./TechBadge";

const iconMap: Record<string, LucideIcon> = {
  Crane: Container,
  Radar,
  ShieldCheck,
  Wrench,
  Vault: Lock,
  AppWindow,
  Rocket,
  BarChart3,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isComingSoon = project.status === "Próximamente";
  const Icon = iconMap[project.icon] || BarChart3;
  const hasImages = project.images && project.images.length > 0;
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (project.images) {
      setCurrentImage((prev) => (prev + 1) % project.images!.length);
    }
  };
  const prevImage = () => {
    if (project.images) {
      setCurrentImage((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group flex flex-col md:flex-row rounded-xl border border-[var(--color-border)] bg-white overflow-hidden transition-all duration-300 ${
        isComingSoon
          ? "opacity-60"
          : "hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
      }`}
    >
      {/* Image / Icon area */}
      <div className="md:w-2/5 h-48 md:h-auto bg-[var(--color-bg-alt)] flex items-center justify-center relative overflow-hidden">
        {isComingSoon ? (
          <div className="text-center text-[var(--color-text-secondary)]">
            <Rocket size={48} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium">Próximamente</p>
          </div>
        ) : hasImages ? (
          <div className="w-full h-full relative min-h-[200px]">
            <img
              src={project.images![currentImage]}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Navigation arrows (only if multiple images) */}
            {project.images!.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white cursor-pointer shadow-sm"
                >
                  <ChevronLeft size={16} className="text-[var(--color-text-main)]" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white cursor-pointer shadow-sm"
                >
                  <ChevronRight size={16} className="text-[var(--color-text-main)]" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images!.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setCurrentImage(i); }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        i === currentImage
                          ? "bg-white w-4"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent-light)] to-[var(--color-bg-alt)] flex items-center justify-center relative">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 6 }).map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={`${(i + 1) * 16.6}%`}
                    x2="100%"
                    y2={`${(i + 1) * 16.6}%`}
                    stroke="var(--color-primary)"
                    strokeWidth="1"
                  />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={`${(i + 1) * 16.6}%`}
                    y1="0"
                    x2={`${(i + 1) * 16.6}%`}
                    y2="100%"
                    stroke="var(--color-primary)"
                    strokeWidth="1"
                  />
                ))}
              </svg>
            </div>

            {/* Main icon */}
            <div className="relative flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-primary)]/12 transition-all duration-300">
                <Icon
                  size={36}
                  className="text-[var(--color-primary)]"
                  strokeWidth={1.5}
                />
              </div>

              {/* Small decorative dots */}
              <div className="flex gap-1.5">
                {project.techStack.slice(0, 4).map((tech, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="md:w-3/5 p-5 md:p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-bold text-[var(--color-text-main)]">
              {project.title}
            </h3>
            <span
              className="shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: project.statusColor }}
            >
              {project.status}
            </span>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div>
          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} color={tech.color} />
              ))}
            </div>
          )}

          {/* Links */}
          {!isComingSoon && (
            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
                >
                  <ExternalLink size={14} />
                  Ver demo
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
                >
                  <Github size={14} />
                  Ver código
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
