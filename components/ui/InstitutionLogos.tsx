"use client";

export function PlatziLogo({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.063 0L1.004 5.61v12.136l4.233 2.372V7.98l5.826-3.262 5.826 3.262v6.525l-5.826 3.261-2.313-1.295v4.744L11.063 24l10.06-5.61V6.253L11.063 0z"
        fill="#98CA3F"
      />
    </svg>
  );
}

export function MITLogo({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 36 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill="#A31F34">
        {/* M */}
        <rect x="0" y="0" width="4" height="24" />
        <rect x="5" y="0" width="4" height="16" />
        <rect x="10" y="0" width="4" height="24" />
        {/* I */}
        <rect x="16" y="0" width="4" height="24" />
        {/* T */}
        <rect x="22" y="0" width="14" height="4" />
        <rect x="26" y="5" width="4" height="19" />
      </g>
    </svg>
  );
}
