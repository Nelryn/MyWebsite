/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'baby-blue': '#BDD4E7',
        'txt-gray': '#696A75',
      },
      boxShadow: {
        'basic': '0 4px 4px 0px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [
  ],
}