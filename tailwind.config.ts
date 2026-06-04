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
        frost: "#f8fbff",
        "liberty-navy": "#031a3d",
        "liberty-deep": "#020a18",
        "liberty-royal": "#0755c9",
        "liberty-gold": "#f2b936",
        "liberty-gold-bright": "#ffd86a"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.5rem",
        "2xl": "0.5rem",
        "3xl": "0.5rem"
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
