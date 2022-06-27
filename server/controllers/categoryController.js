const Category = require('../models/categoryModel');

exports.getAllCategories = async (req, res, next) => {
    await Category.findAll({})
      .then( categories => {
            res.status(201).json({
              message: 'all categories feched',
              data: categories
            });
        }
      )
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
}