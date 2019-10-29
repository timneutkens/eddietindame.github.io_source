const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const sass = require('@zeit/next-sass')

const nextConfig = {
    webpack: config => {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|gif)$/, // jpg handled by next-optimized-images
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    }
}

module.exports = withPlugins([
    optimizedImages,
    [sass, {
        sassLoaderOptions: {
            includePaths: ['node_modules/', 'scss/'],
            data: `
                @import "variables";
                @import "bootstrap/scss/functions";
                @import "bootstrap/scss/variables";
                @import "bootstrap/scss/mixins";
            `
        }
    }]
], nextConfig)
