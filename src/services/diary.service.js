const prisma = require('../utils/prisma')
const {ApiError} = require('../errors')
const httpStatus = require('http-status')

const getAllUserDiary = async (req) => {
    const {id:user_id} = req.user
    const diaries = await prisma.diary.findMany({
        where: {user_id: user_id},
        include:{
            recipe: {
                select: {
                    recipe: true
                }
            },
            user: true,
            child: true
        }
    })

    return{
        diaries
    }
}

const createUserDiary = async (req) => {
    const {id:user_id} = req.user
    const {recipeId: recipe_id } = req.params
    const { child_id } = req.body
    if(!user_id) throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Token")
    if(!recipe_id) throw new ApiError(httpStatus.BAD_REQUEST, "Recipe Id required")
    if(!child_id) throw new ApiError(httpStatus.BAD_REQUEST, "Child Id required")
    let useDiary
    const checkrRecipe = await prisma.recipe.findFirst({
        where: {
            id: recipe_id,
        }
    })
    if(!checkrRecipe) throw new ApiError(httpStatus.NOT_FOUND, "Recipe not found")
    const checkDiary = await checkUserDiary(req)
    if(checkDiary.length > 0){
        useDiary = checkDiary.length > 1 ? checkDiary.filter((diary) => diary.child_id === child_id)[0] : checkDiary[0]
    }else{
        useDiary =  await prisma.diary.create({
            data: {
                user_id: user_id,
                date: new Date(),
                child_id: child_id
            }
        })
    }
    const createDiary = await prisma.diaryOnRecipe.create({
        data:{
            diary_id: useDiary.id,
            recipe_id: recipe_id
        }
    })
    return createDiary
}



const checkUserDiary = async (req, date="") => {
    const {id:user_id} = req.user
    const today = date ? new Date(date) : new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setHours(23, 59, 59, 999)
    const diary = await prisma.diary.findMany({
        where: {
            user_id: user_id,
            date: {
                gte: today,
                lt: tomorrow
            }
        }
    })
    return diary
}


module.exports = {
    getAllUserDiary,
    checkUserDiary,
    createUserDiary
}