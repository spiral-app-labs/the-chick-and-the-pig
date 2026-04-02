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
        amber: {
          gold: "#D4A517",
        },
        smoky: {
          brown: "#3E2723",
          light: "#5D4037",
        },
        cream: "#FFF8E7",
        bbq: {
          red: "#C62828",
          orange: "#E65100",
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-left": "slide-left 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
