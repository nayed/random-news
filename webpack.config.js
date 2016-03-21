var path = require('path')
var node_modules = path.resolve(__dirname, 'node_modules')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: path.join(__dirname, 'app')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        })
    ]
}

module.exports = config