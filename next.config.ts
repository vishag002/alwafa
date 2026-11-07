import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Netlify (outputs to ./out).
  output: "export",

  // The default image optimizer needs a server; static export requires this.
  images: {
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
