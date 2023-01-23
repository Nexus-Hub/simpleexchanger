/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rowdies: ['Rowdies'],
        teko: ['Teko'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
