const express = require('express');
const router = express.Router();
const {authController} = require('../../controllers')


router
    .route('/users')
    .get(authController.index)
    .post(authController.post)
    
router
    .route("/users/:id")
    .get(authController.getOneUser)
    .put(authController.put)
    .delete(authController.deleted)

module.exports = router;