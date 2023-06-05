const prisma = require('../utils/prisma');
const {ApiError} = require('../errors')
const httpStatus = require('http-status')


/**
 *
 */
const getAllRecipeService = async (req) => {
    const recipe = await prisma.recipe.findMany()
    return recipe
}

const getFavoritesService = async (req) => {
    const recipe = await prisma.recipe.findMany({
        orderBy:{
            rating: 'desc'
        },
        take: 10
    })
    return recipe
}

const getRecipeById = async (req) => {
    const {recipeId} = req.params
    const recipe = await prisma.recipe.findFirst({
        where: {
            id: recipeId
        },
        include:{
            comment: true,
            ingredients: true
        }
    })
    //resep tidak ditemukan
    if(!recipe) throw new ApiError(httpStatus.NOT_FOUND, "Recipe not found")
    return recipe
}

module.exports = {
    getAllRecipeService,
    getRecipeById,
    getFavoritesService
}

