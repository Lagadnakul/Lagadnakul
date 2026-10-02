"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  House,
  User,
  SquaresFour,
  Flask,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  DotsThree,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { profile } from "@/data/profile";

type Item = {
  title: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
};

const SECTION_IDS = ["top", "about", "work", "research", "contact"];

const navGroup: Item[] = [
  { title: "Home", icon: <House className="size-full" />, href: "#top" },
  { title: "About", icon: <User className="size-full" />, href: "#about" },
  { title: "Work", icon: <SquaresFour className="size-full" />, href: "#work" },
  { title: "Research", icon: <Flask className="size-full" />, href: "#research" },
  { title: "Contact", icon: <EnvelopeSimple className="size-full" />, href: "#contact" },
];

const socialGroup: Item[] = [
  {
    title: "GitHub",
    icon: <GithubLogo className="size-full" />,
    href: profile.links.github,
    external: true,
  },
  {
    title: "LinkedIn",
    icon: <LinkedinLogo className="size-full" />,
    href: profile.links.linkedin,
    external: true,
  },
];

const groups = [navGroup, socialGroup];

function DockLink({
  item,
  className,
  onClick,
  children,
}: {
  item: Item;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        aria-label={item.title}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={item.href} aria-label={item.title} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

/** Tracks the section in view with IntersectionObserver, not a scroll handler. */
function useActiveHref() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.3, 0.6, 1] },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

function DockIcon({
  item,
  mouseX,
  active,
}: {
  item: Item;
  mouseX: MotionValue<number>;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (x) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return 999;
    return x - bounds.x - bounds.width / 2;
  });

  // Animating width (not scale) is what makes the dock reflow around the cursor.
  const widthSync = useTransform(distance, [-140, 0, 140], [40, 62, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const scaleSync = useTransform(distance, [-140, 0, 140], [1, 1.3, 1]);
  const iconScale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <DockLink item={item}>
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full border transition-colors duration-200",
          active
            ? "border-accent/40 bg-accent-wash"
            : "border-border bg-[#f5f5f5] hover:bg-[#efefef]",
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, y: 6, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 3, x: "-50%" }}
              className="absolute -top-9 left-1/2 w-max rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-ink"
            >
              {item.title}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.span
          style={{ scale: iconScale }}
          className={cn(
            "flex size-[18px] items-center justify-center",
            active ? "text-accent-deep" : "text-ink",
          )}
        >
          {item.icon}
        </motion.span>
      </motion.div>
    </DockLink>
  );
}

function DockDesktop({ activeHref }: { activeHref: string }) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const reduced = useReducedMotion();

  return (
    <nav
      aria-label="Site navigation"
      className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:block"
    >
      <div
        onMouseMove={(e) => !reduced && mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className="flex h-16 items-end gap-2 rounded-full border border-border bg-white/80 px-3 pb-2.5 shadow-[0_2px_16px_rgba(0,0,0,0.05)] backdrop-blur-md"
      >
        {groups.map((group, gi) => (
          <div key={gi} className="flex items-end gap-2">
            {gi > 0 && <div aria-hidden="true" className="mb-1.5 h-8 w-px bg-border" />}
            {group.map((item) => (
              <DockIcon
                key={item.title}
                item={item}
                mouseX={mouseX}
                active={activeHref === item.href}
              />
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}

function DockMobile({ activeHref }: { activeHref: string }) {
  const [open, setOpen] = useState(false);
  const items = groups.flat();

  return (
    <nav aria-label="Site navigation" className="fixed bottom-6 right-5 z-50 md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-full right-0 mb-3 flex flex-col gap-2"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8, transition: { delay: i * 0.02 } }}
                transition={{ delay: (items.length - 1 - i) * 0.03 }}
              >
                <DockLink
                  item={item}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full border border-border bg-white/90 backdrop-blur-md",
                    activeHref === item.href ? "text-accent-deep" : "text-ink",
                  )}
                >
                  <span className="flex size-[18px] items-center justify-center">
                    {item.icon}
                  </span>
                </DockLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="flex size-12 items-center justify-center rounded-full border border-border bg-white/90 text-ink shadow-[0_2px_16px_rgba(0,0,0,0.06)] backdrop-blur-md active:scale-[0.98]"
      >
        <DotsThree size={24} weight="bold" />
      </button>
    </nav>
  );
}

export function Dock() {
  const activeHref = useActiveHref();

  return (
    <>
      <DockDesktop activeHref={activeHref} />
      <DockMobile activeHref={activeHref} />
    </>
  );
}
