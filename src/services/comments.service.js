const prisma = require('../utils/prisma');
const {ApiError} = require('../errors')
const httpStatus = require('http-status')


/**
 * membuat comment dan mengupdate rating dari resep
 * @param {object} req - express request object
 * @returns {comment} - comment yang telah dibuat
 * 
 */
async function createCommentService(req) {
    const {id} = req.user
    const { recipeId: recipe_id} = req.params
    const { content="", picture="", rating } = req.body
    if(!id) throw new ApiError(httpStatus.BAD_REQUEST, "Login required")
    if(!recipe_id) throw new ApiError(httpStatus.BAD_REQUEST, "Recipe Invalid")
    try {
        if(!Number.isInteger(parseInt(rating))) throw new Error("Rating should be an integer")
        if(rating < 0 || rating > 5) throw new Error("Rating should be in range 0-5")
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error.message)
    }
    const recipe = await prisma.recipe.findFirst({
        where: {id: recipe_id},
        select:{
            _count: {
                select:{
                    comment: true
                }
            },
            rating: true
        }
    })
    if(!recipe) throw new ApiError(httpStatus.NOT_FOUND, "Couldn't find recipe")
    const created = await prisma.comment.create({
        data:{
            user_id:id,
            recipe_id: recipe_id,
            content: content,
            picture: picture,
            rating: rating
        }
    })
    
    //mengubah nilai rating pada recipe
    
    const {rating: oldRating, _count } = recipe
    let newRating = ((oldRating * _count.comment) + rating)/ (_count.comment + 1)
    await prisma.recipe.update({
        where:{
            id: recipe_id
        },
        data:{
            rating: newRating
        }
    })

    return created
}


/**
 * membuat comment dan mengupdate rating dari resep
 * @returns {Object} - mengembalikan 1 comment
 * 
 */
async function getOneCommentById(req) {
    const {commentsId:id, recipeId} = req.params
    if(!id) throw new ApiError(httpStatus.BAD_REQUEST, "Invalid URL")
    const result = await prisma.comment.findFirst({
        where:{
            id: id,
            recipe_id: recipeId
        },
        include:{
            users: {
                select:{
                    name: true,

                }
            },
            recipe: {
                select:{
                    name: true,
                }
            }
        }
    })
    if(!result) throw new ApiError(httpStatus.NOT_FOUND, "Couldn't find any comments")
    return result
}

/**
 * membuat comment dan mengupdate rating dari resep
 * @returns {comments[]} - mengambil array of comments dari resep
 * 
 */
const getAllComments = async (req) => {
    const {recipeId:id} = req.params
    const recipe = await prisma.recipe.findFirst({
        where:{
            id:id
        },
        include:{
            comment: true
        }
    })
    if (!recipe) throw new ApiError(httpStatus.NOT_FOUND, "Recipe Not Found")
    return recipe.comment
}


module.exports = {
    createCommentService,
    getOneCommentById,
    getAllComments
}