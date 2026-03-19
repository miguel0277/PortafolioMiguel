"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proyectos", href: "#proyectos-data" },
  { name: "Certificados", href: "#certificados" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight text-[var(--color-primary)]"
          >
            MP
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--color-text-main)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú de navegación"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-[var(--color-border)]"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium w-full justify-center"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
