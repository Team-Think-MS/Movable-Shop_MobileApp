const Store = require("../models/storeModel");

exports.createStore = async (req, res, next) => {
  const storeName = req.body.storeName;
  const picture = req.body.picture;
  const description = req.body.description;
  const categoryId = req.body.categoryId;
  let creater = req.userId;
  await Store.create({
    storeName: storeName,
    picture: picture,
    description: description,
    userUserId: creater,
    categoryCategoryId: categoryId

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


exports.getStoreByUserId = async (req, res, next) => {
  let creater = req.userId;
  await Store.findAll({
    where: {
      userUserId: creater,
    },
  })
    .then((store) => {
      res.status(201).json({
        message: "selected store products feched",
        store: store,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


exports.updateStore = async (req, res, next) => {
  const storeName = req.body.storeName;
  const picture = req.body.picture;
  const description = req.body.description;
  const categoryId = req.body.categoryId;
  const store = await Store.findByPk(req.userId);
  await store.update({
    storeName: storeName,
    picture: picture,
    description: description,
    categoryCategoryId: categoryId
  });
  await store
    .save()
    .then((store) => {
      res.status(201).json({
        message: "selected store edited",
        products: store,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
