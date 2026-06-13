import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so a stray parent lockfile
  // doesn't get picked up for file tracing.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
