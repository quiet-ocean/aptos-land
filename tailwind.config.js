/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cornerstone: ["Cornerstone", "sans-serif"],
      },
      colors:{
        // Primary Colors
        lightblack: "#101010",
        orange: "#FF9703",
        red: "#EB5651",
        darkgreen: "#05954CCC",
        lightgreen: "#07E0A3B2",
        darkred: "#FC5A5AB2",
        lightred: "#FC5A5ACC"
      },
    }
  },
  plugins: [],
}