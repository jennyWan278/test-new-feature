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
    resolve: {
        alias: {
            "jquery": path.join(nodeModulesPath, "/jquery/dist/jquery.min"),
            "flexible": path.join(nodeModulesPath, "/amfe-flexible/index.min"),
            "faceDetection": path.join(nodeModulesPath, 'jquery.facedetection/dist/jquery.facedetection.min'),
        },
    },
    module: {
        rules: [
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader',]},
            {test: /\.(woff|woff2|eot|ttf|otf)$/i, use: ['file-loader',]},
            {test: /\.xml$/, use: ['xml-loader'],},
            {test: /\.(csv|tsv)$/, use: ['csv-loader']},
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss/,
                // use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader: 'css-loader'}, {loader: 'autoprefixer-loader'}, {
                        loader: "sass-loader",
                        options: {
                            data: "$env: red;$width: 100px;$height: 300px; $margin: auto auto;$border:10px solid gray;"
                        }
                    }]
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['/dist/']),
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
        new ExtractTextPlugin('app.css?[hash]'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js?[hash]'
        }),
    ]
};