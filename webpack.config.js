/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
// Webpack Plugins
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin  = require('webpack/lib/DefinePlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CopyWebpackPlugin  = require('copy-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ENV = process.env.ENV = process.env.NODE_ENV = 'development';

var metadata = {
	title: 'braintree-angular-web',
	baseUrl: '/',
	host: '0.0.0.0',
	port: 1337,
	ENV: ENV
};
/*
 * Config
 */
module.exports = {
	// static data for index.html
	metadata: metadata,
	// for faster builds use 'eval'
	devtool: 'source-map',
	debug: true,

	entry: {
		app: [
			'./src/app/boot.js'
		],
		vendors: [
			'./src/app/vendors.js'
		]
	},

	// Config for our build files
	output: {
		path: root('dist'),
		filename: '[name].js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[id].chunk.js'
	},

	resolve: {
		// ensure loader extensions match
		extensions: ['','.ts','.js','.json','.css','.html']
	},

	module: {
		preLoaders: [{ test: /\.ts$/, loader: 'tslint-loader', exclude: [/node_modules/] }],
		loaders: [
			// Support for .ts files.
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				query: {
					'ignoreDiagnostics': [
						2403, // 2403 -> Subsequent variable declarations
						2300, // 2300 -> Duplicate identifier
						2374, // 2374 -> Duplicate number index signature
						2375  // 2375 -> Duplicate string index signature
					]
				},
				exclude: [ /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
			},

			{
				test: /\.js$/,
				loader: 'ng-annotate!babel',
				exclude: /node_modules|bower_components/
			},

			// Support for *.json files.
			{ test: /\.json$/,  loader: 'json-loader' },

			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader!postcss-loader'
				)
			},
			// Support for CSS as raw text
			//{ test: /\.css$/,   loader: 'raw-loader' },

			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader!postcss-loader!less-loader'
				),
				exclude: /node_modules/
			},

			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loaders: ['file?name=images/[name].[ext]'] },

			{
				test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?name=fonts/[name].[ext]'
			},

			// support for .html as raw text
			{ test: /\.html$/,  loader: 'raw-loader' }

			// if you add a loader include the resolve file extension above
		]
	},
	postcss: function () {
		return {
			defaults: [autoprefixer],
			cleaner:  [autoprefixer({ browsers:["last 15 version"], cascade: true })]
		};
	},


	plugins: [
		new CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js', minChunks: Infinity, chunks: ["app"] }),
		// static assets
		new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]),
		// generating html
		new HtmlWebpackPlugin({ template: 'src/app/index.html', inject: false }),
		// replace
		new DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(metadata.ENV),
				'NODE_ENV': JSON.stringify(metadata.ENV)
			}
		}),
		new ExtractTextPlugin('[name].css')
	],

	// Other module loader config
	tslint: {
		emitErrors: false,
		failOnHint: false
	},
	// our Webpack Development Server config
	devServer: {
		port: metadata.port,
		host: metadata.host,
		historyApiFallback: true,
		watchOptions: { aggregateTimeout: 300, poll: 1000 }
	},
	// we need this due to problems with es6-shim
	node: {global: 'window', progress: false, crypto: 'empty', module: false, clearImmediate: false, setImmediate: false}
};

// Helper functions

function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return root.apply(path, ['node_modules'].concat(args));
}
