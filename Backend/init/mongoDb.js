const mongoose = require("mongoose");
const { connectionUrl } = require("../config/keys");


const connectMongodb =  async ()=>{
try {
  await mongoose.connect(connectionUrl);
  console.log("Database Connection Successfull ❤️");
} catch (err) {
  console.log(err.message);
}
}

module.exports=connectMongodb;
