const express = require ("express")
const isAuth = require ("../middleware/isAuth")
const router = express.Router()
const validate = require ("../validators/validate")
const {idValidator} = require ("../validators/categoryValidator")
const { addphdpassoutValidator } = require ("../validators/phdpassoutValidator")
const { msmphilpassoutController } = require ("../controller")
const isAdmin = require ("../middleware/isAdmin")

router.post("/ms-mphil-passout" , isAuth ,   addphdpassoutValidator ,validate , msmphilpassoutController.addmsmphilpassout )

router.put("/update_ms-mphil-passout/:id" , isAuth , addphdpassoutValidator , idValidator , validate , msmphilpassoutController.updatemsmphilpassout )

router.delete("/delete/ms/mphil/passout/:id" , isAuth , validate , msmphilpassoutController.deletemsmphilpassout)

router.get("/get/ms/mphil/passout/:id" , isAuth , isAdmin , validate , msmphilpassoutController.getmsmphilpassout)

module.exports =  router 