const { getAllArticleService } = require('../services/article.service')
const catchAsync = require('../utils/catchAsync')


const getAllArticles = catchAsync(async (req, res, next) => {
    const result = await getAllArticleService(req)
    res.json({
        payload: {
            result: result
        }
    })
})

module.exports = {
    getAllArticles
}