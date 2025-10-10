/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
     colors: {
  background: {
    DEFAULT: '#f9f9f9',
    dark: '#1E1E2D',   // فاتح شوية من الأسود
  },
  text: {
    DEFAULT: '#000000',
    dark: '#fff',   // رمادي فاتح مش أبيض صريح
  },
  primary: {
    DEFAULT: '#fabb18',
  },
  secondary: {
    DEFAULT: '#ffffff',
    dark: '#2A2A3B',   // فاتح من #1e1e1e
  },
},

      fontFamily: {
        abhaya: ['"Abhaya Libre"', 'serif'],
        Edu: ['"Edu VIC WA NT Hand Pre"', 'cursive'],
      },
      screens: {
        'xsm':'320px',
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow:{
        todoshad:'1px 1px 2px 0px black'
      },
    },
  },
  plugins: [],
}
