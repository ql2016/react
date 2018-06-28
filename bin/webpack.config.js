var webpack = require('webpack');
var path = require('path');
var paths = require('./paths');
var entry = require('./entry');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var TransferWebpackPlugin = require('transfer-webpack-plugin');

var webpackConfig = {
    entry: entry,
    output: {
        path: paths.dist,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            },
            {
                test: /\.js[x]?$/,
                //exclude: /(node_modules|dist|src\/js\/conf)/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015','react'],
                    //plugins: ['react-hot-loader/babel']
                }
            },
            {
                test: /\.json$/,
                //exclude: /(node_modules|dist|src\/js\/conf)/,
                loader: "json-loader"
            },
            {
                test: /\.pug$/,
                //exclude: '/node_modules/',
                loader: "pug-loader",
                // query: {
                //     pretty: true
                // }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     loader: 'file-loader'
            // }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
            filename: paths.dist + '/index.html',
            template: paths.base + '/index.html'
        }),
        // new TransferWebpackPlugin([{
        //     from: 'src/images',
        //     to: 'images'
        // }]),
        //new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        historyApiFallback: true, //不跳转
        //inline: true,
        //hot: true,
        host: 'localhost',
        port: 8090
    }
}
module.exports = webpackConfig;