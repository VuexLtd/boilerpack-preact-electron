const { boilerpack } = require('boilerpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = boilerpack({ target: 'electron-renderer' })
    .addEntry('main', [
        resolve(__dirname, 'entries/main.ts'),
        'preact',
        'core-js/es7/reflect',
    ])
    .addExtensions('.ts', '.tsx')
    .addRule('typescript', {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
    })
    .addRule('sass', {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    })
    .addPlugin(new HtmlWebpackPlugin())
    // .addPlugin(new CopyWebpackPlugin([
    //     {
    //         context: 'node_modules/mdi/fonts',
    //         from: '*',
    //         to: 'assets/fonts',
    //     },
    // ]))
    .withOutput({
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    })
    .make();
