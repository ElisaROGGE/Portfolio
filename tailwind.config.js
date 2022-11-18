/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
            'xs': {'min': '320px', 'max': '767px'},
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
          },
    extend: {
      colors: {
        'purple': '#515ada',
        'pink': '#efd5ff'
      }
    },
    
  },
  plugins: [],
}