const path = require("path");
// 引用 Node 模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// console.log(path.resolve()); // 绝对路径
// console.log(path.join(__dirname, "./dist")); // 拼接路径

const config = {
    // 1. 入口起点 (entry points)
    entry: "./src/index.js",
    // 2. 输出 (output)
    output: {
        filename: "bundle.js", // 合并后文件
        path: path.join(__dirname, "./dist"), // dist 的绝对路径
    },
    // 3. loaders
    module: {
        rules: [
            {
                // sass-loader node-sass两个依赖都需要安装
                test: /\.(scss|sass)$/, // 以 .scss , sass 结尾的文件
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test:/\.js$/,
                loader: "babel-loader",
            }
        ],
    },
    mode: "development",
    devServer: {
        // contentBase: "./dist",
        hot: true,
    },
    // plugins
    // 使用 html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "template.html", // 当前目录下/template.html
        }),
        // Plugin for hot module replacement
        new webpack.HotModuleReplacementPlugin(),
    ],
};

module.exports = config;
