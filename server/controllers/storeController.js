const Store = require("../models/storeModel");

exports.createStore = async (req, res, next) => {
  const storeName = req.body.storeName;
  const picture = req.body.picture;
  const description = req.body.description;
  //const categoryId = req.body.categoryId;
  //let creater = req.userId;
  await Store.create({
    storeName: storeName,
    picture: picture,
    description: description,
    // userId: creater,
  })
    .then((result) => {
      res.status(201).json({
        message: "Store created successfully!",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getAllStores = async (req, res, next) => {
  await Store.findAll({})
    .then((store) => {
      res.status(201).json({
        message: "all categories feched",
        stores: store,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
