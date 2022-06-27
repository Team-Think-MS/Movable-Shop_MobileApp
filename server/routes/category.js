const express = require('express');

const categoryController = require('../controllers/categoryController')

const router = express.Router();

router.get('/getallcategories' , categoryController.getAllCategories )

module.exports = router;