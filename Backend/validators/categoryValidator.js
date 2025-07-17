const { check , param } = require("express-validator");
const mongoose = require ('mongoose')

// add category validator
const addcategoryValidator = [
  check("title").notEmpty().withMessage("Title is required"),
];

// update category validator
const idValidator = [
  param("id").custom( async (id)=>{
    if(id && !mongoose.Types.ObjectId.isValid(id)){
      throw "Invalid category id"
    }
  })
]

module.exports = {addcategoryValidator , idValidator};
