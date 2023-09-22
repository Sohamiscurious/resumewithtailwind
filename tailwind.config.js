/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'bgclr-100x' : '#ef5a3c',
      },
      fontFamily : {
        'dm': ["DM Sans"] ,
        'Inter' : ["Inter"]
      }


    },
  },
  plugins: [],
}

