const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const WishList = sequelize.define("wishlist", {
    wishListId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  });
  
  module.exports = WishList;