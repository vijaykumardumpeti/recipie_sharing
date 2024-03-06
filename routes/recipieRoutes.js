const express = require('express')

const {
    getUserRecipies,
    createRecipie,
    getRecipie, 
    getRecipies, 
    updateRecipie, 
    deleteRecipie
} = require('../controllers/recipieController')

const protectRoute = require('./recipieRoutes')


const router = express.Router()



router.get('/:userId', protectRoute, getUserRecipies) //getting user recipies

router.post('/', protectRoute, createRecipie)
router.get('/:recipieId', protectRoute, getRecipie)//e
router.get('/', protectRoute, getRecipies)
router.put('/:recipieId', protectRoute, updateRecipie)
router.delete('/:recipieId', protectRoute, deleteRecipie)


module.exports = router

