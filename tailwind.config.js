/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#100c1d",
        background: "#eae6f4",
        primary: "#543f92",
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
