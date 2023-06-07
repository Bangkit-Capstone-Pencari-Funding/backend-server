const express = require('express');
const router = express.Router();
const multer = require('../../middlewares/multer')
const storage = require('../../config/cloudStorage');
const authenticate = require('../../middlewares/auth');
const { ApiError } = require('../../errors');
const httpStatus = require('http-status');





router.post('/image/:bucketName', authenticate, multer.single('image'), (req, res, next) => {
    try {      
        const {file} = req;
        console.log(file)
        const {bucketName} = req.params
        if(['growell-user-profile-1'].indexOf(bucketName) === -1) throw new ApiError(httpStatus.NOT_FOUND, "URL missmatch")
        const bucket = storage.bucket(bucketName)//bucket name nanti diganti
        const blob = bucket.file(file.originalname)
        const writeStream = blob.createWriteStream({
            resumable: false,
            metadata: {
                contentType: file.mimetype
            }
        })

        writeStream.on('error', (err) => {
            next(err)
        })

        writeStream.on('finish',async (result) =>{
            const publicUrl = blob.publicUrl()
            res.json( {url: publicUrl} )
        })
        writeStream.end(file.buffer)
    } catch (err) {
        next(err)
    }
})

module.exports = router;