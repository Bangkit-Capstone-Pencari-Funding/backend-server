const {PrismaClient} = require('@prisma/client');
const data = require('./data/recipe.data')
const prisma = new PrismaClient()

async function main() {

    const ingredientsId = await prisma.ingredient.findMany({ 
        select: {
            id: true
        }
    })

    console.log(ingredientsId)
    const result = await prisma.recipe.create({
        data: {
            name: "Chicken Bone Broth",
            target_age: 2,
            estimated_time: 30,
            rating: 0,
            picture: "url_to_picture",
            how_to: [
                'Cuci bersih ceker ayam',
                'Masukkan semua bahan kedalam panci',
                'Masukkan 500ml air',
                'Masak kurang lebih sampai 1jam atau sampai ceker empuk',
                'Setelah matamg pisahkan dengan air, lalu blender semua bahan termasuk tulang cekernya',
                'Setelah bahan halus masukkan kembali ke air kaldu yang td dipisahkan, aduk rata lalu saring airmya',
                'Setelah disaring masukkan kedalam plastik klip ukuran 7x15 sebanyak 50ml bisa jadi 7 bungkus dan simpan ke freezer'
            ].join(','),
            description: "Kaldu ayam untuk mpasi",
            ingredients: {
                connect: ingredientsId
            }
        },
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