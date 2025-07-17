const { check , param } = require("express-validator");
const mongoose = require("mongoose");

const addphdpassoutValidator = [
    check("name").notEmpty().withMessage("Name is required"),
    check("degree_title").notEmpty().withMessage("Degree title is required"),
    check("doa").notEmpty().withMessage("Date of admission is required"),
    check("doc").notEmpty().withMessage("Date of completion is required"),
    check("thesis_title").notEmpty().withMessage("Thesis title is required"),
    check("supervisor")
      .notEmpty()
      .withMessage("Supervisor name is required"),
]


const idValidator = [
    param("id").custom(async (id)=>{
        if(id && mongoose.Types.ObjectId.isValid(id)){
            throw "Invalid ID Details"
        }
    })
]

module.exports = {idValidator , addphdpassoutValidator}
