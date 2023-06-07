const express = require('express');
const router = express.Router();
const {articleController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')


router.get('/', articleController.getAllArticles)

module.exports = router;