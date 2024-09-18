/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html, js}"],
  darkMode: "class",
  theme: {
    extend: {},
    
  },
  plugins: [require("@tailwindcss/forms")],

}

