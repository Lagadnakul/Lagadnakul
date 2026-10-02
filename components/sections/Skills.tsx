/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { skills, logos } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading title="Tools I work with" />

        <div className="mt-10 space-y-6">
          {skills.map((group, i) => (
            <BlurFade key={group.label} delay={i * 0.06}>
              <div className="grid gap-3 md:grid-cols-[120px_1fr] md:gap-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint md:pt-2">
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.2}>
          <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <Marquee>
              {logos.map((logo) => (
                <img
                  key={logo.slug}
                  src={`https://cdn.simpleicons.org/${logo.slug}`}
                  alt={logo.name}
                  width={28}
                  height={28}
                  loading="lazy"
                  className="size-7 shrink-0"
                />
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
