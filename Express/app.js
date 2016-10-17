var express = require('express');
var path = require('path');
//logger is used to output info in the terminal
var logger = require('morgan');
//handling cookies
var cookieParser = require('cookie-parser');
//for parsing json files
var bodyParser = require('body-parser');

//link to index middleware stored in routes variable
var routes = require('./routes/index');
//link to about middleware stored in about variable
var about = require('./routes/about');
//assigns express to the app variable
var app = express();

//maps json file to a local(global) variable which can be called throughout the app
app.locals.videodata = require("./videodata.json");


// view engine setup, points to dir views are stored
app.set('views', path.join(__dirname, 'views'));
//sets what type of files the views are
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//points "/" path to the middleware stored in routes variable
app.use('/', routes);
//points "/about" path to the middleware stored in about variable
app.use('/about', about);

//############ Error Catching ##############

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
