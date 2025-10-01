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
          light: '#f4f8f9',
          dark: '#1a1f21', // dark mod için uygun bir renk
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}