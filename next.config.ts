import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // An orphaned package-lock.json sits in the parent directory, so Turbopack
  // guesses the wrong workspace root without this.
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
};

export default nextConfig;
