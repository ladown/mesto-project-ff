const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.argv.includes('mode=production');

module.exports = {
    devServer: {
        compress: true,
        open: true,
        static: path.resolve(__dirname, './dist'),
    },

    entry: {
        main: './src/scripts/index.js',
    },

    mode: isProduction ? 'production' : 'development',

    module: {
        rules: [
            {
                exclude: '/node_modules/',
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                generator: {
                    filename: 'images/[name].[hash][ext]',
                },
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                generator: {
                    filename: 'fonts/[name].[hash][ext]',
                },
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
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
