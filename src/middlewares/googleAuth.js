const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const prisma = require('../utils/prisma')
const createToken = require('../utils/createJWT')
const {createUserGoogle} = require('../services/user.service')
const logger = require('../config/logger')


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},async (accessToken, refreshToken, profile, done) => {
    try {
        let userAccount;  
        userAccount = await prisma.user.findUnique({
            where: {email:profile.emails[0].value}
        })
        console.log('userAccount: ' + userAccount)
        if(!userAccount){
            //buat akun baru
            const userData = {
                name: profile.displayName,
                email:profile.emails[0].value
            }
            userAccount = userData
            userAccount = await createUserGoogle(userData)
            done(null,userData)
        }
        const payload = {
            name: userAccount.name,
            id: userAccount.id
        }
        const token = await createToken(payload)
        logger.info(`user token:`, token)
        done(null, token)

    }catch (error) {
        done(error, null)
    }
}))

module.exports = passport