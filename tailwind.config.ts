import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|text|stroke|fill)-(transparent|white|black|gray-075|gray-15|gray-224|gray-25|gray-50|gray-75|gray-125|gray-500|gray-700|background|primary|secondary|accent1|accent2|accent3|footer|style1-bg|style1-text|style3-bg|style3-text|style5-text|style5-strong|altBrown)/,
      variants: ["fill", "md"],
    },
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
      "gray-075": "rgba(0, 0, 0, 0.075)",
      "gray-15": "rgba(0, 0, 0, 0.15)",
      "gray-125": "rgba(0, 0, 0, 0.125)",
      "gray-224": "rgba(0, 0, 0, 0.224)",
      "gray-500": "rgba(0, 0, 0, 0.5)",
      "gray-700": "rgba(0, 0, 0, 0.7)",

      orange: "#ffbf60",
      brown: "#705e5e",
      altBrown: "#a88f8f",
      background: "#2e3842",
      primary: "#1b5e67",
      secondary: "#21b2a6",
      accent1: "#00ffcc",
      accent2: "#00f0ff",
      accent3: "#76ddff",

      footer: "rgba(29, 36, 42, 0.9)",
      "style1-bg": "#1b5e67",
      "style1-text": "#c8ece9",
      "style3-bg": "#505393",
      "style3-text": "#d3d4e4",
      "style5-text": "#4E4852",
      "style5-strong": "#2E3842",
    },
    extend: {
      keyframes: {
        heroLogoPopup: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95) rotate(0deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(-5deg)",
          },
        },
        lineIn: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "25%",
          },
        },
        bannerFadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        moreButtonIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(8.5em)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        heroLogoPopup: "heroLogoPopup 1s ease forwards",
        lineIn: "lineIn 0.85s ease forwards",
        bannerFadeOut: "bannerFadeOut 1.5s ease-in-out forwards",
        moreButtonIn: "moreButtonIn 0.75s ease forwards",
      },

      screens: {
        sm: "481px",
        md: "737px",
        lg: "981px",
        xl: "1281px",
        "2xl": "1681px",
      },
    },
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
          fontSize: theme("fontSize.5"),
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
