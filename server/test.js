const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = mariadb.createPool({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "movable_shopper_mobile",
});

app.listen(3001, () => {
  console.log("Server is running");
});
