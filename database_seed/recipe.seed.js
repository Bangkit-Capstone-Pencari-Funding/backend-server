const {PrismaClient} = require('@prisma/client');
const data = require('./data/recipe.data')
const prisma = new PrismaClient()

async function main() {
    await prisma.recipe.createMany({
        data: data,
        skipDuplicates: true
    })
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