// const {} = require('../services/image.service')
const catchAsync = require('../utils/catchAsync')
const storage = require('../config/cloudStorage');
const { ApiError } = require('../errors');
const httpStatus = require('http-status');

const uploadImage = catchAsync(async (req, res, next) => {
    const {file} = req;
    const {bucketName} = req.params
    if(['growell-user-profile'].indexOf(bucketName) === -1) throw new ApiError(httpStatus.NOT_FOUND, "URL missmatch")
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
})

module.exports = {
    uploadImage
}