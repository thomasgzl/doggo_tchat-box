module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['"Barlow Semi Condensed"', 'cursive']
      },
      spacing: {
        '6': '6rem',
      },
    },
  },
  plugins: [],
}