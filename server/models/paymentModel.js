const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Payment = sequelize.define("payment", {
  paymentId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  refNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  payDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});

module.exports = Payment;
