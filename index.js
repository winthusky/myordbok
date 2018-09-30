var core = require.main.exports,
    {express,path,application} = core.evh(),
    {score} = require(path.join(__dirname, 'score'));

// module.exports = {score};
// var MyOrdbok = module.exports = function(){};
// MyOrdbok.score = score;

var webpack = core.ask('webpack');
// process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : 
var webpackConfig = require('./webpack.middleware');
var compiler = webpack(webpackConfig);

application.use(core.ask('webpack-dev-middleware')(compiler, {
  logLevel: 'warn', publicPath: webpackConfig.output.publicPath
}));

application.use(core.ask('webpack-hot-middleware')(compiler, {
  log: console.log, path: '/core_webpack_hmr', heartbeat: 10 * 1000
}));




/*
var {express,path,application} = require.main.exports(),
    {score} = require(path.join(__dirname, 'score'));

// module.exports = {score};
// var MyOrdbok = module.exports = function(){};
// MyOrdbok.score = score;



var webpack = require('webpack');
var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
var compiler = webpack(webpackConfig);

application.use(require("webpack-dev-middleware")(compiler, {
  logLevel: 'warn', publicPath: webpackConfig.output.publicPath
}));

application.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));
*/