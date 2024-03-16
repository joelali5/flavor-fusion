/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layoutGridColumns: "50px 90px 1fr",
      },
      gridTemplateRows: {
        layoutGridRows: "70px 100dvh",
      },
      colors: {
        black: "#101101",
        "black-2": "#5f5f5f",
        grey: "#D9D9D7",
      },
      fontFamily: {
        kanit: "Kanit, sans-serif",
        rubik: "Rubik Glitch Pop, system-ui",
      },
    },
  },
  plugins: [],
};
