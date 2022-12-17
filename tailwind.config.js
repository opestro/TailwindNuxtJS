/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors : {
        backg: "#000102",
        sBlue: "#649df9",
      },
      backgroundImage: {
        'cover': "url('/static/background.webp')",
      }
    },
  },
  plugins: [],
}
