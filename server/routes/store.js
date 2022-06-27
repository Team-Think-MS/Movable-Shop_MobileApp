const express = require('express');

const storeController = require('../controllers/storeController');

const router = express.Router();

router.post('/createStore', storeController.createStore);
router.get('/getallstores', storeController.getAllStores);
router.get('/getStoreByUserId', storeController.getStoreByUserId);

module.exports = router;