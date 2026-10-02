"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type BlurFadeProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function BlurFade({ children, delay = 0, className }: BlurFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
