import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    // Fonts
    fontSize: {
      1: "2.986rem",
      2: "2.488rem",
      3: "2.074rem",
      4: "1.728rem",
      5: "1.44rem",
      6: "1.2rem",
      7: "1rem",
      8: "0.833rem",
      9: "0.694rem",
    },
    fontWeight: {
      thin: "300",
      bold: "600",
    },
    letterSpacing: {
      tight: "0.075em",
      wide: "0.225em",
    },
    lineHeight: {
      tight: "1em",
      normal: "1.5em",
      loose: "1.65em",
      looser: "1.75em",
    },

    // Fonts
    transitionDuration: {
      default: "0.2s",
    },
    transitionTimingFunction: {
      default: "ease",
    },
    borderWidth: {
      default: "1px",
    },
    borderStyle: {
      default: "dotted",
    },

    // Colors
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: "#ffffff",
      black: "#000000",
      "gray-25": "rgba(144, 144, 144, 0.25)",
      "gray-50": "rgba(255, 255, 255, 0.5)",
      "gray-75": "rgba(255, 255, 255, 0.075)",
      "gray-125": "rgba(0, 0, 0, 0.125)",
      "gray-500": "rgba(0, 0, 0, 0.5)",
      "gray-700": "rgba(0, 0, 0, 0.7)",
      background: "#2e3842",
      primary: "#1b5e67",
      secondary: "#21b2a6",
      accent1: "#00ffcc",
      accent2: "#00f0ff",
      accent3: "#76ddff",
      "footer-bg": "#1d242a",
      "style1-bg": "#1b5e67",
      "style1-text": "#c8ece9",
      "style3-bg": "#505393",
      "style3-text": "#d3d4e4",
      "style5-text": "#4E4852",
      "style5-strong": "#2E3842",
    },
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      addBase({
        html: { fontSize: "13px" },
        "@screen sm": { html: { fontSize: "15px" } },
        "@screen md": { html: { fontSize: "16px" } },
        "@screen lg": { html: { fontSize: "17px" } },
        "@screen xl": { html: { fontSize: "17px" } },
        "@screen 2xl": { html: { fontSize: "21px" } },
      });
      addBase({
        h1: {
          fontSize: theme("fontSize.1"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: theme("letterSpacing.wide"),
          lineHeight: theme("lineHeight.tight"),
        },
        h2: {
          fontSize: theme("fontSize.2"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: theme("letterSpacing.wide"),
          lineHeight: theme("lineHeight.looser"),
        },
        h3: {
          fontSize: theme("fontSize.3"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: theme("letterSpacing.wide"),
          lineHeight: theme("lineHeight.looser"),
        },
        h4: {
          fontSize: theme("fontSize.4"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: theme("letterSpacing.wide"),
          lineHeight: theme("lineHeight.normal"),
        },
        h5: {
          fontSize: theme("fontSize.5"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: theme("letterSpacing.wide"),
          lineHeight: theme("lineHeight.normal"),
        },
        h6: {
          fontSize: theme("fontSize.6"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: theme("letterSpacing.wide"),
          lineHeight: theme("lineHeight.normal"),
        },
        p: {
          fontSize: theme("fontSize.7"),
          fontWeight: theme("fontWeight.thin"),
          letterSpacing: theme("letterSpacing.tight"),
          lineHeight: theme("lineHeight.loose"),
        },
      });
    },
  ],
} satisfies Config;
