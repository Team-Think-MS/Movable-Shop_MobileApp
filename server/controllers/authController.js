const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const password = req.body.password;
  const userName = req.body.userName;
  const fName = req.body.fName;
  const lName = req.body.lName;
  const role = req.body.role;
  const address = req.body.address;
  const phoneNumber = req.body.phoneNumber;
  const location = req.body.location;
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
       const user = User.create({
        email: email,
        password: hashedPw,
        userName: userName,
        fName: fName,
        lName: lName,
        role: role,
        address: address,
        phoneNumber: phoneNumber,
        location: location,
      });
      return user;
    })
    .then((result) => {
      const token = jwt.sign(
        {
          email: result.email,
          userId: result.userId
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token, userId: result.userId, role: result.role, userName: result.userName });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ where : { email: email }})
      .then(user => {
        if (!user) {
          const error = new Error('A user with this email could not be found.');
          error.statusCode = 401;
          res.status(300).json({ userId: "null" });
          throw error;
        }
        loadedUser = user;
        return bcrypt.compare(password, user.password);
      })
      .then(isEqual => {
        if (!isEqual) {
          const error = new Error('Wrong password!');
          error.statusCode = 401;
          res.status(300).json({ userId: "null" });
          throw error;
        }
        const token = jwt.sign(
          {
            email: loadedUser.email,
            userId: loadedUser.userId
          },
          'somesupersecretsecret',
          { expiresIn: '1h' }
        );
        res.status(200).json({ token: token, userId: loadedUser.userId, role: loadedUser.role, userName: loadedUser.userName });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  };
