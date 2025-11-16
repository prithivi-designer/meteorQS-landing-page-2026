// tailwind.config.js

/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include Next.js pages
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-[url('/images/clientGlobe-BG.jpg')]"],

  theme: {
    screens: {
      xsm: "425px",
      // => @media (min-width: 425px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "767px",
      // => @media (min-width: 767px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xl2: "1367px",
      // => @media (min-width: 1367px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
      xxxl: "2550px",
      // => @media (min-width: 1400px) { ... }
    },

    extend: {
      backgroundImage: {
        "themeBg-radial-gradient":
          "radial-gradient(43.8% 92.95% at 100% 96.74%, #833c0c 0%, #0f0e0d 100%)",
        "text-bg-radial-gradient":
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 102, 0, 0.5) 0%, rgba(153, 61, 0, 0.5) 100%)",
        "themebg-linear-gradient":
          "linear-gradient(269.86deg, #1093FF -77.75%, #000000 53.92%, #1093FF 182.98%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#1093FF",
      },
      fontFamily: {
        thertole: ['"Thertole"', "sans-serif"],
        albertSans: ['"Albert Sans"', "sans-serif"],
        audiowide: ['"Audiowide"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      mixBlendMode: {
        exclusion: "exclusion",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
