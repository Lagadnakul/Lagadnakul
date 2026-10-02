import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

/** Only facts that can be checked against the repos or the thesis. */
const STATS = ["6 projects shipped", "433 tests written", "M.Tech researcher"];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-band">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading title="About" />

        <div className="mt-10 grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-12">
          {/* w-fit stops the frame stretching to the grid column, which left a
              white gap beside the portrait at mobile widths. */}
          <BlurFade className="mx-auto w-fit md:mx-0">
            <div className="rounded-2xl border border-border bg-surface p-1.5">
              <Image
                src={profile.avatarUrl}
                alt={`Portrait of ${profile.name}`}
                width={400}
                height={400}
                priority
                unoptimized
                className="size-44 rounded-xl object-cover sm:size-48"
              />
            </div>
          </BlurFade>

          <div>
            <BlurFade delay={0.08}>
              <div className="space-y-4 text-[15px] leading-relaxed text-muted">
                <p>
                  I am a full stack developer from Vadodara, currently doing an M.Tech in
                  AI and Data Science at Parul University. Before that I spent four months
                  at Mamo Technolabs writing production React and Node, which is where I
                  learned the difference between code that works and code that holds up.
                </p>
                <p>
                  Most of what I build is MERN. Real time comment trees, booking
                  platforms, campus APIs. The projects below are the ones where something
                  was genuinely difficult, not the ones with the longest feature lists.
                </p>
                <p className="text-ink">
                  My dissertation measures whether an AI coding agent can diagnose its own
                  bad patch, rather than whether a retry happens to work.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.16}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {STATS.map((stat) => (
                  <li
                    key={stat}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-muted"
                  >
                    {stat}
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
