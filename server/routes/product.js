const express = require('express');

const productController = require('../controllers/productController');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

//create product
router.post('/createproduct', isAuth, productController.createProduct);
router.get('/getallproducts', productController.getAllProducts);
router.get('/getProductByStoreId', isAuth,  productController.getProductByStoreId);
router.put('/updateProduct', productController.updateProduct);
router.delete('/deleteProduct', productController.deleteProduct);


module.exports = router;