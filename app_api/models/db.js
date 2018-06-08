var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/products';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log('Mongoose je povezan na ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose napaka pri povezavi: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose je zaprl povezavo');
});

require('./products');