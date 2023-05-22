const express = require('express');
const router = express.Router();
const {authController} = require('../../controllers')


router
    .route('/')
    .get(authController.index)

module.exports = router;