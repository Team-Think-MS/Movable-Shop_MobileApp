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
const Store = require('./models/storeModel');
const Cart = require('./models/cartModel');
const Category = require('./models/categoryModel');
const Order = require('./models/orderModel');
const Payment = require('./models/paymentModel');
const Rating = require('./models/ratingModel');
const SellerBankAccount = require('./models/sellerBankAccountModel');
const User = require('./models/userModel');
const WishList = require('./models/wishListModel');
const ProductCart = require('./models/productCartModel');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));


const productRoutes = require('./routes/product');
const storeRoutes = require('./routes/store');
const categoryRoutes = require('./routes/category')

app.use('/store', storeRoutes);
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);


Store.hasMany(Product);
Product.belongsTo(Store);
User.hasOne(Store);
Store.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);
User.hasOne(SellerBankAccount);
SellerBankAccount.belongsTo(User);
User.hasMany(Category);
Category.belongsTo(User);
Order.hasOne(Cart);
Cart.belongsTo(Order);
Order.hasOne(Payment);
Payment.belongsTo(Order);
User.hasMany(Payment);
Payment.belongsTo(User);
Store.hasMany(Rating);
Rating.belongsTo(Store);
User.hasMany(Rating);
Rating.belongsTo(User);
User.hasOne(WishList);
WishList.belongsTo(User);
WishList.hasMany(Product);
Product.belongsTo(WishList);
Category.hasMany(Store);
Store.belongsTo(Category)

Cart.belongsToMany(Product, { through: ProductCart });
Product.belongsToMany(Cart, { through: ProductCart });

sequelize
  // .sync({ force: true })
  .sync()
  .then(cart => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
