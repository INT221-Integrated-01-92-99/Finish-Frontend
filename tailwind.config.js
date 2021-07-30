module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: { '-10': '-10', },
      colors: {
        'cream-light': '#f2efe8',
        'cream-normal': '#ddd8d2',
        'cream-light-brown': '#c3b3a4',
        'cream-brown': '#c29a76',
        'cream-dark': '#54514c',

      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
