const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

//create product
router.post('/post', productController.createProduct);


module.exports = router;