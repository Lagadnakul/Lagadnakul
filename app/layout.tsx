import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { research } from "@/data/research";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const baseUrl = profile.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${profile.name} | Full Stack Developer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Full stack developer working in React, Next.js and Node.js, and an M.Tech researcher studying failure recovery in agentic AI coding systems. Based in Vadodara, India.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Agentic AI",
    "LLM evaluation",
    "M.Tech",
    "Parul University",
    "Vadodara",
    "India",
  ],
  authors: [{ name: profile.name, url: baseUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: `${profile.name} Portfolio`,
    title: `${profile.name} | Full Stack Developer`,
    description:
      "Full stack developer and M.Tech researcher studying how AI coding agents recover from their own failures.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Full Stack Developer`,
    description:
      "Full stack developer and M.Tech researcher studying how AI coding agents recover from their own failures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: baseUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description:
    "Full stack developer and M.Tech researcher in AI and Data Science.",
  url: baseUrl,
  email: profile.email,
  telephone: profile.phoneHref,
  image: profile.avatarUrl,
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "WebSocket",
    "Agentic AI",
    "LLM evaluation",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Parul University",
  },
  subjectOf: {
    "@type": "ScholarlyArticle",
    name: research.title,
    author: { "@type": "Person", name: profile.name },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-canvas font-sans text-ink antialiased">
        <a href="#main-content" className="sr-only">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
