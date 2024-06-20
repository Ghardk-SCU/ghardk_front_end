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
        Beige2 : '#BEB6A8',
        DarkBeige : '#ACA08C',
        White : '#F4F4F8',
        'white-18': 'rgba(255, 255, 255, 0.18)',
      },
      backdropFilter: {
        'blur-2': 'blur(2px)',
      },
      boxShadow: {
        custom: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      screens:{
        'lg1' : '1523px',
        'lg2' : '1200px',
        'md2' : '700px',
        'md3' : '560px',
        'sm2' : '500px',
        'sm3' : '400px',
      },
      maxWidth:{
        '10ch' : '10ch',
        '144ch': '144ch'
      }
    },
  },
  plugins: [],
}

