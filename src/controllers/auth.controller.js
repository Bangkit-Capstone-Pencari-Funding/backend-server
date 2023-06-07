const { ApiError } = require('../errors')
const { createUser, loginUser } = require('../services/user.service')
const catchAsync = require('../utils/catchAsync')
const createToken = require('../utils/createJWT')
const createTokenPayload = require('../utils/createTokenPayload')


const signUp = catchAsync(async (req, res, next) => {
    const createdUser = await createUser(req)
    const token = await createToken(createTokenPayload(createdUser))
    res.json({payload: {
        token: token
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


module.exports= {
    signUp,
    login
}