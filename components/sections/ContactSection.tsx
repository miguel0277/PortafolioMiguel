"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Linkedin,
  Github,
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miguelfernandopardomaldonado/",
    icon: Linkedin,
    label: "miguelfernandopardomaldonado",
  },
  {
    name: "Email",
    href: "mailto:miguelopardo@hotmail.com",
    icon: Mail,
    label: "miguelopardo@hotmail.com",
  },
  {
    name: "GitHub",
    href: "https://github.com/miguel0277",
    icon: Github,
    label: "miguel0277",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/573115030940",
    icon: MessageCircle,
    label: "+57 311-503-0940",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    // TODO: Integrar con Resend, Formspree o similar
    // Ejemplo con Formspree:
    // fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="py-20 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hablemos"
          subtitle="¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Estoy abierto a colaborar en proyectos de analítica de datos,
              desarrollo web y consultoría tecnológica. No dudes en contactarme
              por cualquiera de estos canales.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-[var(--color-border)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
                    <link.icon
                      size={18}
                      className="text-[var(--color-primary)] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-main)]">
                      {link.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      {link.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-xl border border-[var(--color-border)] p-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--color-text-main)] mb-1.5"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "El nombre es requerido" })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--color-text-main)] mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "El email es requerido",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email inválido",
                    },
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[var(--color-text-main)] mb-1.5"
                >
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", {
                    required: "El asunto es requerido",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                  placeholder="Asunto del mensaje"
                />
                {errors.subject && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--color-text-main)] mb-1.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", {
                    required: "El mensaje es requerido",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-all hover:-translate-y-0.5 disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={16} />
                    Mensaje enviado
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
