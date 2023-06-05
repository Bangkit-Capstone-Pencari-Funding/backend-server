const jwt = require('jsonwebtoken');
const {TokenExpiredError} = require('jsonwebtoken');
const { ApiError } = require('../errors');
const httpStatus = require('http-status');
const {jwt_secret} = require('../config')


async function authenticate(req, res, next) {
    try {
    let token;
    const authHeader = req.headers.authorization;

    if(authHeader && authHeader.startsWith("Bearer ")){
        token = authHeader.split(' ')[1]
    }
    if(!token) throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Credentials Token")
        const user = jwt.verify(token, jwt_secret)
        req.user = user
        next()
    } 
    catch (error) {
        if(error instanceof TokenExpiredError) error = new ApiError(httpStatus.UNAUTHORIZED, "Token Expired")
        next(error)
    }
}

module.exports = authenticate