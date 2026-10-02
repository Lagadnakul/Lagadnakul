"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Diagonal streaks drifting across a container. Positions are generated on the
 * client after mount so server and client markup match.
 */
export function Meteors({
  number = 14,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [styles, setStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    setStyles(
      Array.from({ length: number }, () => ({
        top: "-10%",
        left: `${Math.floor(Math.random() * 110)}%`,
        animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
        ["--duration" as string]: `${(Math.random() * 6 + 4).toFixed(2)}s`,
        ["--angle" as string]: "215deg",
      })),
    );
  }, [number]);

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {styles.map((style, i) => (
        <span
          key={i}
          style={style}
          className="animate-meteor absolute size-0.5 rounded-full bg-accent/60 before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-accent/50 before:to-transparent before:content-['']"
        />
      ))}
    </div>
  );
}
