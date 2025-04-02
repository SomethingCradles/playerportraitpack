import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/playerportraitpack'
,  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/RegnantPhoenix/playerportraitpack/**',
      },
    ],
  },
};

export default nextConfig;
