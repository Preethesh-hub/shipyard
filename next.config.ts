import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
