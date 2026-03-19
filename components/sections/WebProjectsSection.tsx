"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { webProjects } from "@/lib/data/projects";

export default function WebProjectsSection() {
  return (
    <section id="proyectos-web" className="py-20 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Proyectos de Diseño & Desarrollo Web"
          subtitle="Aplicaciones web modernas construidas con las mejores tecnologías"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {webProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
