import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MP · Miguel Pardo | Ingeniero de Sistemas & Analista de Datos",
  description:
    "Portafolio profesional de Miguel Fernando Pardo Maldonado. Ingeniero de Sistemas e Informática, Analista de Datos, Desarrollador Web. Especialista en Power BI, DAX, Next.js y React.",
  keywords: [
    "Miguel Pardo",
    "Ingeniero de Sistemas",
    "Analista de Datos",
    "Power BI",
    "Next.js",
    "React",
    "Bucaramanga",
    "Colombia",
  ],
  openGraph: {
    title: "MP · Miguel Pardo",
    description:
      "Ingeniero de Sistemas e Informática · Analista de Datos · Desarrollador Web",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
