/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // כדי שTailwind יזהה קבצי Angular
  ],
  theme: {
    extend: {
      colors: {
        limeCustom: '#BBEB00',
          skycustom: '#23BEDD',
      },
      fontFamily: {
        'leon': ['Leon', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

