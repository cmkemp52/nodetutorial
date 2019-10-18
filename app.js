var express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');

var indexRouter = require('./routes/index'),
    musicRouter = require('./routes/music');

var app = express();

app.engine('html',es6Renderer);
app.set('views','./views');
app.set('view engine',"html");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/music', musicRouter);
module.exports = app;
