const HtmlWebPack             = require('html-webpack-plugin');
const MiniCssExtract          = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin              = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',

    optimization:{
        minimizer: [new OptimizeCssAssetsPlugin]
    },

    output: {
        clean: true
    },

    module: {
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,                    
                }
            },
            {
                test: /\.css$/i,
                exclude: /style.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebPack({
            title: 'Mi Webpack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            // filename: '[name].[fullhash].css',
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
            { from: 'src/assets', to: 'assets'}
            ]
        })
    ]

}