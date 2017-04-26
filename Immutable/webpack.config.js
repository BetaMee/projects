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
    new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			}
		})
  ]
}


