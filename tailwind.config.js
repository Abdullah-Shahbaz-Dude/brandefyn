/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // Purple
        secondary: "#D946EF", // Pink-purple
        accent: "#A855F7", // Light purple
        "hero-gradient": "#1f1446", // Dark blue-purple for hero section
        "background-dark": "#050505", // Dark background
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
