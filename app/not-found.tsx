import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-5 px-5 text-center">
      <p className="font-mono text-xs text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-[-0.025em]">
        This page does not exist.
      </h1>
      <Link
        href="/"
        className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1b2a26]"
      >
        Back home
      </Link>
    </main>
  );
}
