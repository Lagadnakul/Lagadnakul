import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border">
      <DotPattern className="text-ink/[0.07] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center md:px-8 md:py-32">
        <BlurFade>
          <h2 className="mx-auto max-w-[20ch] font-display text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Let&apos;s build something.
          </h2>
        </BlurFade>

        <BlurFade delay={0.08}>
          <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-relaxed text-muted">
            Open to internships, research collaboration and freelance work. The fastest
            way to reach me is email.
          </p>
        </BlurFade>

        <BlurFade delay={0.16}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-6 pr-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1f1f1f] active:scale-[0.98]"
          >
            {profile.email}
            <span className="flex size-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-200 group-hover:translate-x-px">
              <EnvelopeSimple size={14} />
            </span>
          </a>
        </BlurFade>

        <BlurFade delay={0.2}>
          <dl className="mx-auto mt-10 grid max-w-xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[
              { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
              { k: "Phone", v: profile.phone, href: `tel:${profile.phoneHref}` },
              { k: "Location", v: profile.location, href: null },
            ].map((row) => (
              <div key={row.k} className="bg-surface px-4 py-4">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">
                  {row.k}
                </dt>
                <dd className="mt-1 text-[13px] text-ink">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="transition-colors hover:text-accent-deep"
                    >
                      {row.v}
                    </a>
                  ) : (
                    row.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </BlurFade>

        <BlurFade delay={0.28}>
          <div className="mt-9 flex items-center justify-center gap-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent-deep"
            >
              <GithubLogo size={20} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent-deep"
            >
              <LinkedinLogo size={20} />
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
