"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data/experience";

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="experiencia" className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experiencia Profesional"
          subtitle="Mi trayectoria profesional y las empresas donde he contribuido"
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-start pt-10 md:pt-16 md:gap-10"
            >
              {/* Left: sticky label */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-[var(--color-accent-light)] border-2 border-[var(--color-primary)] flex items-center justify-center">
                    <Briefcase size={10} className="text-[var(--color-primary)]" />
                  </div>
                </div>
                <div className="hidden md:block md:pl-20">
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">
                    {exp.startDate}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {exp.endDate}
                  </p>
                </div>
              </div>

              {/* Right: content card */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-lg mb-1 text-left font-bold text-[var(--color-primary)]">
                  {exp.startDate} — {exp.endDate}
                </h3>

                <div className="group bg-[var(--color-bg-alt)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg hover:shadow-[var(--color-primary)]/8 transition-all duration-300">
                  {/* Header with logo */}
                  <div className="flex items-center gap-4 p-5 pb-4 border-b border-[var(--color-border)]/60">
                    {exp.logo ? (
                      <div
                        className="shrink-0 w-14 h-14 rounded-xl border border-[var(--color-border)] flex items-center justify-center overflow-hidden p-1.5 bg-white group-hover:shadow-md transition-shadow"
                      >
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="shrink-0 w-14 h-14 rounded-xl bg-[var(--color-accent-light)] border border-[var(--color-border)] flex items-center justify-center">
                        <Briefcase size={22} className="text-[var(--color-primary)]" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-[var(--color-text-main)] leading-snug">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-[var(--color-text-secondary)] truncate">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 md:hidden">
                        <Calendar size={12} className="text-[var(--color-primary)]" />
                        <span className="text-xs font-medium text-[var(--color-primary)]">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-5 pt-4">
                    <ul className="space-y-2.5">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Animated timeline line */}
          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary-light)] to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
