const { check , param } = require("express-validator");
const mongoose = require("mongoose");

const addfacultyValidator = [
  check("name").notEmpty().withMessage("Name is Required"),
  check("personal").notEmpty().withMessage("personal is Required"),
  check("experience").notEmpty().withMessage("experience is Required"),
  check("memberships").notEmpty().withMessage("memberships is Required"),
  check("service").notEmpty().withMessage("service is Required"),
  check("brief_statement_of_research")
    .notEmpty()
    .withMessage("Brief_statement_of_research is Required"),
  check("publications").notEmpty().withMessage("publications is Required"),
  check("research_grants")
    .notEmpty()
    .withMessage("research_grants is Required"),
  check("selected_professional_presentation")
    .notEmpty()
    .withMessage("selected_professional_presentation is Required"),
];

const updatefacultyValidator = [
    check("name").notEmpty().withMessage("Name is Required"),
  check("personal").notEmpty().withMessage("personal is Required"),
  check("experience").notEmpty().withMessage("experience is Required"),
  check("memberships").notEmpty().withMessage("memberships is Required"),
  check("service").notEmpty().withMessage("service is Required"),
  check("brief_statement_of_research")
    .notEmpty()
    .withMessage("Brief_statement_of_research is Required"),
  check("publications").notEmpty().withMessage("publications is Required"),
  check("research_grants")
    .notEmpty()
    .withMessage("research_grants is Required"),
  check("selected_professional_presentation")
    .notEmpty()
    .withMessage("selected_professional_presentation is Required"),
]

const idValidator = [
    param("id").custom(async (id)=>{
        if(id && mongoose.Types.ObjectId.isValid(id)){
            throw "Invalid ID Details"
        }
    })
]

module.exports = {addfacultyValidator , updatefacultyValidator , idValidator}