import Link from "next/link";
import { ArrowDown, ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BlurFade } from "@/components/ui/blur-fade";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_45%,black,transparent)]"
      >
        <FlickeringGrid maxOpacity={0.14} flickerChance={0.14} />
      </div>

      <div className="mx-auto w-full max-w-3xl text-center">
        <BlurFade>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            {profile.status}
          </p>
        </BlurFade>

        <BlurFade delay={0.08}>
          <h1 className="mt-8 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>
        </BlurFade>

        <BlurFade delay={0.16}>
          <p className="mt-5 flex min-h-[2.2em] items-center justify-center font-mono text-base text-muted sm:text-lg">
            <TypingAnimation
              phrases={[
                "I build web systems.",
                "I study how they fail.",
                "React · Node · MongoDB",
                "Agentic AI research.",
              ]}
            />
          </p>
        </BlurFade>

        <BlurFade delay={0.24}>
          <p className="mx-auto mt-6 max-w-[52ch] text-[15px] leading-relaxed text-muted">
            Full stack developer and M.Tech researcher in Vadodara. I ship MERN
            applications, and my dissertation asks a narrower question: what does an AI
            coding agent do after it gets something wrong?
          </p>
        </BlurFade>

        <BlurFade delay={0.32}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-ink py-2.5 pl-6 pr-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1f1f1f] active:scale-[0.98]"
            >
              See the work
              <span className="flex size-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-200 group-hover:translate-y-px">
                <ArrowDown size={14} />
              </span>
            </Link>
            <Link
              href="#research"
              className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent-deep active:scale-[0.98]"
            >
              Read the research
              <ArrowUpRight size={14} />
            </Link>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent-deep active:scale-[0.98]"
            >
              Resume
              <DownloadSimple size={14} />
            </a>
          </div>
        </BlurFade>
      </div>

      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 md:bottom-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
          scroll
        </span>
      </div>
    </section>
  );
}
