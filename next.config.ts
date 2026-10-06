import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    '@tailwindcss/postcss',
    '@tailwindcss/oxide',
    'lightningcss',
    'tailwindcss'
  ]
};

export default nextConfig;
