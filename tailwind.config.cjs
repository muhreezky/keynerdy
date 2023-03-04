/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/daisyui/dist/**/*.js",
    "./node_modules/react-daisyui/dist/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}
