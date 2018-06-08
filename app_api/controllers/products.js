var mongoose = require('mongoose');
var Product = mongoose.model('Product');

var returnJSON = function(res, status, content) {
    res.status(status);
    res.json(content);
};

// [GET] /products
module.exports.getProducts = function(req, res) {
    Product
		.find()
        .select({
            _id: 0,
            name: 1,
            price: 1,
            available: 1,
            dateCreated: 1
        })
        .exec(function(err, results) {
            if (err)
                returnJSON(res, 404, err);
            else 
                returnJSON(res, 200, results);
        });
}

// [POST] /product
module.exports.postProduct = function(req, res) {
    if (!req.body ||
        !req.body.name ||
        !req.body.price ||
        !req.body.available) {
            returnJSON(res, 400, {'message': 'Name, price and available are required fields!'});
            return;
        }
    Product
        .create({
            name: req.body.name,
            price: req.body.price,
            available: req.body.available,
            dateCreated: new Date().toString()
        }, function (err, product) {
            if (err)
                returnJSON(res, 400, err);
            else 
                returnJSON(res, 201, product);
        })
}

// [GET] /product/:id
module.exports.getProduct = function(req, res) {
    Product
        .findById(req.params.id)
        .select({
            _id: 0,
            name: 1,
            price: 1,
            available: 1,
            dateCreated: 1
        })
        .exec(function(err, product) {
            if (!product)
                returnJSON(res, 404, {'message': 'Can\'t find product with this id.'});
            else if (err)
                returnJSON(res, 404, err);
            else 
                returnJSON(res, 200, product);
        });
}

// [DELETE] /product/:id
module.exports.deleteProduct = function(req, res) {
    Product
        .findByIdAndRemove(req.params.id)
        .exec(
            function(err, product) {
                if (!product)
                    returnJSON(res, 404, {'message': 'Can\'t find product with this id.'});
                else if (err)
                    returnJSON(res, 404, err);
                else
                    returnJSON(res, 204, {'message': 'Product with id: '+req.params.id+' is successfully deleted.'});
            } 
        );
}

// [PUT] /product
module.exports.updateProduct = function(req, res) {
    if (!req.body.id) {
        returnJSON(res, 400, {'message': 'Id is required field.'})
        return;
    }
    Product
        .findById(req.body.id)
        .exec(
            function(err, product) {
                if (!product)
                    returnJSON(res, 404, {'message': 'Can\'t find product with this id.'});
                else if (err)
                    returnJSON(res, 404, err);
                else {
                    if (req.body.name)
                        product.name = req.body.name;
                    if (req.body.price)
                        product.price = req.body.price;
                    if (req.body.available)
                        product.available = req.body.available;
                    product.save(
                        function(err, product) {
                            if (err)
                                returnJSON(res, 404, err);
                            else
                                returnJSON(res, 200, product);
                        });
                }
            });
}