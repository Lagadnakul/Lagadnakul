export type Project = {
  id: string;
  name: string;
  tagline: string;
  /** What was actually hard about it. No feature lists. */
  detail: string;
  stack: string[];
  live: string | null;
  repo: string;
  year: string;
  /**
   * The cell's visual anchor, in place of a screenshot. Must be a real,
   * checkable fact about the project, never decoration.
   */
  signal: { value: string; label: string };
  /** Bento span at md and above. */
  span: string;
};

/**
 * Every `live` URL returned HTTP 200 when last verified (2026-10-02).
 * `car-drivers-frontend.vercel.app` is dead and must not come back.
 */
export const projects: Project[] = [
  {
    id: "recovery-bench",
    name: "Recovery Bench",
    tagline: "Dissertation implementation and results dashboard",
    detail:
      "The benchmark harness behind my M.Tech dissertation. Runs coding agents against seeded failures, records whether they recover, and renders every run in a filterable dashboard.",
    stack: ["Bun", "TypeScript", "Vite", "React"],
    live: "https://recovery-bench.vercel.app",
    repo: "https://github.com/Lagadnakul/Dissertation",
    year: "2026",
    signal: { value: "433", label: "tests across a Bun workspace" },
    span: "md:col-span-2",
  },
  {
    id: "nested-comments",
    name: "nested-comments",
    tagline: "Real time threaded comments over WebSocket",
    detail:
      "Comment trees that stream in live. The hard part is out of order arrival: a child can reach the client before its parent exists, so the tree holds orphans and splices them in once the parent lands.",
    stack: ["React 19", "TypeScript", "Zustand", "ws"],
    live: "https://nested-comments-izrs.vercel.app",
    repo: "https://github.com/Lagadnakul/nested-comments",
    year: "2026",
    signal: { value: "O(1)", label: "orphan reattachment" },
    span: "md:col-span-1",
  },
  {
    id: "evm",
    name: "EVM Reality Check",
    tagline: "Interactive explainer on electronic voting machines",
    detail:
      "An animated walkthrough of how EVMs actually work, built to answer the common misconceptions directly rather than argue with them.",
    stack: ["React", "Vite", "Framer Motion"],
    live: "https://evm-reality-check.vercel.app",
    repo: "https://github.com/Lagadnakul/evm-reality-check",
    year: "2025",
    signal: { value: "1 claim", label: "1 steppable simulation" },
    span: "md:col-span-1",
  },
  {
    id: "hunger-hive",
    name: "Hunger Hive",
    tagline: "Food delivery platform with admin dashboard",
    detail:
      "Customer storefront, restaurant admin panel and an Express/MongoDB API sharing one data model, covering the full ordering flow from cart to order state.",
    stack: ["React", "Express", "MongoDB", "JWT"],
    live: "https://hunger-hive.vercel.app",
    repo: "https://github.com/Lagadnakul/Food-Delivery",
    year: "2025",
    signal: { value: "3", label: "surfaces, one data model" },
    span: "md:col-span-2",
  },
  {
    id: "find-my-driver",
    name: "Find My Driver",
    tagline: "Driver booking and availability platform",
    detail:
      "Drivers publish availability, users search and book against it, and an admin view manages the fleet. Three roles over one Express API with role based access control.",
    stack: ["React", "Express", "MongoDB", "Tailwind"],
    live: "https://car-drivers.vercel.app",
    repo: "https://github.com/Lagadnakul/Car-Drivers",
    year: "2025",
    signal: { value: "RBAC", label: "three roles, one API" },
    span: "md:col-span-1",
  },
  {
    id: "campusiq",
    name: "CampusIQ 360",
    tagline: "Campus management REST API",
    detail:
      "Attendance, assignments, timetables and events behind one Express 5 API, with JWT auth separating students, faculty and administrators.",
    stack: ["Express 5", "MongoDB", "Mongoose", "JWT"],
    live: null,
    repo: "https://github.com/Lagadnakul/CampusIQ-360",
    year: "2025",
    signal: { value: "API", label: "backend only, deployed on Render" },
    span: "md:col-span-2",
  },
];
