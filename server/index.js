// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const sequelize = require("./util/database");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// /*
// app.post("/create", async (req, res) => {

//     const productName = req.body.productName;
//     const description = req.body.description;
//     const price = req.body.price;
//     try {
//         const result = await db.query(
//             "INSERT INTO products (productName, description , price) VALUES(?,?,?)",
//             [productName, description, price,]
//         );
//         res.send("data inserted");
//     } catch (err) {
//         throw err;
//     }
// });

// //api for send users
// app.get("/employees", async (req, res) => {
//     try {
//         const result = await db.query("SELECT * FROM employees");
//         res.send(result);
//     } catch (err) {
//         throw err;
//     }
// });
// */

// sequelize
//   .sync({ force: true })
//   .then(result => {
//     console.log(result);
//     app.listen(3001);
//     console.log("Server is running");
//   })
//   .catch((err) => {
//     console.log(err);
//   });



const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./util/database');
const Product = require('./models/productModel');
const Store = require('./models/storeModel')

const app = express();


const productRoutes = require('./routes/product');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(productRoutes);


sequelize
  // .sync({ force: true })
  .sync()
  .then(cart => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
