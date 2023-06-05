const { createCommentService, getOneCommentById, getAllComments } = require('../services/comments.service')
const catchAsync = require('../utils/catchAsync')


const createComment = catchAsync(async (req, res, next) => {
    const result = await createCommentService(req)
    res.json({
        payload: {
            created: result
        }
    })
})

const getAllRecipeComments = catchAsync(async (req, res, next) => {
    const result = await getAllComments(req)
    res.json({
        payload: {
            result: result
        }
    })
})

const getOneComment = catchAsync(async (req, res, next) =>{
    const result = await getOneCommentById(req)
    res.json({
        payload: {
            comments: result
        }
    })
})



module.exports= {
    createComment,
    getOneComment,
    getAllRecipeComments
}