/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Segoe UI', 'Calibri', 'Helvetica'],
        'display': ['Climate Crisis'],
        'main': ['Sono']
      }
    },
  },
  plugins: [],
}
