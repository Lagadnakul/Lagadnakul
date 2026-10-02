import { cn } from "@/lib/utils";

/**
 * Static SVG dot grid. No animation, so it stays a Server Component and costs
 * nothing at runtime.
 */
export function DotPattern({
  size = 18,
  radius = 1,
  className,
}: {
  size?: number;
  radius?: number;
  className?: string;
}) {
  const id = `dots-${size}-${radius}`;

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
    >
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <circle cx={radius} cy={radius} r={radius} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
