"use client";

interface TechBadgeProps {
  name: string;
  color?: string;
  size?: "sm" | "md";
}

export default function TechBadge({ name, color = "#1e3a5f", size = "sm" }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors ${
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      }`}
      style={{
        borderColor: `${color}30`,
        backgroundColor: `${color}10`,
        color: color === "#F7DF1E" || color === "#F2C811" ? "#92400E" : color,
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {name}
    </span>
  );
}
