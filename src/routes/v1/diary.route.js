const express = require('express');
const router = express.Router();
const {diaryController} = require('../../controllers')
const authenticate = require('../../middlewares/auth')


router.get('/', authenticate, diaryController.getUserDiary )
router.get('/check/:childId', authenticate, diaryController.checkDiaryDate )
// router.post('/', authenticate, diaryController.createDiary )

module.exports = router;