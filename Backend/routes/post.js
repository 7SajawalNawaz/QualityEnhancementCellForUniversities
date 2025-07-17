const express = require ("express")
const router = express.Router()
const isAuth = require ('../middleware/isAuth')
const { postController } = require ("../controller")
const validate = require ("../validators/validate")
const { addPostValidator, updatePostValidator, idValidator } = require("../validators/postValidator")

router.post('/' , isAuth , addPostValidator , validate , postController.addPost )

// update post 

router.put('/:id' , isAuth , updatePostValidator , idValidator , validate , postController.updatePost)

// delete post 

router.delete('/:id' , isAuth , idValidator , validate , postController.deletePost)

// get posts or lists of posts 

router.get('/' , isAuth , postController.getPost)

// get single post by id 

router.get('/:id' , isAuth , idValidator , postController.getsinglePost)

module.exports = router ;