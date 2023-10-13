const router = require('express').Router()
const {Login,userVerification} = require('../Authcontroller/auth')

router.post("/login",Login)
router.get("/",userVerification)

module.exports = {router}