// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss')

module.exports = {
    siteName: '#startsmall',
    siteDescription:
        "A List of Projects, Nonprofits, and Companies funded by Jack Dorsey's startsmall llc",
    siteUrl: 'https://startsmall.llc',
    titleTemplate: '%s',

    css: {
        loaderOptions: {
            postcss: {
                plugins: [tailwindcss]
            }
        }
    },

    plugins: [
        // https://gridsome.org/plugins/gridsome-plugin-tailwindcss
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                presetEnvConfig: {},
                shouldImport: false,
                shouldTimeTravel: false
            }
        },
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: process.env.GOOGLE_ANALYTICS
            }
        },
        {
            use: 'gridsome-source-google-sheets',
            options: {
                sheetId: process.env.GOOGLE_SHEET_ID,
                apiKey: process.env.GOOGLE_API_KEY
                // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
            }
        }
    ]
}
