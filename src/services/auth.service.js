const waitFunc = async () => {
    setTimeout(() =>  "tunggu ya", 10000)
    return "tunggu dek"
}

module.exports = {
    waitFunc: waitFunc,
}