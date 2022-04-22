const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

/*const db = mariadb.createPool({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "movable_shopper_mobile",
});
*/

//import routes
const productsRoute=require('./routes/products');


//use routes [express function -> 'use']
app.use('/api/products',productsRoute);

app.listen(3001, () => {
  console.log("Server is running");
});
