"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Types each phrase out, holds, deletes, moves to the next. Under reduced
 * motion it renders the first phrase statically.
 */
export function TypingAnimation({
  phrases,
  typeSpeed = 55,
  deleteSpeed = 28,
  hold = 1900,
  className,
}: {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  hold?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = phrases[index] ?? "";

  useEffect(() => {
    if (reduced) return;

    // Finished typing: hold, then start deleting.
    if (!deleting && length === current.length) {
      const timer = window.setTimeout(() => setDeleting(true), hold);
      return () => window.clearTimeout(timer);
    }

    // Finished deleting: advance to the next phrase.
    if (deleting && length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timer = window.setTimeout(
      () => setLength((n) => n + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => window.clearTimeout(timer);
  }, [length, deleting, current, phrases.length, typeSpeed, deleteSpeed, hold, reduced]);

  if (reduced) {
    return <span className={className}>{phrases[0]}</span>;
  }

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      <span>{current.slice(0, length)}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.05em] bg-accent"
        style={{ animation: "caret 1s step-end infinite" }}
      />
    </span>
  );
}
