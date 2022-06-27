const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

//create product
router.post('/post', productController.createProduct);
router.get('/getallproducts', productController.getAllProducts);


module.exports = router;