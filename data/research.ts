export const research = {
  title:
    "A Self-Reflection-Based Failure Recovery Framework for Agentic AI Coding Systems",
  degree: "M.Tech Dissertation",
  institution: "Parul Institute of Engineering & Technology, Parul University",
  year: "2026",

  question: "When an AI coding agent fails, can it fix its own mistake?",

  abstract:
    "Agentic coding systems are measured on whether they solve a task, not on what they do when they get it wrong. This work builds a benchmark that seeds controlled failures into coding tasks, then measures whether an agent can detect, diagnose and recover from its own bad patch. The framework separates recovery from retry: re-running a prompt is not the same as reasoning about why the first attempt failed.",

  /** Headline result from the dashboard. Do not restate these numbers elsewhere. */
  findings: [
    {
      label: "Self-reflection prompting",
      value: "3 / 3",
      detail: "recovered across the seeded failure set",
    },
    {
      label: "Baseline retry",
      value: "0 / 4",
      detail: "no recovery without an explicit reflection step",
    },
  ],

  links: [
    {
      label: "Explainer",
      href: "https://dissertation-explainer.vercel.app",
      detail: "Phase-by-phase walkthrough of the method and results",
    },
    {
      label: "Results dashboard",
      href: "https://recovery-bench.vercel.app",
      detail: "Live replay of every run, filterable by sub-test",
    },
    {
      label: "Repository",
      href: "https://github.com/Lagadnakul/Dissertation",
      detail: "Implementation, thesis, figures and the systematic review",
    },
  ],
} as const;
