const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer: {
        compress: true,
        open: true,
        static: path.resolve(__dirname, './dist'),
    },

    entry: {
        main: './src/scripts/index.js',
    },

    mode: 'development',

    module: {
        rules: [
            {
                exclude: '/node_modules/',
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },

    output: {
        clean: true,
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};
