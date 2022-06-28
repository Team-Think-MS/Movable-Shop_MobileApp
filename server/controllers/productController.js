const Product = require("../models/productModel");
const Store = require("../models/storeModel");

exports.createProduct = async (req, res, next) => {
  const store = await Store.findOne({ where: { userUserId: req.userId } });

  const productName = req.body.productName;
  const price = req.body.price;
  const picture = req.body.picture;
  const description = req.body.description;
  const stockQty = req.body.stockQty;
  const storeStoreId = store.storeId;
  await Product.create({
    productName: productName,
    price: price,
    picture: picture,
    description: description,
    stockQty: stockQty,
    storeStoreId: storeStoreId,
  })
    .then((prodct) => {
      res.status(201).json({
        message: "Post created successfully!",
        product: prodct,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getAllProducts = async (req, res, next) => {
  await Product.findAll({})
    .then((prodct) => {
      res.status(201).json({
        message: "all products feched",
        products: prodct,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getProductByStoreId = async (req, res, next) => {
  const store = await Store.findOne({ where: { userUserId: req.userId } });
  await Product.findAll({
    where: {
      storeStoreId: store.storeId,
    },
  })
    .then((prodct) => {
      res.status(201).json({
        message: "selected store products feched",
        products: prodct,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateProduct = async (req, res, next) => {
  const productName = req.body.productName;
  const price = req.body.price;
  const picture = req.body.picture;
  const description = req.body.description;
  const stockQty = req.body.stockQty;
  const product = await Product.findByPk(req.body.id);
  await product.update({
    productName: productName,
    price: price,
    picture: picture,
    description: description,
    stockQty: stockQty,
  });
  await product
    .save()
    .then((product) => {
      res.status(201).json({
        message: "selected store products feched",
        products: product,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findByPk(req.body.id);
  await product
    .destroy()
    .then(() => {
      res.status(201).json({
        message: "selected products deleted",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
