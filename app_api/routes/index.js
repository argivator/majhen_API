var express = require('express');
var router = express.Router();

var ctrlProducts = require('../controllers/products');

router.get('/products', ctrlProducts.getProducts);
router.post('/product', ctrlProducts.postProduct);
router.get('/product/:id', ctrlProducts.getProduct);
router.delete('/product/:id', ctrlProducts.deleteProduct);
router.put('/product', ctrlProducts.updateProduct);

module.exports = router;