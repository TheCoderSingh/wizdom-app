/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#537AF2",
        light: "#D9D9D9",
      },
      fontFamily: {
        primary: "Montserrat-Regular",
        primaryBold: "Montserrat-Bold",
      },
    },
  },
  plugins: [],
};
