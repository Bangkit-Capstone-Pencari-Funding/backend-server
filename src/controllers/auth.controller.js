const { ApiError } = require('../errors')
const { createUser, loginUser } = require('../services/user.service')
const catchAsync = require('../utils/catchAsync')


const signUp = catchAsync(async (req, res, next) => {
    const createdUser = await createUser(req)
    res.json({payload: {
        users: createdUser
    }
    })
})

const login = catchAsync(async (req, res, next) => {
    const token = await loginUser(req)
    res.json({payload: {
        token: token
    }
    })
})

const index = catchAsync(async (req, res)=>{
    res.json({payload: {
        users: req.user
    }
    })
})


module.exports= {
    index,
    signUp,
    login
}