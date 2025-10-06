import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages will serve from repo root with custom domain
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;
