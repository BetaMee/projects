const express = require('express');
const webpack = require('webpack');
const path = require('path');
const renderFullPage = require('./lib/view');

var app = express();

if(process.env.NODE_ENV === 'development') {
	const webpackconfig = require('./webpack.config');
	const compiler = webpack(webpackconfig);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: false,
		publicPath: webpackconfig.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	app.use(require('webpack-hot-middleware')(compiler));
	app.use(express.static(path.resolve(__dirname,'./src')));//与webpack.dev中一致
  app.use(express.static('build'));
}else {
  app.use(express.static('build'));	
}
app.get('*', function(req, res) {
  res.send(renderFullPage('development'));
});


app.listen(3000,function() {
  console.log('app is running at 3000');
});