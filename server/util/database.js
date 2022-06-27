const Sequelize = require('sequelize');

const sequelize = new Sequelize('movableshopDB', 'root', '9811Wggi@', {
  dialect: 'mariadb',
  host: 'localhost'
});

module.exports = sequelize;