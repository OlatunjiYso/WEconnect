const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, './client/dist'),
    SRC: path.resolve(__dirname, './client/src'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.SRC, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    // Tell webpack to use html plugin to inject bundled app into index.html.
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'), // CSS will be extracted to this bundle file
    ],
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [
            {
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
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};