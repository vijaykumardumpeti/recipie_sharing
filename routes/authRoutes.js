const express = require('express')

const {register, login, logout, updateProfile} = require('../controllers/authController')
// const protectRoute = require('./recipieRoutes')



const router = express.Router()




router.post('/register', register)
router.post('/login', login)
router.put('/updateProfile/:id', updateProfile)


router.post('/logout', logout)







module.exports = router
