const jwt = require('jsonwebtoken');
const {jwt_secret} = require('../config')

async function createToken(payload){
    const token = await jwt.sign(payload, jwt_secret, {
        expiresIn: "2m"
    });

    return token
}

module.exports = createToken;