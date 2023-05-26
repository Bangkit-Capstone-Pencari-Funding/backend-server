const { getAllUsers, createUser, updateUser, deleteUser,getUser } = require('../services/user.service')
const catchAsync = require('../utils/catchAsync')

const index = catchAsync(async (req, res)=>{
    const users = await getAllUsers()
    res.json({payload: {
        users: users
    }
    })
})

const getOneUser = catchAsync(async (req, res) => {
    const user = await getUser(req)
    res.json({
        payload:{
            user: user
        }
    })
})

const post = catchAsync(async (req, res) => {
    const created = await createUser(req)
    res.json({
        payload:{
            created: created
        }
    })
})


const put = catchAsync(async (req, res) => {
    const updated = await updateUser(req)
    console.log("test")
    res.json({
        payload:{
            updated: updated
        }
    })
})


const deleted = catchAsync(async (req, res, next) => {
    const deletedUser = await deleteUser(req)
    res.json({
        payload:{
            deleted: deletedUser
        }
    })
})


module.exports= {
    index,
    getOneUser,
    post,
    put,
    deleted
}