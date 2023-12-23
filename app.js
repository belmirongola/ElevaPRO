'use strict';

const express = require('express')
    , app = express()
    , cors = require('cors')
    , path = require('path')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , session = require('express-session')
    , configs = require('./app/means/configs')
    , config = require('./webpack.config')
    , webpack = require('webpack')
    , webpackDevMiddleware = require('webpack-dev-middleware')
    , server = require('http').createServer(app) 
    , io = require('socket.io')(server)
    , compiler = webpack(config)
    , routes = require('./app/means/router'); 

let join = path.join
  , dist = join(__dirname, './app/means/dist')
  , views = join(__dirname, './app/views')
  , assets = join(__dirname, './app/assets')
  , modules = join(__dirname, './node_modules')

app.set('views', views); 
app.set('view engine', 'ejs');

app.use(express.static(views));
app.use('/assets', express.static(assets));
app.use('/modules', express.static(modules));
app.use('/public', express.static(dist));

app.use(cors());
app.use(cookieParser());
app.use(session( configs.session ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(routes(io, compiler));

server.listen(process.env.port || 91, '127.0.0.1', () => {
    let address = server.address().address
      , port = server.address().port;

    console.log('Server is listen at http://%s:%s', address, port);
});
