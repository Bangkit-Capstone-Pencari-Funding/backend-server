const router = require('express').Router();
const { homeController } = require('../../controllers')
const authenticate = require('../../middlewares/auth')


router.get('/', authenticate, homeController.getHomeItems)

module.exports = router;