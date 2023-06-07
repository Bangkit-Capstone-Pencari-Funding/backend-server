const createTokenPayload = (data) =>{
    return{
        id: data.id,
        name: data.name
    }
}

module.exports = createTokenPayload