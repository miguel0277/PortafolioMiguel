"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
      id={id}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-main)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-[var(--color-primary)]" />
    </motion.div>
  );
}
