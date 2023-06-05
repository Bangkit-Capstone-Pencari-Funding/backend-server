const express = require('express');
const router = express.Router();
const {commentsController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')


router.post('/:recipeId/comments', authenticate, commentsController.createComment)
router.get('/:recipeId/comments', commentsController.getAllRecipeComments)
router.get('/:recipeId/comments/:commentsId', commentsController.getOneComment)

module.exports = router;