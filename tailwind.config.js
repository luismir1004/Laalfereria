/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on the presence of a 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brick-red': '#B2422F',
        'cement-gray': '#A0A0A0',
        'charcoal-black': '#333333',
        'light-gray': '#D3D3D3', // A lighter gray for backgrounds/borders
        'dark-gray': '#4F4F4F', // A darker gray for subtle contrasts
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'], // Stronger, more modern heading font
        'body': ['Roboto', 'sans-serif'], // Readable body font
      }
    },
  },
  plugins: [],
}