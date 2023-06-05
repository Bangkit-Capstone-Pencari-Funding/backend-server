const express = require('express')
const router = express.Router()

const authRoute = require('./auth.route')
const profileRoute = require('./profile.route')
const commentsRoute = require('./comment.route')
const recipeRoute = require('./recipe.route')
const articleRoute = require('./article.route')
const homeRoute = require('./home.route')
const uploadRoute = require('./upload.route')


router.use('/home', homeRoute)
router.use('/auth', authRoute)
router.use('/profile', profileRoute)
router.use('/recipe', recipeRoute)
router.use('/recipe', commentsRoute)
router.use('/articles', articleRoute)
router.use('/upload', uploadRoute)

module.exports = router