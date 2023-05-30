const express = require('express');
const router = express.Router();
const {profileController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')



router.put('/update', authenticate, profileController.updateProfile)

module.exports = router;