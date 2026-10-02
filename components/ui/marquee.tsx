import { cn } from "@/lib/utils";

/**
 * Horizontal loop. The children are repeated so the track is wider than the
 * viewport and the translate wraps seamlessly.
 */
export function Marquee({
  children,
  repeat = 4,
  className,
}: {
  children: React.ReactNode;
  repeat?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex gap-12 overflow-hidden [--duration:40s] [--gap:3rem]",
        className,
      )}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className="animate-marquee flex shrink-0 items-center justify-around gap-12 group-hover:[animation-play-state:paused]"
        >
          {children}
        </div>
      ))}
    </div>
  );
}
