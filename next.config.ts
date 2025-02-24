import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  basePath: "/course-planner", 
  assetPrefix: "/course-planner/", 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
