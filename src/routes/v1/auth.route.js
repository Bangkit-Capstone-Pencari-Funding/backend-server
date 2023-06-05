const express = require('express');
const router = express.Router();
const {authController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')
const passport = require('../../middlewares/googleAuth')



router.post('/signup', authController.signUp)
router.post('/login', authController.login)


router.get('/google/oauth2', passport.authenticate('google',{scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
	'https://www.googleapis.com/auth/userinfo.email'
]}))


router.get('/google/oauth2/callback', passport.authenticate('google',{session: false}), (req, res, next) => {
    res.json({success: true, payload: req.user})
})

module.exports = router;