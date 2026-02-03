import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Enable React strict mode for better performance patterns
  reactStrictMode: true,
  // Compress responses for faster transfer
  compress: true,
  // Configure headers for caching static assets
  async headers() {
    return [
      {
        source: "/hero-frames-webp/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;

