/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './src/**/*.js'],
  theme: {
    extend: {

      fontFamily: {
        inter: ['Inter'],
      },
      fontWeight: {
        extra_light: 200,
        light: 500,
        regular: 400,
        bold: 700,
        extra_bold: 800
      },
    },
  },
  plugins: [],
}

