"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { dataProjects } from "@/lib/data/projects";

export default function DataProjectsSection() {
  return (
    <section id="proyectos-data" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Proyectos de Analítica & Business Intelligence"
          subtitle="Dashboards ejecutivos y soluciones de datos que transforman información en decisiones"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {dataProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
