const catchAsync = require("../utils/catchAsync");
const {getAllRecipeService, getRecipeById} = require("../services/recipe.service")


const getAllRecipes = catchAsync(async (req, res) => {
    const result = await getAllRecipeService(req)
    res.json({
        payload: {
            result: result
        }
    })
})

const getOneRecipe = catchAsync(async (req, res) =>{
    const result = await getRecipeById(req)
    res.json({
        payload: {
            result: result
        }
    })
})

module.exports = {
    getAllRecipes,
    getOneRecipe
}