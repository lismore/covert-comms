const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('../routes/index');
const contacts = require('../routes/contacts');
const about = require('../routes/about');
const dashboard = require('../routes/dashboard');
const inbox = require('../routes/inbox');
const message = require('../routes/message');
const settings = require('../routes/settings');

const app = express();

//app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/css')));
app.use(express.static(path.join(__dirname, '../public/js')));

app.set('views', path.join(__dirname, '../views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', routes);
app.use('/contacts', contacts);
app.use('/about', about);
app.use('/dashboard', dashboard);
app.use('/inbox', inbox);
app.use('/message', message);
app.use('/settings', settings);

app.get('/', (req, res) => {
    res.send('Hello Covert-Comms!');
});

app.get('/about', (req, res) => {
    res.send('Hello Covert-Comms!');
});

app.get('/dashboard', (req, res) => {
    res.send('Hello Covert-Comms!');
});

app.get('/inbox', (req, res) => {
    res.send('Hello Covert-Comms!');
});

app.get('/message', (req, res) => {
    res.send('Hello Covert-Comms!');
});

app.get('/contacts', (req, res) => {
    res.send('Hello Covert-Comms!');
});

app.get('/settings', (req, res) => {
    res.send('Hello Covert-Comms!');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const server = app.listen(3000, () => {
    console.log('DApp running on port 3000');
});



module.exports = server;