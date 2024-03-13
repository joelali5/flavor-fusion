/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-layout": "#FFFFFF",
        black: "#101101",
        "text-grey": "#D9D9D7",
      },
      fontFamily: {
        kanit: "Kanit, sans-serif",
      },
    },
  },
  plugins: [],
};
