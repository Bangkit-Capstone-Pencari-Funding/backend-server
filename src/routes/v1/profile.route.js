const express = require('express');
const router = express.Router();
const {profileController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')



router.get('/', authenticate, profileController.getProfileInfo)
router.put('/', authenticate, profileController.updateProfile)
router.post('/child', authenticate, profileController.createChildProfile)

module.exports = router;