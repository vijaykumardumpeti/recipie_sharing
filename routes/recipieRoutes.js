const express = require('express')

const {
    getUserRecipies,
    createRecipie,
    getRecipie, 
    getRecipies, 
    updateRecipie, 
    deleteRecipie
} = require('../controllers/recipieController')

const router = express.Router()



router.get('/:userId', getUserRecipies) //getting user recipies

router.post('/', createRecipie)
router.get('/:recipieId', getRecipie)//e
router.get('/', getRecipies)
router.put('/:recipieId', updateRecipie)
router.delete('/:recipieId', deleteRecipie)


module.exports = router

