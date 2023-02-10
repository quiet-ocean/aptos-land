/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        darkgreen: '#05954CCC',

        darkred: '#FC5A5AB2',
        // Primary Colors
        lightblack: '#101010',
        lightgreen: '#07E0A3B2',
        lightred: '#FC5A5ACC',
        orange: '#FF9703',
        red: '#EB5651',
      },
      fontFamily: {
        cornerstone: ['Cornerstone', 'sans-serif'],
      },
    },
  },
}
