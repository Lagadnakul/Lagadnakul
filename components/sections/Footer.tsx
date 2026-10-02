import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border bg-band">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row md:px-8">
        <p className="font-mono text-xs text-faint">
          {profile.name} · © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-faint transition-colors hover:text-accent-deep"
          >
            <GithubLogo size={17} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-faint transition-colors hover:text-accent-deep"
          >
            <LinkedinLogo size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
