const { check } = require("express-validator");
const validateEmail = require("./validateEmail");
const mongoose = require("mongoose");

// Signup validation rules
const signupValidator = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long")
    .notEmpty()
    .withMessage("Password is required"),
];

// Signin validation rules
const signinValidator = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long")
    .notEmpty()
    .withMessage("Password is required"),
];

// for email verification
const verifyEmailvalidate = [
  check("email")
    .notEmpty()
    .withMessage("Invalid email ")
    .isEmail()
    .withMessage("Email is required"),
];

// code verification on email
const codeVerified = [
  check("email")
    .notEmpty()
    .withMessage("Invalid Email")
    .isEmail()
    .withMessage("Email is required "),

  check("code").notEmpty().withMessage("Invalid Code"),
];

// for recover password
const recoverPass = [
  check("email")
    .notEmpty()
    .withMessage("Invalid Email")
    .isEmail()
    .withMessage("Email is required "),

  check("code").notEmpty().withMessage("Invalid Code"),

  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long")
    .notEmpty()
    .withMessage("Password is required"),
];

// change password validator
const changePasswordValidator = [
  check("oldPassword").notEmpty().withMessage("Old password is required"),
  check("newPassword")
    .notEmpty()
    .withMessage("New password is required")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
];

// update Profile validator
const updateProfValid = [
  check("email").custom(async (email) => {
    if (email) {
      const isValidemail = validateEmail(email);
      if (!isValidemail) {
        throw "Invalid Email";
      }
    }
  }),

  check("profilePic").custom(async (profilePic) => {
    if (profilePic && !mongoose.Types.ObjectId.isValid(profilePic)) {
      throw "Invalid Profile picture";
    }
  }),
];

module.exports = {
  signupValidator,
  signinValidator,
  verifyEmailvalidate,
  codeVerified,
  recoverPass,
  changePasswordValidator,
  updateProfValid,
};
