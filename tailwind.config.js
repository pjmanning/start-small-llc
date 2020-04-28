// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.vue'],

  // Include any special characters you're using in this regular expression
  //  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  //  defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
})

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV == 'production' ? [purgecss] : []),
  ],
}
