var mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    avalible: {type: Boolean},
    dateCreated: {type: String}
});



mongoose.model('Product', productsSchema, 'Products');