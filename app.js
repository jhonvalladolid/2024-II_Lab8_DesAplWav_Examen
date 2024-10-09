var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var hbs = require('hbs');  // Asegúrate de importar hbs para registrar el helper

// Registrar el helper eq para comparar valores
hbs.registerHelper('eq', function (a, b) {
  return a == b;
});

// Registrar los partials (navbar, etc.)
hbs.registerPartials(__dirname + '/views/partials');

// Importa las rutas para roles, estados, usuarios y login
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rolesRouter = require('./routes/routeRoles');
var estadosRouter = require('./routes/routeEstados');
var usuariosRouter = require('./routes/routeUsuarios');
var loginRouter = require('./routes/routeLogin');  // Nueva ruta de login

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configura method-override para usar PUT y DELETE en formularios HTML
app.use(methodOverride('_method'));

// Registrar rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', rolesRouter);
app.use('/', estadosRouter);
app.use('/', usuariosRouter);
app.use('/', loginRouter);  // Registrar la ruta de login

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
