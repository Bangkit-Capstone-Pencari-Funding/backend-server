const express = require('express');
const router = express.Router();
const multer = require('../../middlewares/multer')
const {imageController} = require('../../controllers')
const authenticate = require('../../middlewares/auth');
const storage = require('../../config/cloudStorage');
const { ApiError } = require('../../errors');
const httpStatus = require('http-status');





router.post('/image/:bucketName', authenticate, multer.single('image'), imageController.uploadImage)

module.exports = router;