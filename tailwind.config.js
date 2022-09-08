/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#00302E',
      'secondary': '#FBDDBB',
      'grey': '#EEEFF4',
      'text-black': '#000',
      'text-white': '#FFFFFF',
      'input-color': '#B2B2B2',
      'footer': '#0B0D17',
      'heading-footer': '#F4F5F7',
      'text-footer': '#EEEFF4',
      'footer-text': '#D9DBE1',
      'login-bg': '#E2B887',
      'dashboard': '#FBFBFB',
      'dashboard-two': '#EFEFEF',
      'icons': '#BCBCBC',
      'dashboard-text': '#707070',
      'text-dash-1': '#06E775',
      'text-paragraph': 'rgba(0, 0, 0, 0.69)',
      'border-color': 'rgba(0, 48, 46, 0.14)'
    },
    fontSize: {
      '6xl': '4rem',
      '4xl': '2.25rem',
      '2xl': '1.688rem',
      '3xl': '2.063rem',      
      'sm': '0.875rem',
      'xs': '0.75rem'
    },
    borderWidth: {
      '0': '0.3px',
      '2': '1px'
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      margin: {
        '12': '10rem',
        '1': '2px'
      }
    },
  },
  plugins: [],
}
