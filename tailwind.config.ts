import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#070604",
        graphite: "#10100f",
        gold: "#d9a441",
        cream: "#faf7f0",
        copper: "#b66b2e"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space)", "Inter", "sans-serif"]
      },
      boxShadow: {
        "gold": "0 20px 60px rgba(217, 164, 65, 0.24)",
        "panel": "0 24px 90px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(217, 164, 65, 0.14), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
