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
        "modal-bg": "rgba(91, 112, 135, 0.4)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "montserrat-alt": ["Montserrat Alternates", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(-10px)" },
        },
        rotate: {
          "10%, 30%, 50%, 70%, 90%": { transform: "scale(1.2)" },
          "20%, 40%, 60%, 80%": { transform: "rotate(20deg)" },
        },
        pen: {
          "10%, 30%, 50%, 70%, 90%": { transform: "rotate(0)" },
          "20%, 40%, 60%, 80%": { transform: "rotate(-20deg)" },
        },
      },
      animation: {
        shake: "shake 1s infinite ease",
        rotate: "rotate 3s infinite ease",
        pen: "pen 3s infinite ease",
      },
    },
  },
  plugins: [],
};
