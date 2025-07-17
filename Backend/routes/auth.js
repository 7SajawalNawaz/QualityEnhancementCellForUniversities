const express = require ('express')
const router = express.Router();
const { authController }= require ('../controller')
const { signupValidator, signinValidator, verifyEmailvalidate, codeVerified, recoverPass, changePasswordValidator, updateProfValid }  = require ('../validators/signupValidator')
const validate = require ('../validators/validate');
const isAuth = require('../middleware/isAuth');


router.post('/signup' , signupValidator , validate , authController.signup)
router.post('/signin', signinValidator , validate , authController.signin)
router.post('/send-email-verification' , verifyEmailvalidate , validate , authController.verifyCode)
router.post('/verify-code' , codeVerified , validate , authController.codeVerification )
router.post('/forgot-password-code' , verifyEmailvalidate , validate , authController.forgotPasswordCode)
router.post('/recover-password' , recoverPass , validate ,authController.recoverPassword)
// UPDATE PASSWORD
router.put('/change-password' , changePasswordValidator , validate , isAuth , authController.changePassword )
router.put('/update-profile' ,  isAuth , updateProfValid ,  validate , authController.updateProfile )

router.get('/current-user' , isAuth , authController.currentUser)

module.exports=router;