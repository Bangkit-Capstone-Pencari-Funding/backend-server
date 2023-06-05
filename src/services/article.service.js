const prisma = require('../utils/prisma');
const {ApiError} = require('../errors')
const httpStatus = require('http-status')

/**
 * Mengambil semua article pada database
 * @returns {article[]}
 * 
 */
const getAllArticleService = async (req) => {
    const article = await prisma.article.findMany()
    return article
}

module.exports = {
    getAllArticleService
}

