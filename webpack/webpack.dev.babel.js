/**
 * Created by SamMFFL on 2017/10/11.
 */
import merge from 'webpack-merge';
import common from './webpack.common';
import webpack from 'webpack';



export default merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        compress: true,
        port: 9000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            },
        })
    ]
})