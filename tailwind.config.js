/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            './public/**/*.{html,js}',
           ],
  theme: {
    container : {
      center:true,
      screens:{
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px"
      }},
    extend: {
      fontFamily : {
        gemunu : ["Gemunu Libre", "sans-serif"],
        open : ['Open Sans', "sans-serif"],
        singleday : [ 'Single Day', "cursive"]
      },
      colors : {
        "gega-red" : "#BC1A45",
        "gega-melon" : "#FFD369",
        "gega-grey" : "#DDDDDD",
        "gega-white" : "#F7F7F7", 
        "gega-black" : "#000000",
        "gega-blue" : "#0000FF",
        "gega-regal-blue" : "#243c5a",
        "gega-dark-grey" : "#3B3B3B"
      },
      spacing : {
        "128" : "32rem",
      }
    },

  },
  plugins: [],
}

