const express=require('express')
const { ragisteruser, userLogin } = require('../controler/userRagister')

const router=express.Router()


router.route('/create').post(ragisteruser)
router.route('/userLogin').post(userLogin)

module.exports=router