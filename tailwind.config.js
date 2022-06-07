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
      fontFamily: {
        prompt: ['Prompt'],
      },
      colors: {
        'primary': "#1A404E",
      },
    },
  },
  plugins: [],
}
