const comparePassword = require("../hashpassword/comparePassword");
const generateWebtoken = require("../hashpassword/generateWebtoken");
const hashPassword = require("../hashpassword/hashPassword");
const User = require("../models/User");
const generateCode = require("../hashpassword/generateCode");
const sendEmail = require("../hashpassword/sendEmail");
const File = require("../models/File");

// Sign_Up Controller
const signup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const isEmailexsist = await User.findOne({ email });
    if (isEmailexsist) {
      res.code = 400;
      throw new Error("Email Already Exsists");
    }

    const hashPass = await hashPassword(password);

    const newUser = new User({ name, email, password: hashPass, role });
    await newUser.save();
    res.status(201).json({
      code: 201,
      status: true,
      message: "User Registered Successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Sign_In Controller
const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.code = 400;
      throw new Error("Invalid email & password");
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      res.code = 400;
      throw new Error("Password is incorrect ");
    }

    const token = generateWebtoken(user);
    res.status(200).json({
      code: 200,
      status: true,
      message: "Sign in Successfull",
      data: { token , role: user.role },
    });
  } catch (err) {
    next(err);
  }
};

// Sending_Code on Email Controller
const verifyCode = async (req, res, next) => {
  try {
    const { email } = req.body;
    const users = await User.findOne({ email });
    if (!users) {
      res.code = 400;
      throw new Error("Email Not Found");
    }
    if (users.isVerified) {
      res.code = 400;
      throw new Error("User Already Verified");
    }

    // code generator
    const code = generateCode(6);
    users.verificationCode = code;
    await users.save();

    // send email
    await sendEmail({
      emailTo: users.email,
      subject: "Email Verification code",
      code,
      content: "Verify your account",
    });
    res.status(200).json({
      code: 200,
      status: true,
      message: "Verification email send successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Verification of code through email Controller
const codeVerification = async (req, res, next) => {
  try {
    const { email, code } = req.body;
    const users = await User.findOne({ email });
    if (!users) {
      res.code = 400;
      throw new Error("User Not Found");
    }
    if (users.verificationCode !== code) {
      res.code = 400;
      throw new Error("Code is incorrect");
    }
    users.isVerified = true;
    users.verificationCode = null;
    await users.save();

    res
      .status(200)
      .json({ code: 200, status: true, message: "User Verified Successfully" });
  } catch (err) {
    next(err);
  }
};

// forgot password code Controller
const forgotPasswordCode = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.code = 400;
      throw new Error("Email Not found");
    }

    const code = generateCode(6);
    user.forgotpasswordCode = code;
    await user.save();

    await sendEmail({
      emailTo: user.email,
      subject: "Forgot password code",
      code,
      content: "Change your password",
    });

    res.status(200).json({
      code: 200,
      status: true,
      message: "Forgot password code sent successfully",
    });
  } catch (err) {
    next(err);
  }
};

// Password code verification for forgot password Controller
const recoverPassword = async (req, res, next) => {
  try {
    const { email, password, code } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.code = 400;
      throw new Error("User not found");
    }

    if (user.forgotpasswordCode !== code) {
      res.code = 400;
      throw new Error("Invalid code !");
    }

    const hashedpassword = await hashPassword(password);
    user.password = hashedpassword;
    user.forgotpasswordCode = null;
    await user.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Password recovered successfully",
    });
  } catch (err) {
    next(err);
  }
};

// change password Controller
const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const { _id } = req.user;

    const user = await User.findById(_id);

    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }

    const match = await comparePassword(oldPassword, user.password);

    if (!match) {
      res.code = 400;
      throw new Error("Old password doesnot match");
    }
    if (oldPassword === newPassword) {
      res.code = 400;
      throw new Error("Old password & new password not be same");
    }

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Password changed successfully",
    });
  } catch (err) {
    next(err);
  }
};

// update profile controller
const updateProfile = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { name, email, profilePic } = req.body;

    const user = await User.findById(_id).select(
      "-password -verificationCode -forgotpasswordCode"
      // if we donot want these field to show we just select it
      // is not going to show in update profile
    );

    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }

    if (email) {
      const isUserExit = await User.findOne({ email });
      if (
        isUserExit &&
        isUserExit.email === email &&
        String(user._id) !== String(isUserExit._id)
      ) {
        res.code = 400;
        throw new Error("Email already exsist");
      }
    }

    if (profilePic) {
      const file = await File.findById(profilePic);
      if (!file) {
        res.code = 400;
        throw new Error("File not found");
      }
    }

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.profilePic = profilePic;

    if (email) {
      user.isVerified = false;
    }

    await user.save();
    res.status(200).json({
      code: 200,
      status: true,
      message: "User profile updated successfully",
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

// get current user details

const currentUser = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const user = await User.findById(_id)
      .select("-password -verificationCode -forgotpasswordCode")
      .populate("profilePic");

    if (!user) {
      res.code = 400;
      throw new Error("User not found");
    }

    res.status(200).json({
      status: true,
      code: 200,
      message: "Get user successfully",
      data: { user },
    });
  } catch (err) {}
};


module.exports = {
  signup,
  signin,
  verifyCode,
  codeVerification,
  forgotPasswordCode,
  recoverPassword,
  changePassword,
  updateProfile,
  currentUser,
};
