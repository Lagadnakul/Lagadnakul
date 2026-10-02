"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type FlickeringGridProps = {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  className?: string;
};

/**
 * Grid of squares whose opacity drifts at random. Adapted from magicui's
 * flickering-grid, sized from the element rather than fixed width/height props
 * so it can sit behind a responsive section.
 */
export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.1,
  color = "#0d9488",
  maxOpacity = 0.12,
  className,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const step = squareSize + gridGap;
    let cols = 0;
    let rows = 0;
    let squares = new Float32Array(0);
    let frame: number | undefined;
    let last = 0;

    // Resolve the colour once, through the canvas, so any CSS colour format works.
    const rgb = (() => {
      ctx.fillStyle = color;
      const resolved = ctx.fillStyle as string;
      if (resolved.startsWith("#")) {
        const hex = resolved.slice(1);
        const full =
          hex.length === 3
            ? hex
                .split("")
                .map((c) => c + c)
                .join("")
            : hex;
        const n = parseInt(full, 16);
        return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
      }
      return resolved.replace(/^rgba?\(|\)$/g, "").split(",").slice(0, 3).join(",");
    })();

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(rect.width / step);
      rows = Math.ceil(rect.height / step);
      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * maxOpacity;

      draw(rect.width, rect.height);
    };

    const draw = (width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const opacity = squares[col * rows + row];
          if (opacity < 0.005) continue;
          ctx.fillStyle = `rgba(${rgb}, ${opacity})`;
          ctx.fillRect(col * step, row * step, squareSize, squareSize);
        }
      }
    };

    const animate = (time: number) => {
      const delta = (time - last) / 1000;
      last = time;

      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * delta) {
          squares[i] = Math.random() * maxOpacity;
        }
      }

      const rect = canvas.getBoundingClientRect();
      draw(rect.width, rect.height);
      frame = window.requestAnimationFrame(animate);
    };

    build();
    if (!reduced) {
      last = performance.now();
      frame = window.requestAnimationFrame(animate);
    }

    const observer = new ResizeObserver(build);
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, [squareSize, gridGap, flickerChance, color, maxOpacity, reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none size-full", className)}
    />
  );
}
