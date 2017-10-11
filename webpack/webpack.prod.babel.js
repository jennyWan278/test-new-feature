/**
 * Created by SamMFFL on 2017/10/11.
 */
import merge from 'webpack-merge';
import common from './webpack.common';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default merge(common, {
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
})