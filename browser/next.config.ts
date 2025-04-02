import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/playerportraitpack',
  images: { unoptimized: true },
};

export default nextConfig;
