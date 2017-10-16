/**
 * Created by SamMFFL on 2017/10/11.
 */
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const rootPath = path.resolve(__dirname, '../');
const nodeModulesPath = path.resolve(rootPath, "node_modules");


export default {
    entry: {
        app: path.join(rootPath, './src/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(rootPath, 'dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            "jquery": path.join(nodeModulesPath, "/jquery/dist/jquery.min"),
            "flexible": path.join(nodeModulesPath, "/amfe-flexible/index.min")
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract('style-loader', 'css-loader') //['style-loader', 'css-loader',]
            },
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader',]},
            {test: /\.(woff|woff2|eot|ttf|otf)$/i, use: ['file-loader',]},
            {test: /\.xml$/, use: ['xml-loader'],},
            {test: /\.(csv|tsv)$/, use: ['csv-loader']},
            {test: /\.scss/, use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            $: "jquery",
            flexible: "flexible"
        }),
        new HtmlWebpackPlugin({
            title: 'My test new feature',
            template: './index.html',
            hash: true,
            cache: false,
        }),
    ]
};