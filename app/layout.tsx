import type { Metadata, Viewport } from "next";
import { Italiana, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "kadda · Karold Alvarado — Diseñadora UX/UI",
  description:
    "Portafolio de Karold Dayana Alvarado Antolinez. Diseñadora de interacción UX/UI. Convierto necesidades reales en experiencias con propósito.",
  keywords: [
    "Karold Alvarado",
    "kadda",
    "UX Designer",
    "UI Designer",
    "Diseño de Interacción",
    "UX Research",
    "Portafolio",
    "Bogotá",
    "Colombia",
  ],
  authors: [{ name: "Karold Alvarado" }],
  openGraph: {
    title: "kadda · Karold Alvarado",
    description:
      "Diseño de interacción con intención. Experiencias que conectan a las personas con lo que necesitan.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFE6D0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${italiana.variable} ${outfit.variable} ${cormorant.variable} bg-[color:var(--color-bg)]`}
    >
      <body className="antialiased font-sans bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
