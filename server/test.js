const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({origin:true,credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

/*const db = mariadb.createPool({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "movable_shopper_mobile",
});
*/

//import routes
const productsRoute=require('./routes/products');
const categoryRoute=require('./routes/category');
const storeRoutes=require('./routes/Store');

//use routes [express function -> 'use']
app.use('/api/products',productsRoute);
app.use('/api/stores',storeRoutes);
app.use('/api/category',categoryRoute);

app.listen(3002, () => {
  console.log("Server is running");
});

