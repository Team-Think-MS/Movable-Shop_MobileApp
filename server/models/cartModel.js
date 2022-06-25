const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Cart = sequelize.define("cart", {
  cartId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  totalPrice: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  noOfProducts: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Cart;
