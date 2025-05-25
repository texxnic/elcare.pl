import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "elcare-cream": {
          50: "#FFFCF8", // lightest
          100: "#FDF8F1", // base background
          200: "#F7EEDD",
          DEFAULT: "#FDF8F1", // default shade
        },
        "elcare-purple": {
          50: "#F4F2F9",
          100: "#E3DDF5",
          200: "#CFC4F4",
          300: "#B7A5EC",
          400: "#8A7AD3",
          500: "#5D4D8A", // primary deep purple
          600: "#443772", // darker text
          DEFAULT: "#5D4D8A", // default shade
        },
        "elcare-yellow": {
          100: "#FFF8E3",
          200: "#FCE6A6",
          300: "#F8C25A", // main accent
          400: "#E6AA42",
          DEFAULT: "#E6AA42", // default shade
        },
        "elcare-peach": {
          100: "#FFEAE5",
          200: "#FDD4C6",
          300: "#EDA89A", // peach button
          400: "#DB8471",
          DEFAULT: "#DB8471", // default shade
        },
      },
      fontFamily: {
        "dm-serif": ["var(--font-dm-serif)"],
        nunito: ["var(--font-nunito)"],
        baloo: ["var(--font-baloo)"],
      },
      spacing: {
        // Add your custom spacing here
      },
      borderRadius: {
        // Add your custom border radius here
      },
    },
  },
  plugins: [],
};

export default config;
