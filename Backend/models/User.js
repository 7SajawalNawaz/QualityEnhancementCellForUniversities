const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 4 },
// role 1 -> super admin 2-> normal - admin 3-> normal person 
  role: { type: Number, default: 3 },
  verificationCode : String ,
  isVerified :{type : Boolean , default : false},
  forgotpasswordCode : String ,
  profilePic : {type : mongoose.Types.ObjectId , ref : "file"}
} , {timestamps : true});

const User = mongoose.model('users' , userSchema)

module.exports=User;