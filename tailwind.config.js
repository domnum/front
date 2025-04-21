/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {fontFamily: {
      'roboto-serif': ['"Roboto Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}

