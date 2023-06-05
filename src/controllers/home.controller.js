const {getAllRecipeService, getFavoritesService} = require('../services/recipe.service')
const catchAsync = require('../utils/catchAsync')

const getHomeItems = catchAsync(async (req, res, next) => {
    const result = await getFavoritesService(req)
    res.json({
        payload:{
            user:req.user,
            recipe: result
        }
    })
})

module.exports = {
    getHomeItems
}