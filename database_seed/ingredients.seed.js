const {PrismaClient} = require('@prisma/client');
const data = require('./data/ingredient.data')
const prisma = new PrismaClient()

async function main() {

    console.log(ingredientsId)
    const result = await prisma.ingredient.createMany({
        data: data
    })

    console.log("result")
    console.log(result)
}

main()
.then(async () => {
    await prisma.$disconnect()
    console.log('recipe data succesfully created')
})
.catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
})