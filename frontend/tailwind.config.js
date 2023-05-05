const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#16202A",
        "navi-form": "#10171F",
        placeholder: "#8799A5",
        "btn-primary": "#BDC6CF",
        "gray-line": "#444F5A",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "montserrat-alt": ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};
