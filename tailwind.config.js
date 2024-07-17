/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow :{
        '20xl': '0 100px 200px -50px rgba(0, 0, 0, 0.5)',
        'custom-green': '0 10px 15px -3px rgba(16, 185, 129, 0.5), 0 4px 6px -2px rgba(16, 185, 129, 0.5)', // Example green shadow
        '5xl': '0 55px 100px -25px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

