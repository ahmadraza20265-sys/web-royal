import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        midnight: "#0b1020",
        cyan: "#00c2ff",
        orange: "#ff7a18",
        frost: "#f8fbff"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space)", "Inter", "sans-serif"]
      },
      boxShadow: {
        "cyan": "0 20px 60px rgba(0, 194, 255, 0.24)",
        "orange": "0 20px 60px rgba(255, 122, 24, 0.24)",
        "panel": "0 24px 90px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(0, 194, 255, 0.14), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
