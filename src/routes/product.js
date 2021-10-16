const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/products', productsController.getProducts);

router.post('/products', productsController.createProduct);

module.exports = router;