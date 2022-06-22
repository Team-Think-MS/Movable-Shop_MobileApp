const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Store = sequelize.define("store", {
  storeId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  storeName: Sequelize.STRING,
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// Store.hasMany(Product);

module.exports = Store;