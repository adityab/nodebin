/*
 * Module dependencies
 */

fs = require('fs');
http = require('http');
mongo = require('mongodb');
express = require('express');
sys = require('sys');

/*
 * Create server
 */
app = module.exports = express.createServer('127.0.0.1');

 /*
  * Connect to mongo db
  */
var pasteModel = mongoose.model('paste');
var userModel = mongoose.model('user');

mongoose.connect('mongodb://localhost/nodebin', function(err) {
    if(err)    
        console.log(err);
});

/* 
 * Configuration
 */
require('./fb_creds.js');

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session( { secret: 'nodebinsecret' }));//?
    app.use(express.logger( { format: ':date :remote-addr :method :status :url'} ));//?
    app.use(app.router);//To mount the application routes. TODO: Create routes/?
    app.use(auth());//?
});

app.configure('development', function() {
    app.use(express.static(__dirname + '/public')); 
    app.use(express.errorHandler( { dumpExceptions: true, showStack: true } ));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

