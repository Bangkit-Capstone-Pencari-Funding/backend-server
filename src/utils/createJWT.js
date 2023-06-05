const jwt = require('jsonwebtoken');
const {jwt_secret,token_expiration } = require('../config')

async function createToken(payload){
    const token = await jwt.sign(payload, jwt_secret, {
        expiresIn: token_expiration
    });

    return token
}

module.exports = createToken;