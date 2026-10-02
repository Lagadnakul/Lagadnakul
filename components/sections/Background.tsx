import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience, education } from "@/data/profile";

export function Background() {
  return (
    <section id="background" className="border-t border-border bg-band">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading title="Background" />

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
              Experience
            </p>
            <div className="mt-5 space-y-7">
              {experience.map((job, i) => (
                <BlurFade key={job.company} delay={i * 0.06}>
                  <h3 className="text-[15px] font-semibold">{job.role}</h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {job.company} · {job.location}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-faint">{job.period}</p>
                  <ul className="mt-3.5 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-accent"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </BlurFade>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
              Education
            </p>
            <div className="mt-5 space-y-3">
              {education.map((item, i) => (
                <BlurFade key={item.degree} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border bg-surface px-5 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold leading-snug">
                        {item.degree}
                      </h3>
                      {item.current && (
                        <span className="shrink-0 rounded-full bg-accent-wash px-2 py-0.5 font-mono text-[10px] text-accent-deep">
                          current
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-muted">{item.school}</p>
                    <p className="mt-1 font-mono text-[11px] text-faint">
                      {item.period} · {item.location}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
