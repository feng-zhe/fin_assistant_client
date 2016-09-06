"use strict";

var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev')); // for logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// default home page
app.get('/', function(req, res, next) {
    res.sendFile('views/app.html', {
        root: __dirname
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('not found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    console.log('error handling ' + err);
    res.status(err.status);
    res.sendFile('not supported');
});

app.listen(3000);
