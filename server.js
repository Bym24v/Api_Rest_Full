
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_ful', function(err) {
	if(!err){console.log('conectado a Mongodb')}
	else{console.log('ERROR: no es posible conectarse a' + err)}
});

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start Server
app.listen(3000);
console.log('Server corriendo en --> localhost:3000')