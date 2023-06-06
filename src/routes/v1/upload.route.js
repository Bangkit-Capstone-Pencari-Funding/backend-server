const express = require('express');
const router = express.Router();
const multer = require('../../middlewares/multer')
const storage = require('../../config/cloudStorage');

const bucket = storage.bucket('growell-user-profile-1')



router.post('/image', multer.single('image'), (req, res, next) => {
    try {      
        const {file} = req;
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
            res.json( {url: publicUrl})
        })
        writeStream.end(file.buffer)
    } catch (err) {
        next(err)
    }
})

module.exports = router;