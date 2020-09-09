const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {  // Split JS by files, separate your application code with vendor JS
        bundle: './src/index.js',
        vendor: [
            'react', 'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js' // gets name from entry property above, chunkhash gives the file name a hash code
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor']
        }),
        new HtmlWebpackPlugin({ // <-- copies template, gets the files from the bundles and append them to an index.html in the build directory                                   
            template:'public/index.html'
            // Use other option file name to change file name or location the place is placed
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build/*.*'] // Removes old builds, before creating a new one
        })
    ]
}