import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true"

const nextConfig: NextConfig = {
  // Static export for GitHub Pages only
  ...(isGitHubActions ? { output: "export" } : {}),
  // basePath injected by actions/configure-pages
  basePath: process.env.NEXT_BASE_PATH || "",
  images: {
    unoptimized: true, // required for static export, harmless on Vercel
    remotePatterns: [
      { protocol: "https", hostname: "image.thum.io" },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
