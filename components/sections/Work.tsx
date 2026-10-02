import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { DotPattern } from "@/components/ui/dot-pattern";
import { projects, type Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/**
 * Bento cell. There are no screenshots, so the visual anchor is the project's
 * signal: one real metric set in large mono over a dot field.
 */
function Cell({ project, delay }: { project: Project; delay: number }) {
  const href = project.live ?? project.repo;

  return (
    <BlurFade delay={delay} className={cn("min-w-0", project.span)}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-[1] rounded-2xl"
          aria-label={
            project.live
              ? `${project.name}, opens live site`
              : `${project.name}, opens repository`
          }
        />

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors duration-200 hover:text-accent-deep"
        >
          <GithubLogo size={15} />
        </a>

        {/* Signal block, standing in for a screenshot. */}
        <div className="relative mb-6 overflow-hidden rounded-xl border border-border bg-band px-5 py-7">
          <DotPattern className="text-accent/15" />
          <div className="relative">
            <p className="font-display text-4xl font-semibold tracking-[-0.03em] text-accent-deep md:text-5xl">
              {project.signal.value}
            </p>
            <p className="mt-1.5 font-mono text-[11px] text-muted">
              {project.signal.label}
            </p>
          </div>
        </div>

        <h3 className="text-base font-semibold tracking-[-0.01em]">{project.name}</h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.detail}</p>

        <p className="mt-auto pt-5 font-mono text-[11px] text-faint">
          {project.stack.join("  ")}
        </p>
      </div>
    </BlurFade>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          title="Selected work"
          action={
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-accent-deep"
            >
              All repositories
              <ArrowUpRight
                size={12}
                className="transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px"
              />
            </a>
          }
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <Cell key={project.id} project={project} delay={0.06 * (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}
