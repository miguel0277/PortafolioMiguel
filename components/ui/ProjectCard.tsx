"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Images,
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = () => {
    if (hasImages) {
      setCurrentImage(0);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = useCallback(() => {
    if (project.images) {
      setCurrentImage((prev) => (prev + 1) % project.images!.length);
    }
  }, [project.images]);

  const prevImage = useCallback(() => {
    if (project.images) {
      setCurrentImage((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  }, [project.images]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <>
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
        {/* Icon area — clickable when has images */}
        <div
          className={`md:w-2/5 h-48 md:h-auto bg-[var(--color-bg-alt)] flex items-center justify-center relative overflow-hidden ${
            hasImages && !isComingSoon ? "cursor-pointer" : ""
          }`}
          onClick={!isComingSoon ? openLightbox : undefined}
        >
          {isComingSoon ? (
            <div className="text-center text-[var(--color-text-secondary)]">
              <Rocket size={48} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">Próximamente</p>
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
                <div className={`w-20 h-20 rounded-2xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-primary)]/12 transition-all duration-300`}>
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

              {/* Gallery hint badge */}
              {hasImages && (
                <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-md bg-white/80 backdrop-blur-sm text-[10px] font-medium text-[var(--color-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                  <Images size={12} />
                  {project.images!.length > 1
                    ? `${project.images!.length} fotos`
                    : "Ver imagen"}
                </div>
              )}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && hasImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Title */}
            <div className="absolute top-4 left-4 z-10">
              <h3 className="text-white font-semibold text-lg">{project.title}</h3>
              {project.images!.length > 1 && (
                <p className="text-white/60 text-sm">
                  {currentImage + 1} / {project.images!.length}
                </p>
              )}
            </div>

            {/* Image */}
            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={project.images![currentImage]}
              alt={`${project.title} - ${currentImage + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation arrows */}
            {project.images!.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft size={22} className="text-white" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={22} className="text-white" />
                </button>

                {/* Thumbnail strip */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.images!.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-16 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                        i === currentImage
                          ? "border-white scale-110 shadow-lg"
                          : "border-white/30 opacity-60 hover:opacity-90 hover:border-white/60"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
