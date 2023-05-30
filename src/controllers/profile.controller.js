const { ApiError } = require('../errors')
const { updateUser } = require('../services/user.service')
const catchAsync = require('../utils/catchAsync')


const updateProfile = catchAsync(async (req, res, next) => {
    const createdUser = await updateUser(req)
    res.json({
        payload: {
            updated: createdUser
        }
    })
})



module.exports= {
    updateProfile
}