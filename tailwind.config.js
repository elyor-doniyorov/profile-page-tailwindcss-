/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        cyan: '#37c4bd',
        green: '#1e8a15',
        skyBlue: '#a2d9f2',
        lightPink: '#f0b4ef',
        pink: '#f2a7c1',
        darkBrown: '#b55104',
        brown: '#edd18e',
        darkBlue: '#0453b5',
        cryptoBlue: '#15b1c2',
        lightBrown: '#f2cba5',
        lightBlue: '#07b0e8',
        lightGreen: '#dcfcfa',
        lightGray: '#d7d9d9',
        gray: '#b0b0b0',
        blueBlue: '#081b59',
        logoColor: '#232426'
      }
    },
  },
  plugins: [],
}
