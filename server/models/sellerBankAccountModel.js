const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const SellerBankAccount = sequelize.define("sellerBankAccount", {
  accountNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  bankName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  branchName: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = SellerBankAccount;
