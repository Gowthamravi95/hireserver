const router =require("express").Router();
const controller =require('../controller/user')


// client api 
router.post('/user',controller.registerUser)

router.get('/',controller.allUser)

module.exports =router;