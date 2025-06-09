import type { Config } from "tailwindcss";
import { colors } from "./src/styles/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "elcare-cream": colors.elcareCream,
        "elcare-purple": colors.elcarePurple,
        "elcare-yellow": colors.elcareYellow,
        "elcare-peach": colors.elcarePeach,
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
};

export default config;
