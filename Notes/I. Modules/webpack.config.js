const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || "production";
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.export = {
	devtool: 'source-map',
	// entry: {
	// 	filename: './src/app.js'
	// },
	// output: {
	// 	filename: '_build/bundle.js'
	// },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					preset: ['es2015-native-modules']
				}
			}
		]
	},
	//uglify js
	// optimization: {
	// 	minimizer: {

	// 	}
	// }
	plugin: [
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
			uglifyOptions: {
				compress: { warning: false },
				output: { comment: false },
			},
			sourceMap: true
		}),
		// env plugin
		new webpack.DefinePlugin({
			'proccess-env': { NODE_ENV: JSON.stringify(nodeEnv)}
		})
	]
}