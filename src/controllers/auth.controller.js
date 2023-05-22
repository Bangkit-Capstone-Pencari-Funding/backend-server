const {waitFunc } = require('../services/auth.service')
const index= async (req, res) => {
    const myVar = await waitFunc()
    res.json({message: myVar})
}
module.exports= {
    index: index,
}