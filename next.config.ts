import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: 'export' to support standard Node.js server mode
  // Required for next/image with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
