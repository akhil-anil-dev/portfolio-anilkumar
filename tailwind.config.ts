import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Corporate navy — dark sections, headings, primary brand colour.
        navy: {
          50: "#EEF2FB",
          100: "#D3DCF1",
          200: "#9BACDA",
          300: "#5E76B6",
          400: "#2E4A8E",
          500: "#1B3268",
          600: "#142450",
          700: "#0F1C40",
          800: "#0B1633",
          900: "#080F25",
          950: "#050918",
        },
        // Accent blue — buttons, links, highlights.
        accent: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          DEFAULT: "#2563EB",
        },
        // Greys for body text & subtle surfaces.
        ink: {
          950: "#0F172A",
          900: "#1E293B",
          800: "#334155",
          700: "#475569",
          600: "#64748B",
          500: "#94A3B8",
          400: "#CBD5E1",
          300: "#E2E8F0",
          200: "#F1F5F9",
          100: "#F8FAFC",
        },
        // Brand colours for the software icon chips.
        brand: {
          revit: "#0696D7",
          autocad: "#E51F2B",
          navisworks: "#1A8E2C",
          dynamo: "#3D9BFB",
          bim360: "#2188FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1240px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11, 22, 51, 0.04), 0 8px 24px rgba(11, 22, 51, 0.06)",
        card: "0 1px 2px rgba(11, 22, 51, 0.06), 0 16px 36px rgba(11, 22, 51, 0.10)",
        focus: "0 0 0 3px rgba(37, 99, 235, 0.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
