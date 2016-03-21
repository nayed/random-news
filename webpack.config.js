var path = require('path')
var node_modules = path.resolve(__dirname, 'node_modules')
var webpack = require('webpack')

config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/app.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }]
    }
}

module.exports = config