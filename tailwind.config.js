/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      fontFamily: [
        ["Quicksand","sans-serif"],
      ],
    },
    gridTemplateRows:{
      7:"repeat(7,minmax(0,1fr))",
      8:"repeat(8,minmax(0,1fr))",

    },
  },
  plugins: [],
}

