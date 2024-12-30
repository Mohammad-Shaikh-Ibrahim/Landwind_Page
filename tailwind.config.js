/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    extend: {
      screens:{
        '2md': '960px'
      },
      colors: { // Corrected key from 'color' to 'colors'
        'primary': '#7E3AF2',
        'secondaryText': '#6B7280',
        'mainText': '#111928',
      },
      fontFamily: { // Fixed font family declaration
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
