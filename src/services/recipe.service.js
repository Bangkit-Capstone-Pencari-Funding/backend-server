const prisma = require('../utils/prisma');
const {ApiError} = require('../errors')
const httpStatus = require('http-status')


/**
 *
 */
const getAllRecipeService = async (req) => {
    const {ingredients} = req.query
    let ingredientsList
    let recipes;
    if(ingredients){
        ingredientsList = ingredients.split(',').map((ingredient) => {
            return {name: ingredient}
        })
        const result = await prisma.recipe.findMany({
            where:{
                ingredients:{
                    every: {
                        OR: ingredientsList
                    }
                }
            }
        })
        console.log("result")
        recipes = result
    }else{
        recipes = await prisma.recipe.findMany()
    }
    console.log("recipes")
    console.log(recipes)
    return recipes
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

