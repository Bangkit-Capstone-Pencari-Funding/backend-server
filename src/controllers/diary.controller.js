const catchAsync = require('../utils/catchAsync')
const {getAllUserDiary, checkUserDiary, createUserDiary} = require('../services/diary.service')


const getUserDiary = catchAsync(async (req, res) => {
    const result = await getAllUserDiary(req)
    res.json({
        payload: {
            result: result
        }
    })
})

const checkDiaryDate = catchAsync(async (req, res) => {
    const { date="" } = req.query
    const { childId="" }= req.params
    const check = await checkUserDiary(req, date, childId)
    res.json({
        payload:{
            result: check
        }
    })
})

const createDiary = catchAsync(async (req, res) => {
    const created = await createUserDiary(req)
    res.json({
        payload:{
            result: created
        }
    })
})


module.exports = {
    getUserDiary,
    checkDiaryDate,
    createDiary
}