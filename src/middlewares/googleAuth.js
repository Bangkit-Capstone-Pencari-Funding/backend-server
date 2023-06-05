const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const createToken = require('../utils/createJWT')
const {createUserGoogle, findUserByEmail} = require('../services/user.service')
const logger = require('../config/logger')
const createTokenPayload = require('../utils/createTokenPayload')


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},async (accessToken, refreshToken, profile, done) => {
    try {
        console.log({...profile})
        let userAccount; 
        userAccount = await findUserByEmail(profile.emails[0].value) 
        if(!userAccount){
            //buat akun baru
            const userData = {
                name: profile.displayName,
                email:profile.emails[0].value
            }
            userAccount = userData
            userAccount = await createUserGoogle(userData)
        }
        const token = await createToken(createTokenPayload(userAccount))
        done(null, token)

    }catch (error) {
        done(error, null)
    }
}))

module.exports = passport