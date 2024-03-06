const express = require('express')

const {register, login, logout, updateProfile} = require('../controllers/authController')
const protectRoute = require('./recipieRoutes')



const router = express.Router()




router.post('/register', protectRoute, register)
router.post('/login', protectRoute, login)
router.put('/updateProfile/:id', protectRoute, updateProfile)


router.post('/logout', protectRoute, logout)







module.exports = router
