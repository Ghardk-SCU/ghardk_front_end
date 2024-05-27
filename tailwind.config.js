/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Black : '#101010',
        DarkBlue : '#2A2C41',
        DarkerBlue: '#000014',
        Yellow : '#FDBF50',
        Beige : '#D4CDCD',
        DarkBeige : '#ACA08C',
        White : '#F4F4F8',
      },
    },
  },
  plugins: [],
}

