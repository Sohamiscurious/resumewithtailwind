/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'bgclr-100x' : '#00B2FF',
      },
      fontFamily : {
        'dm': ["DM Sans"] ,
        'Inter' : ["Inter"]
      }


    },
  },
  plugins: [],
}

