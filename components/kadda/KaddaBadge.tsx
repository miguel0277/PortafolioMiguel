"use client";

/**
 * KaddaBadge — insignia estilo "mini carta" de marca.
 * Se inspira en el recurso SVG de cartas: marco rectangular redondeado con
 * remates ornamentales en las esquinas y un glifo central minimalista.
 *
 * Variantes de glifo:
 *  - academy   → rombo sobre base (título académico)
 *  - award     → estrella de 4 puntas (certificación)
 *  - research  → ojo con pupila (UX Research)
 *  - writing   → pluma estilizada (UX Writing)
 *  - interface → ventana + cursor (UI / interacción)
 *  - language  → esfera con meridiano (idiomas)
 */

export type BadgeGlyph =
  | "academy"
  | "award"
  | "research"
  | "writing"
  | "interface"
  | "language";

export type BadgeTone =
  | "burgundy"
  | "burgundyDeep"
  | "ink"
  | "slate"
  | "cream";

const TONES: Record<
  BadgeTone,
  { bg: string; stroke: string; fg: string; ring: string }
> = {
  burgundy: {
    bg: "var(--color-burgundy)",
    stroke: "var(--color-cream)",
    fg: "var(--color-cream)",
    ring: "var(--color-cream-soft)",
  },
  burgundyDeep: {
    bg: "var(--color-burgundy-deep)",
    stroke: "var(--color-cream)",
    fg: "var(--color-cream)",
    ring: "var(--color-cream-soft)",
  },
  ink: {
    bg: "var(--color-ink)",
    stroke: "var(--color-cream)",
    fg: "var(--color-cream)",
    ring: "var(--color-slate-soft)",
  },
  slate: {
    bg: "var(--color-slate)",
    stroke: "var(--color-cream)",
    fg: "var(--color-cream)",
    ring: "var(--color-cream-soft)",
  },
  cream: {
    bg: "var(--color-cream)",
    stroke: "var(--color-burgundy)",
    fg: "var(--color-burgundy)",
    ring: "var(--color-burgundy)",
  },
};

function Glyph({ kind }: { kind: BadgeGlyph }) {
  // All glyphs are drawn in a 64x64 coordinate system, centered.
  switch (kind) {
    case "academy":
      return (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* diamond */}
          <path d="M32 20 L42 30 L32 40 L22 30 Z" />
          <path d="M32 24 L38 30 L32 36 L26 30 Z" opacity="0.55" />
          {/* base line */}
          <path d="M22 44 L42 44" />
          <path d="M26 47 L38 47" opacity="0.7" />
        </g>
      );
    case "award":
      return (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* 4-point star */}
          <path d="M32 18 C33 26 36 29 44 30 C36 31 33 34 32 42 C31 34 28 31 20 30 C28 29 31 26 32 18 Z" />
          {/* inner diamond */}
          <path d="M32 27 L35 30 L32 33 L29 30 Z" opacity="0.65" />
          {/* ribbon */}
          <path d="M26 44 L32 40 L38 44" opacity="0.7" />
        </g>
      );
    case "research":
      return (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* eye */}
          <path d="M16 32 C22 22 42 22 48 32 C42 42 22 42 16 32 Z" />
          <circle cx="32" cy="32" r="5" />
          <circle cx="32" cy="32" r="1.6" fill="currentColor" stroke="none" />
          {/* small rays */}
          <path d="M32 16 L32 19" opacity="0.7" />
          <path d="M32 45 L32 48" opacity="0.7" />
        </g>
      );
    case "writing":
      return (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* feather */}
          <path d="M22 44 L40 26 C43 23 45 21 47 21 C47 23 45 25 42 28 L24 46 Z" />
          <path d="M28 40 L38 30" opacity="0.7" />
          <path d="M26 43 L34 35" opacity="0.5" />
          {/* base line / punctuation */}
          <path d="M18 48 L32 48" />
          <circle cx="38" cy="48" r="1.2" fill="currentColor" stroke="none" />
        </g>
      );
    case "interface":
      return (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* window frame */}
          <rect x="18" y="20" width="28" height="20" rx="2" />
          <path d="M18 26 L46 26" />
          <circle cx="22" cy="23" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="25" cy="23" r="0.9" fill="currentColor" stroke="none" />
          {/* cursor */}
          <path d="M32 32 L40 40 L36 40 L38 44 L36 45 L34 41 L32 44 Z" />
        </g>
      );
    case "language":
      return (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* globe */}
          <circle cx="32" cy="32" r="13" />
          <ellipse cx="32" cy="32" rx="5.5" ry="13" />
          <path d="M19 32 L45 32" />
          <path d="M22 24 C28 27 36 27 42 24" opacity="0.7" />
          <path d="M22 40 C28 37 36 37 42 40" opacity="0.7" />
        </g>
      );
  }
}

export function KaddaBadge({
  glyph,
  tone = "burgundy",
  size = 56,
  className = "",
}: {
  glyph: BadgeGlyph;
  tone?: BadgeTone;
  size?: number;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-hidden="true"
      style={{ color: t.fg }}
    >
      {/* filled card */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="10"
        fill={t.bg}
        stroke={t.stroke}
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      {/* inner hairline frame */}
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="7"
        fill="none"
        stroke={t.stroke}
        strokeOpacity="0.45"
        strokeWidth="0.6"
      />

      {/* corner ornaments — inspired by kadda card motif */}
      <g
        stroke={t.stroke}
        strokeOpacity="0.85"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      >
        {/* top-left */}
        <path d="M9 11 L9 15 M9 11 L13 11" />
        <circle cx="9" cy="11" r="0.8" fill={t.stroke} fillOpacity="0.85" stroke="none" />
        {/* top-right */}
        <path d="M55 11 L55 15 M55 11 L51 11" />
        <circle cx="55" cy="11" r="0.8" fill={t.stroke} fillOpacity="0.85" stroke="none" />
        {/* bottom-left */}
        <path d="M9 53 L9 49 M9 53 L13 53" />
        <circle cx="9" cy="53" r="0.8" fill={t.stroke} fillOpacity="0.85" stroke="none" />
        {/* bottom-right */}
        <path d="M55 53 L55 49 M55 53 L51 53" />
        <circle cx="55" cy="53" r="0.8" fill={t.stroke} fillOpacity="0.85" stroke="none" />
      </g>

      {/* tiny serif marks at top & bottom — evokes the card header bar */}
      <g stroke={t.stroke} strokeOpacity="0.55" strokeWidth="0.6" strokeLinecap="round">
        <path d="M28 10 L36 10" />
        <path d="M28 54 L36 54" />
      </g>

      {/* central glyph */}
      <Glyph kind={glyph} />
    </svg>
  );
}
