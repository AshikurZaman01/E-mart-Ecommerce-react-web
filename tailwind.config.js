/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#46B031',
        'light-green': '#a9f7a9',
        'dark-green': '#006400'
      }
    },
  },
  plugins: [],
}