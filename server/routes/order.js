const express = require('express');

const orderController = require('../controllers/orderController');
const isAuth = require('../middleware/is-auth')

const router = express.Router();

router.get('/getOrderByUserId', isAuth,  orderController.getOrderByUserId)


module.exports = router;