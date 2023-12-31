/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        textLight: "black",
        background: "#eae6f4",
        primaryLight: "#38529E",
        primaryDark: "#061132",
        secondary: "#cbc2e5",
        accent: "#58429a",
      },

      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [require("daisyui")],
};
