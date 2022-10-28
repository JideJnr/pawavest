/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {

      backgroundImage: {
        'main': "url('\main.png')",
        'back': "url(' \ back.png')",
        'platform': "url(' \ platform.png')",
        'more': "url(' \ more.PNG')",
        'fade': "url(' \ fade.png')",
        'shasha': "url(' \ shasha.jpg')",
        'chuks': "url(' \ okoli.png')",
   
      
      },
    },
  },
  plugins: [],
}
