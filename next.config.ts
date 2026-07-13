import type { NextConfig } from "next";

// GitHub Pages serves this project site under /portfolio/.
// In production we prefix all routes/assets with basePath so next/image,
// next/link, and static files resolve correctly; locally we keep root paths.
const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio";
const basePath = isProd ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export", // emit static site to ./out for Pages
  images: { unoptimized: true }, // no server-side optimizer on static hosting
  basePath,
  assetPrefix: isProd ? `/${repo}/` : "",
  // Exposed to client: the unoptimized next/image loader does NOT prepend
  // basePath to src, so components must prefix static asset paths manually.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
