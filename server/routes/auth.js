const express = require("express");
const { body } = require("express-validator/check");

const User = require("../models/userModel");
const authController = require("../controllers/authController");

const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ where: { email: value }}).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 8 }),
    body("fName").trim().not().isEmpty(),
    body("fName").trim().not().isEmpty(),
    body("lName").trim().not().isEmpty(),
    body("role").trim().not().isEmpty(),
    body("address").trim().not().isEmpty(),
    body("phoneNumber").trim().not().isEmpty(),
  ],
  authController.signup
);

router.post("/login", authController.login);

module.exports = router;
