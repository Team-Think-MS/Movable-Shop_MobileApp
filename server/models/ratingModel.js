const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Rating = sequelize.define("rating", {
  ratingId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  numericRating: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  ratDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Rating;
