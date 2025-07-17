const express = require ('express')
const router = express.Router()
const validate = require ('../validators/validate')
const isAuth = require ('../middleware/isAuth')
const {addcategoryValidator, idValidator} = require('../validators/categoryValidator')
const { categoryController } = require('../controller')
const isAdmin = require ('../middleware/isAdmin')


// post category
router.post('/' , isAuth , isAdmin , addcategoryValidator , validate , categoryController.addCategory)
// update category
router.put('/:id' , isAuth , isAdmin , idValidator , validate , categoryController.updateCategory)
// delete category
router.delete('/:id' , isAuth , isAdmin ,  idValidator , validate , categoryController.deleteCategory  )
// get category || search category 
router.get ('/' , isAuth , categoryController.getCategory)
// detailed get category 
router.get('/:id' , isAuth , idValidator , validate , categoryController.getdetailCategory)



module.exports = router ;