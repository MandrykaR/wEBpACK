module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /.(jpg|png)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: '[path][name].[ext]',
							outputPath: 'images',
						},
					},
				],
			},
		],
	},
}
