import { BlurFade } from "@/components/ui/blur-fade";

export function SectionHeading({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <BlurFade>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          {title}
        </h2>
        {action}
      </div>
    </BlurFade>
  );
}
