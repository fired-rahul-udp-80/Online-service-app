/** @type {import('tailwindcss').Config} */


module.exports = {
   
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    extend: {
      fontfamily : {
        //bodyFont :["Mukta", "sans-serif"],
        
      },
      colors:{
        navColor : "#1B1A2C",
        blackColor : "#000014",
        lightBlueColor:"#5289C2",
        darkBlueColor : "#2D3DAF",
        gwhiteColor : "#A1A3B0",
        whiteColor : "#FFF",

      }
    },
  },
  plugins: [],
}

