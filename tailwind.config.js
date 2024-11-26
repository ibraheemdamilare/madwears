/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'poppins': ["poppins", "serif"],
      'shrikhand': ["shrikhand", "serif"],
      'quicksand': ["quicksand", "serif"]
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

