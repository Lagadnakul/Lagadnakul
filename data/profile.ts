export const profile = {
  name: "Nakul Lagad",
  role: "Full Stack Developer",
  // Currently a postgraduate student, not a graduate job-seeker. The tone of the
  // whole site follows from this.
  status: "M.Tech in AI & Data Science at Parul University",
  location: "Vadodara, Gujarat, India",

  // Contact is plain mailto/tel. There is deliberately no contact form and no
  // EmailJS dependency.
  email: "nakullagad084@gmail.com",
  phone: "+91 93283 21950",
  /** E.164, for the tel: href and the JSON-LD telephone field. */
  phoneHref: "+919328321950",

  avatarUrl: "https://avatars.githubusercontent.com/u/155940113?v=4",

  links: {
    github: "https://github.com/Lagadnakul",
    linkedin: "https://www.linkedin.com/in/nakul-lagad-625017269",
  },

  siteUrl: "https://nakul-lagad.vercel.app",
} as const;

export const education = [
  {
    degree: "M.Tech, Artificial Intelligence & Data Science",
    school: "Parul Institute of Engineering & Technology, Parul University",
    location: "Vadodara, India",
    period: "2025 - present",
    current: true,
  },
  {
    degree: "B.Tech, Computer Science",
    school: "Parul University",
    location: "Vadodara, India",
    period: "2021 - 2025",
    current: false,
  },
] as const;

export const experience = [
  {
    role: "Software Developer",
    company: "Mamo Technolabs",
    location: "Vadodara, India",
    period: "Dec 2024 - Mar 2025",
    points: [
      "Built and maintained full stack features across React, Next.js, TypeScript, Node.js and Express.",
      "Designed REST endpoints for authentication, order management and payment flows.",
      "Reduced response times on read-heavy endpoints by introducing Redis caching and moving blocking work off the request path.",
      "Containerised services with Docker and automated builds through GitHub Actions.",
    ],
  },
] as const;
