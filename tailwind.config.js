/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layoutGridColumns: "150px 1fr",
      },
      gridTemplateRows: {
        layoutGridRows: "70px auto",
      },
      colors: {
        black: "#101101",
        "grey": "#D9D9D7",
      },
      fontFamily: {
        kanit: "Kanit, sans-serif",
      },
    },
  },
  plugins: [],
};
