const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // false, 'media' or 'class'
  theme: {
    extend: {
      // Custom grayscale theme
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      // Custom spacing 
      spacing: {
        88: '22rem',
      },
      // Custom border radius for the icons
      borderRadius: {
        'circular': '36px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
