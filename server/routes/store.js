const express = require('express');

const storeController = require('../controllers/storeController');

const isAuth = require('../middleware/is-auth')

const router = express.Router();

router.post('/createStore', isAuth, storeController.createStore);
router.get('/getallstores', storeController.getAllStores);
router.get('/getStoreByUserId',isAuth, storeController.getStoreByUserId);

module.exports = router;