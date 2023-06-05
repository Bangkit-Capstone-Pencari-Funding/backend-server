const {} = require('../services/image.service')
const catchAsync = require('../utils/catchAsync')

const uploadImage = catchAsync(async (req, res, next) => {
    const result = await getFavoritesService(req)
    res.json({
        payload:{
            result
        }
    })
})

module.exports = {
    uploadImage
}