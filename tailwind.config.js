/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#191414',
          white: '#FFFFFF',
          gray: '#B3B3B3',
          lightgray: '#1d1d1d',
          lightgrayHover: "#282828",
        },
      },
    },
  },
  plugins: [],
};
