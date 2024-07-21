const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: 'development',
    devServer:{
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                "./ProductsIndex": "./src/index"
            },
            shared: ["faker"]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html')
        })
    ]
}