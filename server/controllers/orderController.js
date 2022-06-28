const Order = require('../models/orderModel');

exports.getOrderByUserId = async (req, res, next) => {
  const userId = req.userId;
    await Order.findAll({
      where: {
        userUserId: userId
      },
    })
      .then((order) => {
        res.status(201).json({
          message: "selected store products feched",
          order: order,
        });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  };
  