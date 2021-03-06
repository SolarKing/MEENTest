// get the packages we need ///////////////////////////////////////////////////
var express     = require('express');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt     = require('jsonwebtoken'); // create, sign, and verify tokens
var config  = require('./config'); // get our config file
var User    = require('./app/models/user'); // get our mongoose model

var app = express();

// configuration //////////////////////////////////////////////////////////////
var port = process.env.PORT || 8080;
mongoose.connect(config.database); // connect to the database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL params
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// routes /////////////////////////////////////////////////////////////////////
// basic route
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + "/api");
});

// api routes /////////////////////////////////////////////////////////////////
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
