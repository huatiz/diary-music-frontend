/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'custom-green': '#65895f',
        'custom-yellow': '#E0DA48'
      }
    }
  },
  plugins: []
}
