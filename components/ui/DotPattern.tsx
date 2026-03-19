"use client";

import { useEffect, useRef } from "react";

interface DotPatternProps {
  dotColor?: string;
  dotSize?: number;
  className?: string;
}

export function DotPattern({
  dotColor = "#1e3a5f",
  dotSize = 14,
  className = "",
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const CIRCLE_W = dotSize;
    const ACTUAL_W = CIRCLE_W * 0.5;
    const MIN_W = 0.8;
    const CIRCLE_DIST = CIRCLE_W;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / CIRCLE_DIST) + 1;
      const rows = Math.ceil(canvas.height / CIRCLE_DIST) + 1;
      const maxDist = 200;

      for (let ci = 0; ci < cols; ci++) {
        for (let ri = 0; ri < rows; ri++) {
          const x = ci * CIRCLE_DIST;
          const y = ri * CIRCLE_DIST;
          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let w = MIN_W;
          if (dist < maxDist) {
            w = ACTUAL_W - (dist / maxDist) * (ACTUAL_W - MIN_W);
          }

          const alpha = dist < maxDist ? 0.08 + (1 - dist / maxDist) * 0.25 : 0.08;

          ctx.fillStyle = dotColor;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(x, y, w / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [dotColor, dotSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ display: "block" }}
    />
  );
}
