import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'mediaindonesia.gumlet.io',
      },
      {
        protocol: 'https',
        hostname: 'img.herstory.co.id',
      },
    ],
  },
};

export default nextConfig;
