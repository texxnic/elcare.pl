import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload",
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      use: [
        {
          loader: "next-image-export-optimizer",
          options: {
            // You can specify the quality of the optimized images
            quality: 75,
            // You can specify the output directory for optimized images
            outputPath: "public/optimized-images",
          },
        },
      ],
    });
    return config;
  },
  /* config options here */
};

export default nextConfig;
