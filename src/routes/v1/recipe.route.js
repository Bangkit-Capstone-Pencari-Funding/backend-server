const express = require('express');
const router = express.Router()
const recipeController = require('../../controllers/recipe.controller')
const commentRoute = require('./comment.route')

router.get('/', recipeController.getAllRecipes)
router.get('/:recipeId', recipeController.getOneRecipe)

module.exports = router