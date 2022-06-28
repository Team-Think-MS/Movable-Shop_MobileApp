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
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const authRoutes = require('./routes/auth');

app.use('/store', storeRoutes);
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);
app.use('/order', orderRoutes);
app.use('/auth', authRoutes);


app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});


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
