/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      animation: {
        wobble: 'wobble 2.5s infinite',
      },
      colors: {
        'custom-green': '#14E956',
      },
      fontFamily: {
        cyborg: ['Cyborg'],
      },
      boxShadow: {
        custom: '3px 3px 0 #1F2127, -1px -1px 0 #1F2127, 1px -1px 0 #1F2127, -1px 1px 0 #1F2127, 1px 1px 0 #1F2127',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
