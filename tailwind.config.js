/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    extend: {
      color:{
        'primary': '#7E3AF2',
        'secondaryText': '#6B7280',
        'mainText': '#111928'
        },
      fontFamily: {
        Inter:[Inter, sans-serif]
      },
    },
  },
  plugins: [],
}