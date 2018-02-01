'use strict';

require('dotenv').config();

const {DefinePlugin, EnvironmentPlugin} = require('webpack');
const CleanPlugin = ('clean-webpack-plugin');
const UglifyPlugin = ('uglify-webpack-plugin');

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webPackConfig = module.exports = {};

const PRODUCTION = 

//--------------------------------------------------------------------
webPackConfig.entry = `${__dirname}/src/main.js`;
webPackConfig.output = {
	filename: 'bundle.[hash].js',
	path: `${__dirname}/build`
}
//--------------------------------------------------------------------
webPackConfig.plugins = [
	new HTMLPlugin(),
	new ExtractTextPlugin({
		filename: 'bundle[hash].css',
		disable: process.env.NODE_ENV !== 'production',
	}),
];
//--------------------------------------------------------------------
webPackConfig.module = {
	rules: [
		{
			test: /\.(jpg|gif|png)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 10000000,
					name: 'image/[name].[hash].[ext]',
				},
			}],
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					'css-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							includePaths: [`${__dirname}/src/style`],
						}
					}
				]
			}),
		}
	],
};
//--------------------------------------------------------------------
webPackConfig.devtool = 'eval-source-map';

webPackConfig.devServer = {
	historyApiFallback: true
};