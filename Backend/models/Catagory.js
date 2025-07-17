const mongoose = require("mongoose");

const catagorySchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: String,
    // it means that updated by user from user schema
    updatedBy: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  },
  { timestamps: true }
);

const Catagory = mongoose.model("catagory", catagorySchema);
module.exports = Catagory;
