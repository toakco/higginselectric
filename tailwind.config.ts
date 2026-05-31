import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        higgins: {
          red: "#C8202C",
          "red-deep": "#8E141C",
          yellow: "#FFD400",
          "yellow-dim": "#C9A700",
          black: "#0A0A0A",
          graphite: "#1A1A1A",
          steel: "#2A2A2A",
          concrete: "#9A9A9A",
          bone: "#F2EFEA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.3vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.9rem + 0.4vw, 1.125rem)",
        "fluid-lg": "clamp(1.25rem, 1rem + 1vw, 1.75rem)",
        "fluid-xl": "clamp(2rem, 1.5rem + 2vw, 3rem)",
        "fluid-2xl": "clamp(3rem, 2rem + 4vw, 5rem)",
        "fluid-3xl": "clamp(4rem, 2.5rem + 6vw, 8rem)",
        "fluid-hero": "clamp(5rem, 3rem + 10vw, 14rem)",
      },
      letterSpacing: {
        tightest: "0.005em",
        tighter: "-0.005em",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spark-pulse": "spark-pulse 2.4s ease-in-out infinite",
        "scan-line": "scan-line 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spark-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      gridTemplateColumns: {
        services: "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
