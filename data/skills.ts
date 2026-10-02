export const skills = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "WebSocket", "Redis", "JWT"],
  },
  {
    label: "Tooling",
    items: ["Git", "Docker", "GitHub Actions", "Vite", "Bun", "Vercel", "Render"],
  },
  {
    label: "Research",
    items: ["Agentic AI", "LLM evaluation", "Benchmark design", "Python"],
  },
] as const;

/** simpleicons.org slugs for the logo marquee. */
export const logos = [
  { slug: "react", name: "React" },
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "tailwindcss", name: "Tailwind CSS" },
  { slug: "nodedotjs", name: "Node.js" },
  { slug: "express", name: "Express" },
  { slug: "mongodb", name: "MongoDB" },
  { slug: "redis", name: "Redis" },
  { slug: "docker", name: "Docker" },
  { slug: "git", name: "Git" },
  { slug: "bun", name: "Bun" },
  { slug: "vite", name: "Vite" },
  { slug: "vercel", name: "Vercel" },
  { slug: "python", name: "Python" },
] as const;
