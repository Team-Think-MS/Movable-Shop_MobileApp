const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Category = sequelize.define("category", {
  categoryId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoryName: Sequelize.STRING,
});

module.exports = Category;
