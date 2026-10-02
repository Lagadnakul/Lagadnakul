"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/** One line of terminal output. `delay` is milliseconds after the line before it. */
export type TerminalLine = {
  text: string;
  kind: "command" | "ok" | "muted" | "plain";
  delay?: number;
};

const KIND_CLASS: Record<TerminalLine["kind"], string> = {
  command: "text-[#fafafa]",
  ok: "text-accent",
  muted: "text-[#888888]",
  plain: "text-[#d4d4d4]",
};

function Line({ line }: { line: TerminalLine }) {
  return (
    <p className={cn("whitespace-pre-wrap break-words", KIND_CLASS[line.kind])}>
      {line.kind === "command" && <span className="text-accent">{"> "}</span>}
      {line.text}
    </p>
  );
}

/**
 * macOS-style terminal that types its lines out once it scrolls into view.
 * Under reduced motion every line renders immediately.
 */
export function Terminal({
  lines,
  className,
}: {
  lines: TerminalLine[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (reduced) {
      setShown(lines.length);
      return;
    }
    if (!inView || shown >= lines.length) return;

    const wait = lines[shown]?.delay ?? 450;
    const timer = window.setTimeout(() => setShown((n) => n + 1), wait);
    return () => window.clearTimeout(timer);
  }, [inView, shown, lines, reduced]);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-chip",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>

      <div className="space-y-1 p-4 font-mono text-[12px] leading-relaxed md:p-5 md:text-[13px]">
        {lines.slice(0, shown).map((line, i) => (
          <motion.div
            key={i}
            initial={reduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Line line={line} />
          </motion.div>
        ))}

        {shown < lines.length && (
          <span
            aria-hidden="true"
            className="inline-block h-3.5 w-2 translate-y-0.5 bg-accent"
            style={{ animation: "caret 1s step-end infinite" }}
          />
        )}
      </div>
    </div>
  );
}

export function TerminalShell({ children }: { children: ReactNode }) {
  return <div className="font-mono text-[13px]">{children}</div>;
}
