/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/js/index.js"],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      height: {
        '70vh': '70vh',
        '30vh': '30vh',
      },
    },
  },
  variants: {},
  plugins: [],
}

