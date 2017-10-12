/**
 * Created by SamMFFL on 2017/10/11.
 */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const rootPath = path.resolve(__dirname, '../');


export default {
    entry: {
        app: path.join(rootPath, './src/index.js'),
        another: path.join(rootPath, './src/another-module.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(rootPath, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader',]},
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader',]},
            {test: /\.(woff|woff2|eot|ttf|otf)$/i, use: ['file-loader',]},
            {test: /\.xml$/, use: ['xml-loader'],},
            {test: /\.(csv|tsv)$/, use: ['csv-loader']},
            {test: /\.scss/, use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'My test new feature',
            template: './index.html',
            hash: true,
            cache: false,
        }),
    ]
};