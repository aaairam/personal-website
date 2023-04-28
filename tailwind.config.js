/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black:'#0B0C10',
        white:'#FFFFFF',
        pink:'#E46F80',
        lightpink:'#F6CDD3',
      }
    },
  },
  plugins: [],
}

