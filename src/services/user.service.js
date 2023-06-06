const prisma = require('../utils/prisma')
const {ApiError} = require('../errors/')
const bcrypt = require('bcrypt')
const httpStatus = require('http-status')
const createToken = require('../utils/createJWT')
const createTokenPayload = require('../utils/createTokenPayload')


async function loginUser(req){
    const {name, email, password} = req.body
    if(!name) throw new ApiError(httpStatus.BAD_REQUEST, "Name required")
    if(!email) throw new ApiError(httpStatus.BAD_REQUEST, "Email required")
    if(!password) throw new ApiError(httpStatus.BAD_REQUEST, "password required")
    const checkEmail = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(!checkEmail) throw new ApiError(httpStatus.BAD_REQUEST, "User not found")
    const isLogin = await bcrypt.compare(password, checkEmail.password)
    if(!isLogin) throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Credentials")
    const token = await createToken(createTokenPayload(checkEmail))
    return token
}

async function getUser(req, include){
    const {id} = req.user
    const query = {
        where:{
            id: id
        },
    }
    if(include) query.include = include
    const user = await prisma.user.findFirst(query)
    if(!user) throw new ApiError(httpStatus.NOT_FOUND, "user not found")
    delete user.password
    delete user.created_at
    delete user.updated_at
    return user
}

async function findUserByEmail(email){
    if(!email) throw new ApiError(httpStatus.BAD_REQUEST, "Email required")
    const result = await prisma.user.findFirst({
        where:{
            email: email
        }
    })
    return result
}

async function createUserGoogle(userData){
    const { name, email } = userData
    if(!name) throw new ApiError(400, "Name required")
    if(!email) throw new ApiError(400, "Email required")
    const result = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: 'GOOGLE_OAUTH2'
        }
    })
    delete result.password
    return result
}

async function createUser(req){
    const {name, email, password, phone} = req.body
    if(!name) throw new ApiError(400, "Name required")
    if(!email) throw new ApiError(400, "Email required")
    if(!password) throw new ApiError(400, "password required")
    const checkEmail = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            email:true
        }
    })
    if(checkEmail) throw new ApiError(400, "Email already used")
    const salt = await bcrypt.genSalt(10)
    const encryptedPass = await bcrypt.hash(password, salt)
    const data = {
            name: name,
            email: email,
            password: encryptedPass
        }
    if(phone){
        data.phone = phone
    }
    const created = await prisma.user.create({
        data: data
    })

    delete created.password
    return created
}

async function updateUser(req){
    const {name, email} = req.body
    const {id} = req.user
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    let updated = {}

    if(!user) throw new ApiError(400, "User tidak ditemukan")
    if(name) updated.name = name
    if(email) updated.email = email
    const updatedUser = await prisma.user.update({
        where: {id:id},
        data: updated
    })
    
    return {
        name: updatedUser.name,
        email: updatedUser.email
    }
}



module.exports = {
    createUser,
    getUser,
    loginUser,
    updateUser,
    findUserByEmail,
    createUserGoogle
}