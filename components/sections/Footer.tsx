"use client";

import { Linkedin, Github, Mail } from "lucide-react";

const footerLinks = [
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proyectos", href: "#proyectos-data" },
  { name: "Certificados", href: "#certificados" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miguelfernandopardomaldonado/",
    icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/miguel0277", icon: Github },
  { name: "Email", href: "mailto:miguelopardo@hotmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--color-text-secondary)]">
              &copy; 2025 Miguel Fernando Pardo Maldonado &middot; Bucaramanga,
              Colombia
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 flex items-center justify-center md:justify-start gap-1">
              Hecho con Next.js + Claude Code &#9889;
            </p>
          </div>

          {/* Center - Quick links */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right - Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent-light)] transition-all"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
