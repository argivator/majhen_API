var mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    available: {type: Boolean, required: true},
    dateCreated: {type: String, required: true}
});



mongoose.model('Product', productsSchema, 'Products');