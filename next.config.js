const path = require('path');
const withCSS = require('@zeit/next-css')
const withSCSS = require('@zeit/next-sass')

module.exports = withSCSS(withCSS({
    webpack(config, options){
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        config.resolve.alias['@components'] = path.resolve('components/')
        config.resolve.alias['@layouts'] = path.resolve('layouts/')
        config.resolve.alias['@pages'] = path.resolve('pages/')
        config.resolve.alias['@store'] = path.resolve('store/')
        config.resolve.alias['@static'] = path.resolve('static/')
        
        return config;
    }
}))