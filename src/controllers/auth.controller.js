const { getAllUsers, createUser, updateUser, deleteUser } = require('../services/user.service')
async function index (req, res) {
    const users = await getAllUsers()
    res.json({payload: {
        users: users
    }
})
}

async function post (req, res) {
    const created = await createUser(req)
    res.json({
        payload:{
            created: created
        }
    })
}

async function put (req, res) {
    const updated = await updateUser(req)
    console.log("test")
    res.json({
        payload:{
            updated: updated
        }
    })
}

async function deleted (req, res) {
    const deletedUser = await deleteUser(req)
    res.json({
        payload:{
            deleted: deletedUser
        }
    })
}
module.exports= {
    index,
    post,
    put,
    deleted
}