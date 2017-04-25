var path = require('path');
var webpack = require('webpack');
var APP_PATH = path.resolve(__dirname, './src/app.jsx');
var BUILD_PATH = path.resolve(__dirname, './build/');


module.exports={
  entry:[
    APP_PATH
  ],

  output:{
    path: BUILD_PATH,
    filename: 'client.bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use: [
          'babel-loader',
        ]
      },

    ]
  },

  plugins:[
    // new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: JSON.stringify('production'),
		// 		WEBPACK: true
		// 	}
		// }),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compressor: {
		// 		warnings: false
		// 	}
		// }),
    // new ExtractTextPlugin('bundle.css'),
    // new webpack.optimize.CommonsChunkPlugin({//拆分打包文件，出现共用文件则打包进common.js中
    //         name: "commons",
    //         filename: "commons.js",
    //         minChunks:2
    // }),
		// new CopyWebpackPlugin([
		// 	{
		// 		from: path.resolve(__dirname, 'src', 'assets'),
		// 		to: path.resolve(__dirname, 'dist', 'assets')
		// 	}
		// ]),
  ]
}


