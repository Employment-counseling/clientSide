/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // כדי שTailwind יזהה קבצי Angular
  ],
  theme: {
    extend: {
      colors: {
        limeCustom: '#BBEB00',
      },
      fontFamily: {
        'leon': ['Leon', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

