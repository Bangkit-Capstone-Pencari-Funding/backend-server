require('dotenv').config()


module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    jwt_secret: process.env.JWT_SECRET,
    token_expiration: process.env.TOKEN_EXPIRATION,
    gcloud_project_id: process.env.GOOGLE_PROJECT_ID,
    service_acc_key_path: process.env.SERVICE_ACC_KEY_PATH
}