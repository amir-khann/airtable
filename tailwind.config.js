const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      sans: ["Roboto", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        header: "rgb(41, 42, 62)",
        logo: "#c47aff",
        button: "#6b3e8e",
        nav: "rgba(51,51,51, 0.75)",
        cardBlue: "rgb(73, 83, 238)",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      maxWidth: {
        custom: "65rem",
      },
      maxHeight: {
        48: "12rem",
        "80vh": "80vh",
        "90vh": "90vh",
        none: "none",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/line-clamp")],
}
