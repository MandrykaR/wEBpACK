const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /.(jpg|png)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							outputPath: 'images',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
}
