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
    extend: {},
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
          info: "#3FBA8F",
          success: "#17C286",
          warning: "#67E0B6",
          error: "#38B589",
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
          success: "#3FBA8F",
          warning: "#17C286",
          error: "#243A36",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
