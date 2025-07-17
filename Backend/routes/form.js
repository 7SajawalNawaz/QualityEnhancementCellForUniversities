const express = require ("express")
const isAuth = require("../middleware/isAuth")
const router = express.Router()
const { formController } = require ("../controller")
const { addfacultyValidator, updatefacultyValidator } = require ("../validators/form")
const validate = require("../validators/validate")
const { idValidator } = require("../validators/categoryValidator")
const isAdmin = require("../middleware/isAdmin")

// faculty_resume POST
router.post('/faculty_resume' , isAuth , addfacultyValidator , validate , formController.addfaculty)
// faculty_resume UPDATE
router.put('/update/faculty/resume/:id' , isAuth , isAdmin , updatefacultyValidator , idValidator , validate , formController.updatefaculty)
// faculty_resume DELETE
router.delete ('/delete_faculty_resume/:id' , isAuth , idValidator , validate , formController.deletefaculty )
// faculty_resume GET
router.get ('/list/of/faculty/resume/:id' , isAuth , isAdmin , validate , formController.getfaculty)
// get by id 
router.get('/faculty/resume/:id', isAuth, isAdmin, validate, formController.getFacultyById);


module.exports = router 