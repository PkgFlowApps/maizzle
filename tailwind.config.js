/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("tailwindcss-preset-email")],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#423E3A",
          50: "#67605A",
          100: "#635D57",
          200: "#5A554F",
          300: "#524D48",
          400: "#4A4641",
          500: "#423E3A",
          600: "#34312E",
          700: "#272522",
          800: "#191816",
          900: "#0C0B0A",
          950: "#050504"
        },
        pureWhite: "#ffffff",
        coral: "#ff5757",
        peach: "#f9c7a1",
        pureBlack: "#000000",
        ivory: "#fff8f5",
        taupe: "#d5b6a9",
        salmon: {
          DEFAULT: "#FF877D",
          50: "#FFDCD9",
          100: "#FFD2CF",
          200: "#FFBFBA",
          300: "#FFADA6",
          400: "#FF9A91",
          500: "#FF877D",
          600: "#FF7E73",
          700: "#FF7469",
          800: "#FF6B5E",
          900: "#FF6154",
          950: "#FF5D4F"
        }
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  }
};
