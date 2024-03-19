/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layoutGridColumns: "50px 90px 1fr",
        mainGridColumns: "repeat(2, 1fr)",
        mainGridRows: "auto auto",
      },
      gridTemplateRows: {
        layoutGridRows: "70px 100dvh",
      },
      backgroundImage: {
        food: "url('/public/food.jpg')",
        food2: "url('/public/food2.jpg')",
        food3: "url('/public/food3.jpg')",
      },
      colors: {
        black: "#101101",
        "black-2": "#4f4f4f",
        grey: "#D9D9D7",
      },
      fontFamily: {
        kanit: "Kanit, sans-serif",
        rubik: "Rubik Glitch Pop, system-ui",
        charmonman: "Charmonman, cursive",
        girl: "The Girl Next Door, cursive",
      },
      boxShadow: {
        "3xl": "0 35px 30px -7px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
