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
        vvprimary: {
          light: '#C592C9',
          blend: '#311732',
          strong: '#EA85F4',
          dark: '#150916',
          darkblend: '#230F24',
        },
        vvsecondary: {
          light: '#D7D6DD',
          blend: '#8DAECD',
          dark: '#311732',
        }
      },
      // Custom spacing 
      spacing: {
        88: '22rem',
      },
      // Custom border radius for the icons
      borderRadius: {
        'circular': '36px',
      },
      // Custom heights for top navigation
      height: {
        topbar: 'calc(3vh + 2.5rem)',
      },
      margin: {
        topbarIcon: 'calc(1.5vw)',
        userIcon: 'calc(0.5rem + 2.5vw)',
        mediaContentX: '2vw',
        mediaContextY: '2vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
