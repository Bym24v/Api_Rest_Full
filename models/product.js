
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Models
var productSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

// return Model
module.exports = restful.model('Products', productSchema)