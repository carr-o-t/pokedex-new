const colors = require('tailwindcss/colors')

const randomColor = Math.floor(Math.random() * 16777215).toString(16);
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      amber: colors.amber,
      orange: colors.orange,
      rose: colors.rose,
      pink: colors.pink,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      cyan: '#3bbfc3',
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      lime: colors.lime,
      sky: colors.sky,
      teal: '#40af93',
      violet: colors.violet,
      emerald: '#018185',
      true: '#292b2f',
      warm: colors.warmGray,
      gray: '#d7d5d9',
      "blue-gray": colors.blueGray,
      cool: colors.coolGray,
      transparent: 'transparent',
      none: 'none',
      random: `#${randomColor}`,
    },
    boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
        custom: '5px 10px 10px rgba(0, 0, 0, 0.4),-5px -10px 10px #3c3a41',
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
