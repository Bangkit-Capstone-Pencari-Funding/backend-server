const express = require('express');
const router = express.Router();
const {authController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')
const passport = require('../../middlewares/googleAuth')



router.post('/signup', authController.signUp)
router.post('/login', authController.login)
router.get('/home',authenticate, authController.index)
router.get('/google/oauth2', passport.authenticate('google',{scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
	'https://www.googleapis.com/auth/userinfo.email'
]}), (req, res, next) => {
    try {
        console.log('masuk di google oauth2')
    } catch (error) {
        next(error);
    }
})
router.get('/google/oauth2/callback', passport.authenticate('google',{session: false}), (req, res, next) => {
    console.log('masuk di callback')
    res.json({success: true, payload: req.user})
})
// router.get('/google/oauth2/callback', (req, res, next) => {
//     console.log('masuk di callback')
//     res.send("yayy")
// })

module.exports = router;