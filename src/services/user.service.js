const prisma = require('../utils/prisma')
const {ApiError} = require('../errors/')

async function getAllUsers() {
    const users = await prisma.user.findMany({
        include:{
            comments: true
        }
    })
    return users
}

async function createUser(req){
    const {name, email} = req.body
    const created = await prisma.user.create({
        data: {
            name: name,
            email: email
        }
    })
    return created
}

async function updateUser(req){
    const {id} = req.params
    const {name, email} = req.body

    const updated = await prisma.user.update({
        where: {
            id: id
        },
        data:{
            name: name
        }
    })
    return updated
}

async function deleteUser(req){
    const  {id} = req.params
    const deleted = await prisma.user.delete({
        where: {
            id: id
        }
    })
    return deleted;
}



module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}