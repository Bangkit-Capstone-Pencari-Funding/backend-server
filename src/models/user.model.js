const prisma = require('../utils/prisma')

async function getAllUsers() {
    const users = await prisma.user.findMany()
    return
}



module.exports = {}