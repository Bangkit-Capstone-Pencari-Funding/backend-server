const express = require('express');
const router = express.Router();
const {authController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')



router.post('/signup', authController.signUp)
router.post('/login', authController.login)
router.get('/home',authenticate, authController.index)

module.exports = router;