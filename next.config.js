module.exports = require('@zeit/next-sass')({
    sassLoaderOptions: {
        includePaths: ['node_modules/', 'scss/'],
        data: `
            @import "variables";
            @import "bootstrap/scss/functions";
            @import "bootstrap/scss/variables";
            @import "bootstrap/scss/mixins";
        `
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
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
})
