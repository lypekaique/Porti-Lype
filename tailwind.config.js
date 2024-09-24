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
        spacefuture: ['spacefuture,']
      },
      boxShadow: {
        custom: '3px 3px 0 #1F2127, -1px -1px 0 #1F2127, 1px -1px 0 #1F2127, -1px 1px 0 #1F2127, 1px 1px 0 #1F2127',
      },
      fontSize: {
        '5.5xl': "3.5rem",
        '6.5xl':'4.2rem',
      },

      lineHeight: {
        '12': '3.75rem',
      },
      letterSpacing: {
        'widee': '.04em'
      },
      textShadow: {
        'custom': '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
      }





    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-textshadow')
  ],
    
  
}
