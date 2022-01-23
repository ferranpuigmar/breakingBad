module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      cooper: ['cooper', 'sans-serif'],
      poppins_light: ['poppins_light', 'serif'],
      poppins_semibold: ['poppins_semibold', 'serif']
    },
    colors: {
      black: '#000',
      green: '#026635',
      yellow: '#E2B800',
      white: '#fff',
      gray: '#B6B6B6',
      'gray-light': '#ECECEC'
    },
    screens: require('./src/config/breakpoints.config'),
    extend: {}
  },
  plugins: []
};
