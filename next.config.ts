import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/plc-site",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
