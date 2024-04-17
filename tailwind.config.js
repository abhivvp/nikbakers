/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        homeLinks:["Playfair Display" , "serif"]
      },
      colors:{
        dbg:"#832622",
        lbg:"#FEF6E5",
        dtext:"#F15A24"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}