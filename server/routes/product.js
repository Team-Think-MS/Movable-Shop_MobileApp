const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

//create product
router.post('/createproduct', productController.createProduct);
router.get('/getallproducts', productController.getAllProducts);
router.get('/getProductByStoreId', productController.getProductByStoreId);
router.put('/updateProduct', productController.updateProduct);
router.delete('/deleteProduct', productController.deleteProduct);


module.exports = router;