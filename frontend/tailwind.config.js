/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        backgroundStart: '#121216',
        backgroundFinal: '#0E0D10',
      },
    },
  },
  plugins: [],
}

