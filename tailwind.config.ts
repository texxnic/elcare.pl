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
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
      },
    },
  },
};

export default config;
