const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const initDatabase = require('./db/init_db');
const indexRouter = require('./routes/index');

const app = express();

initDatabase().then(() => {
  console.log('Database initialized successfully.');

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);

  app.use(function(req, res, next) {
    next(createError(404));
  });

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });

}).catch((err) => {
  console.error('Database initialization failed:', err.message);
});

module.exports = app;
