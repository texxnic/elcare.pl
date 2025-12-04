import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Commented out to enable SSR for dynamic routes
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload",
    unoptimized: true,
  },

  /* config options here */
};

export default nextConfig;
