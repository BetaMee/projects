import path from 'path';
import express from 'express';
import config from 'config-lite';
import webpack from 'webpack';

//react服务端渲染配置
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';


import AppRoutes from '../common/AppRoutes';//前端路由

import renderFullPage from './lib/view';
import getInitialData from './lib/helper';


var app = express();
// 设置静态文件目录
if(process.env.NODE_ENV === 'development') {
	const webpackconfig = require('../webpack.config.dev');
	const compiler = webpack(webpackconfig);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
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
	app.use(express.static(path.resolve(__dirname,'../client')));//与webpack.dev中一致
	app.use(express.static(path.join(__dirname, 'public')));  
} else if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'public')));
}






app.get('*',(req, res)=>{

  match( {routes:AppRoutes, location:req.url}, (err, redirectLocation, renderProps)=>{
    
    if(err) {
      res.status(500).send(err.message);
    }else if(redirectLocation) {
      res.redirect(302,redirectLocation.pathname+redirectLocation.search);
    }else if(renderProps) {
      let marked = renderToString(
            <RouterContext {...renderProps}/>
      );
      const initHtml = renderFullPage(marked,process.env.NODE_ENV);
      res.status(200).end(initHtml);
    }else{
      res.status(404).end('404 not found');
    }
  });
});



  app.listen(config.port, function () {
    console.log(`app listening on port ${config.port}`);
  });

