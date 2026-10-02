import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { Terminal, type TerminalLine } from "@/components/ui/terminal";
import { Meteors } from "@/components/ui/meteors";
import { research } from "@/data/research";

/** Mirrors what the benchmark actually prints. No invented output. */
const LINES: TerminalLine[] = [
  { text: "bun run bench --seed-failures", kind: "command", delay: 300 },
  { text: "resolving workspace @rb/core @rb/pipeline", kind: "muted", delay: 500 },
  { text: "seeding 7 controlled failures", kind: "muted", delay: 450 },
  { text: "", kind: "plain", delay: 200 },
  { text: "baseline retry        0 / 4   no recovery", kind: "plain", delay: 600 },
  { text: "self-reflection       3 / 3   recovered", kind: "ok", delay: 600 },
  { text: "", kind: "plain", delay: 200 },
  { text: "433 tests passed", kind: "ok", delay: 500 },
];

export function Research() {
  return (
    <section id="research" className="border-t border-border bg-band">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading title="Research" />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <BlurFade>
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent-deep">
                {research.degree} · {research.year}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-[-0.03em] md:text-3xl">
                {research.question}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {research.abstract}
              </p>
            </BlurFade>

            <BlurFade delay={0.1}>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {research.findings.map((finding) => (
                  <div
                    key={finding.label}
                    className="rounded-xl border border-border bg-surface px-4 py-3.5"
                  >
                    <p className="font-display text-2xl font-semibold text-accent-deep">
                      {finding.value}
                    </p>
                    <p className="mt-1 text-sm font-medium">{finding.label}</p>
                    <p className="mt-0.5 text-xs text-muted">{finding.detail}</p>
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.16}>
              <div className="mt-7 divide-y divide-border border-y border-border">
                {research.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-3 transition-colors hover:text-accent-deep"
                  >
                    <span className="text-sm font-medium">{link.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-faint transition-all duration-200 group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-accent-deep"
                    />
                  </a>
                ))}
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.12}>
            <div className="relative">
              <Meteors number={10} />
              <Terminal lines={LINES} className="relative" />
              <p className="mt-3 text-center font-mono text-[11px] text-faint">
                {research.title}
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
