const mariadb = require("mariadb");


const db = mariadb.createPool({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "movable_shopper_mobile",
  });

  module.exports={
      database:db
  };