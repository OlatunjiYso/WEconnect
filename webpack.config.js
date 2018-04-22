const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, './client/dist'),
    SRC: path.resolve(__dirname, './client/src'),
};

// Webpack configuration
module.exports = {
    entry: [path.join(paths.SRC, 'index.js')],
    output: {
        path: paths.DIST,
        filename: 'index.bundle.js'
    },
    plugins: [
        // Tell webpack to use html plugin to inject bundled app into index.html.
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        // CSS will be extracted to this bundle file
        new ExtractTextPlugin('style.bundle.css'),
        // Let's enable hot reloading
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                // Here we are telling webpack to use "babel-loader" for .js and .jsx files
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  'file-loader',
                ],
              },
        ],
    },
    devtool: 'inline-source-map',
    // Here we are telling webpack to know the file extension .js and .jsx files
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    }
};