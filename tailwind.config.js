const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.md',
        './src/**/*.html'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                'twitter-blue': '#1da1f2',
                'twitter-blue-hover': '#1a91da'
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'even', 'hover', 'focus']
    },
    plugins: []
}
