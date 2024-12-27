/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        divColors :'#d9d9d980',
        lightPurple : '#C085FD',
        darkPurple : '#29084d33',
        darkPurple2 : '#29084d'
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
}

