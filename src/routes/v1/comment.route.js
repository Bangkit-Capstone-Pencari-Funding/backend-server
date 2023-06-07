const express = require('express');
const router = express.Router();
const {commentsController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')


router.post('/:recipeId/comments', authenticate, commentsController.createComment)
router.get('/:recipeId/comments/:commentsId',authenticate, commentsController.getOneComment)
router.get('/:recipeId/comments',authenticate, commentsController.getAllRecipeComments)

module.exports = router;