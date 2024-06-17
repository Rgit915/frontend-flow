/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'roboto': ['roboto', 'sans'],
      },
      colors: {
        gold: 'rgba(255, 215, 0, 1)',
      },
    },

  },
  plugins: [],
}

