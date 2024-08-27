/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInZoom: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-left": "slideInLeft 1s ease-out",
        "slide-in-right": "slideInRight 1s ease-out",
        "fade-in-zoom": "fadeInZoom 1s ease-out",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#17C286",
          secondary: "#38B589",
          accent: "#3FBA8F",
          neutral: "#67E0B6",
          "base-100": "#FFFFFF",
          "base-200": "#67E0B6",
          "base-300": "#38B589",
          "base-400": "#17C286",
          info: "#3FBA8F",
          success: "#08d58d",
          warning: "#67E0B6",
          error: "#38B589",
          "primary-darker": "#0c593e",
        },
      },
      {
        dark: {
          primary: "#38B589",
          secondary: "#3FBA8F",
          accent: "#17C286",
          neutral: "#1A2E2B",
          "base-100": "#1A2E2B",
          "base-200": "#243A36",
          "base-300": "#304843",
          info: "#67E0B6",
          success: "#15b980",
          warning: "#17C286",
          error: "#243A36",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
