const express = require ("express")
const isAuth = require ("../middleware/isAuth")
const router = express.Router()
const validate = require ("../validators/validate")
const {idValidator} = require ("../validators/categoryValidator")
const { addphdpassoutValidator } = require ("../validators/phdpassoutValidator")
const { phdpassoutController } = require ("../controller")
const isAdmin = require ("../middleware/isAdmin")


router.post("/phdpassout" , isAuth , addphdpassoutValidator ,validate , phdpassoutController.addphdpassout )

router.put("/update_phdpassout/:id" , isAuth , addphdpassoutValidator , idValidator , validate , phdpassoutController.updatephdpassout )

router.delete("/delete_phdpassout/:id" , isAuth , validate , phdpassoutController.deletephdpassout)

router.get("/get_phdpassout/:id" , isAuth , isAdmin , validate , phdpassoutController.getphdpassout)

module.exports =  router 