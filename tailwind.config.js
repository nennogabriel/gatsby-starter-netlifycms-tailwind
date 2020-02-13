// See https://tailwindcss.com/docs/configuration for details
const googleFonts = require("./content/theme/google_fonts.json")
const pallete = require("./content/theme/pallete.json")

module.exports = {
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: [googleFonts.sans.family, "sans-serif"],
      serif: [googleFonts.serif.family, "serif"],
    },
    extend: {
      colors: {
        ...pallete,
      },
    },
  },
  variants: {},
  plugins: [],
}
