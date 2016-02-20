
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Models
var productSchema = new mongoose.Schema({
	nombre: String,
	puntos: Number
});

// return Model
module.exports = restful.model('Products', productSchema)
