const { updateUser, getUser} = require('../services/user.service')
const { createChild  } = require('../services/child.services')
const catchAsync = require('../utils/catchAsync')


const getProfileInfo = catchAsync(async (req, res) => {
    const result = await getUser(req, {
        children: true
    })
    res.json({
        payload: {
            result
        }
    })
})

const updateProfile = catchAsync(async (req, res) => {
    const updated = await updateUser(req)
    res.json({
        payload: {
            updated: updated
        }
    })
})

const createChildProfile = catchAsync(async (req, res) => {
    const created = await createChild(req)
    res.json({
        payload: {
            created
        }
    })
})



module.exports= {
    updateProfile,
    createChildProfile,
    getProfileInfo
}