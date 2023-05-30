const jwt = require('jsonwebtoken');
const {TokenExpiredError} = require('jsonwebtoken');
const { ApiError } = require('../errors');
const httpStatus = require('http-status');
const {jwt_secret} = require('../config')


async function authenticate(req, res, next) {
    let token;
    const authHeader = req.headers.authorization;

    if(authHeader && authHeader.startsWith("Bearer ")){
        token = authHeader.split(' ')[1]
    }
    if(!token) throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Credentials Token")
    try {
        const user = jwt.verify(token, jwt_secret)
        req.user = user
        next()
    } 
    catch (error) {
        if(error instanceof TokenExpiredError) next(new ApiError(httpStatus.UNAUTHORIZED, "Token Expired"))
    }
}

module.exports = authenticate