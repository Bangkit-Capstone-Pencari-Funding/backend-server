require('dotenv').config()


module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    jwt_secret: process.env.JWT_SECRET
}