'use strict';

let express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    ect = require('ect');

let routes = require('./routes/index'),
    summoner = require('./routes/summoner');

let app = express(),
    ECT = ect({ watch: true,
                root: path.join(__dirname, 'views'),
                ext: '.ect'
              });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ect');
app.engine('ect', ECT.render);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

app.use('/', routes);
app.use('/summoner', summoner);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    // jshint unused: false
    res.status(err.status || 500);
    res.render('error', {
      title: res.statusCode + '!',
      errorCode: res.statusCode,
      errorMessage: err.message
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  // jshint unused: false
  res.status(err.status || 500);
  res.render('error', {
    title: res.statusCode + '!',
    errorCode: res.statusCode,
    errorMessage: err.message
  });
});

module.exports = app;
