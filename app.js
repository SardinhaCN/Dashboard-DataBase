const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

let indexRouter = require('./routes/indexRoute');

let app = express();

// configuração do motor de vizualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// capturar 404 e encaminhar para o manipulador de erros
app.use(function(req, res, next) {
  next(createError(404));
});

// manipulador de erros
app.use(function(err, req, res, next) {
  // definir locais, fornecendo apenas erros no desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // renderizar a página de erro
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
