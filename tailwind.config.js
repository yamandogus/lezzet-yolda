/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
         'custom-bg': {
          light: '#F4F8F9',
          dark: '#0F1415', // dark mode refined charcoal
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}