/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");


module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      red: colors.red,
      gray: colors.gray,
      phyniteBlue: "#5BEAF3",
      mainGray: "#0F0F11",
      gray0: "#6B7280",
      gray1: "#2D3038",
      gray2: "#1D1D22",
      gray3: "#17171A",
      gray4: "#0A0A0D",
      salmon: "#F27666",
      mango: "#F2BB4E",
      rust: "#A6584E",
      copper: "#A67D2D",
      lightYellow: "#FCFCD4",
      ice: "#E1FFFF"

    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
        orbitron: ["Orbitron"]
      },
    },
  },
  plugins: [],
};
