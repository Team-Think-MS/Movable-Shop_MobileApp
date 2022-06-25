const Product = require("../models/productModel");

exports.createProduct = async (req, res, next) => {
  const productId = req.body.productId;
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

exports.getProduct = async (req, res, next) => {
  const product = await Product.findAll();
  res.status(202).json(product);
};
