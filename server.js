var express = require('express'),
app = express(),
mongoose = require('mongoose'),
morgan = require('morgan'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
routes = require('./routes'),
http = require('http'),
passport = require("passport"),
jwt = require('jwt-simple');

mongoose.connect('mongodb://localhost:27017/VictorApp');

app.use(express.static(__dirname + '/webApp'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
//app.use(passport.initialize());

//set port
var port = process.env.PORT || 1380;
//define prefix for routes, keeping it simple with /
app.use('/', routes);

app.listen(port, '0.0.0.0', function(){
  console.log("Express server listening on port " + port);
});
