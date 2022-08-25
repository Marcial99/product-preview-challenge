/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        dark_cyan: "#3c8067",
        cream: "#f2ebe3",
        dark_blue: "#1c232b",
        gray_blue: "#6c7289",
        white: "#ffffff",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        fraunces: ['"Fraunces"', "serif"],
      },
      backgroundImage: {
        mobile: "url('/public/img/image-product-mobile.jpg')",
        desk: "url('/public/img/image-product-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
