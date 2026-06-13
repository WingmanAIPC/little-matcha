import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so a stray parent lockfile
  // doesn't get picked up for file tracing.
  turbopack: {
    root: process.cwd(),
  },
  // Serve images straight from /public instead of routing through the
  // /_next/image optimizer. Some privacy browsers / blockers drop the
  // optimizer endpoint, which left every in-page image blank while the
  // raw files loaded fine. Raw paths are reliable everywhere.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
