const Product = require("../models/productModel");

exports.createProduct = async (req, res, next) => {
  //const productId = req.body.productId;
  const productName = req.body.productName;
  const price = req.body.price;
  const picture = req.body.picture;
  const description = req.body.description;
  const stockQty = req.body.stockQty;
  // Create post in db
  await Product.create({
    productName: productName,
    price: price,
    picture: picture,
    description: description,
    stockQty: stockQty,
  });

  res.status(201).json({
    message: "Post created successfully!",
    post: {
      productId: new Date().toISOString(),
      productName: productName,
      price: price,
      picture: picture,
      description: description,
      stockQty: stockQty,
    },
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
