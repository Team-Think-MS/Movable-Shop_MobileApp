const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const ProductCart = sequelize.define("productCart", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  });
  
  module.exports = ProductCart;