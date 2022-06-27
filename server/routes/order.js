const express = require('express');

const orderController = require('../controllers/orderController');

const router = express.Router();

router.get('/getOrderByUserId', orderController.getOrderByUserId)


module.exports = router;