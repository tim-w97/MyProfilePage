/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "tim-lightgray": "#D5D5D5",
      "tim-gray": "#656565",
      "tim-green": {
        DEFAULT: "#C0FF6B",
        leaf: "#7cd100",
        forest: "#4b8600"
      },
      "tim-black": "#000000"
    },

    extend: {},
  },
  plugins: [],
}
