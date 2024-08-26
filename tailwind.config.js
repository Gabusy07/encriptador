/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/main/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

