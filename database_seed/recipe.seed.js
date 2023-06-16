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
    await prisma.recipe.create({
        data: {
            name: "Kaldu ayam untuk mpasi",
            target_age: 3,
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
                connect: [
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'},
                    {id: 'b4c43feb-b9f8-425e-a593-691426136baa'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Puree Sayuran dan Ayam",
            target_age: 6,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Vegetable%20and%20Chicken%20Puree",
            how_to: [
                'Rebus ayam hingga matang dan lembut. Potong menjadi potongan kecil',
                'Rebus wortel hingga empuk',
                'Haluskan ayam dan wortel menggunakan blender atau food processor',
                'Tambahkan air secukupnya untuk mendapatkan konsistensi yang sesuai dengan usia anak',
                'Sajikan puree sayuran dan ayam dalam porsi kecil'
            ].join(','),
            description: "Makanan sehat untuk naka usia 6 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: '02c3c4e5-666f-44e3-a104-5d1c215c0dfc'},
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Telur Dadar dengan Kentang",
            target_age: 8,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Omelet%20with%20Potato.png",
            how_to: [
                'Kocok telur dalam sebuah mangkuk',
                'Parut ketang dan tambahkan ke dalam telur yang telah dikocok. Aduk rata',
                'Panaskan sedikit minyak sayur di atas wajan',
                'Tuang adonan telur dan ketang ke dalam wajan. Masak hingga kedua sisi matang',
                'Potong menjadi potongan kecil dan biarkan sedikit dingin sebelum disajikan'
            ].join(','),
            description: "Makanan sehat untuk anak usia 8 sampai 10 bulan",
            ingredients: {
                connect: [
                    {id: 'b4c43feb-b9f8-425e-a593-691426136baa'},
                    {id: '3f02f9e7-e344-43fc-b74e-763a352842e6'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Salad Tomat dan Brokoli",
            target_age: 13,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Tomato%20and%20Broccoli.png",
            how_to: [
                'Potong tomat menjadi potongan kecil',
                'Rebus brokoli hingga sedikit lunak. Potong menjadi potongan kecil',
                'Campurkan potongan tomat dan brokoli dalam sebuah mangkuk',
                'Tambahkan sedikit minyak zaitun dan garam secukupnya. Aduk rata',
                'Sajikan sebagai salad yang segar dan sehat'
            ].join(','),
            description: "Makanan sehat untuk anak usia 13 bulan ke atas",
            ingredients: {
                connect: [
                    {id: '4393be63-9656-49a0-a974-dd8a088172f8'},
                    {id: 'ebe4dea1-984f-4251-bcf0-fc22996a1bcc'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Daging Sapi Panggang dengan Jagung",
            target_age: 13,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Grilled%20Beef%20Chop%20with%20Corn.png",
            how_to: [
                'Potong daging sapi menjadi potongan kecil',
                'Lumuri daging sapi dengan sedikit garam, lada, dan minyak sayur',
                'Panggang daging sapi di atas panggangan atau wajan dengan sedikit minyak sayur',
                'Rebus jagung hingga matang. Potong menjadi potongan kecil',
                'Sajikan daging sapi panggang dengan potongan jagung sebagai hidangan utama yang lezat'
            ].join(','),
            description: "Makanan sehat untuk anak usia 13 bulan ke atas",
            ingredients: {
                connect: [
                    {id: '763e08e2-f2f6-4f9b-ab08-a7834b4eabc1'},
                    {id: 'c43e5001-02b8-4da4-90f3-cb69d1691744'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Tempe Goreng dengan Sayuran Wortel dan Brokoli",
            target_age: 13,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Fried%20Tempeh%20wi%200.png",
            how_to: [
                'Potong tempe menjadi potongan kecil atau iris tipis',
                'Panaskan minyak sayur dalam wajan',
                'Goreng tempe hingga kecokelatan dan renyah. Tiriskan',
                'Rebus sayuran pilihan hingga empuk',
                'Campurkan tempe goreng'
            ].join(','),
            description: "Makanan sehat untuk anak usia 13 bulan ke atas",
            ingredients: {
                connect: [
                    {id: 'f00e2ef2-bfff-426f-9a30-53362f8834aa'},
                    {id: 'ebe4dea1-984f-4251-bcf0-fc22996a1bcc'},
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Ikan Panggang dengan Kentang dan Sayuran Wortel dan Brokoli",
            target_age: 13,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Baked%20Fish%20with.png",
            how_to: [
                'Bersihkan ikan dan potong menjadi bagian yang sesuai untuk anak',
                'Lumuri ikan dengan sedikit garam, lada, dan minyak sayur',
                'Panggang ikan di atas panggangan atau wajan dengan sedikit minyak sayur hingga matang',
                'Rebus kentang dan sayuran hingga empuk',
                'Sajikan ikan panggang dengan potongan kentang dan sayuran sebagai hidangan utama'
            ].join(','),
            description: "Makanan sehat untuk anak usia 13 bulan ke atas",
            ingredients: {
                connect: [
                    {id: '98d016b6-6342-4a89-a60e-690808b48b2a'},
                    {id: 'ebe4dea1-984f-4251-bcf0-fc22996a1bcc'},
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Puree Jagung dan Brokoli",
            target_age: 6,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Corn%20and%20Broccoli%20Puree.png",
            how_to: [
                'Rebus jagung hingga empuk',
                'Rebus brokoli hingga empuk',
                'Haluskan jagung dan brokoli menggunakan blender atau food processor',
                'Tambahkan air secukupnya untuk mendapatkan konsistensi yang sesuai dengan usia anak',
                'Sajikan puree jagung dan brokoli dalam porsi kecil'
            ].join(','),
            description: "Makanan sehat untuk anak usia 6 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: 'c43e5001-02b8-4da4-90f3-cb69d1691744'},
                    {id: 'ebe4dea1-984f-4251-bcf0-fc22996a1bcc'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Tumis Ayam dengan Tomat dan Tempe",
            target_age: 13,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Stir-fried%20Chicken%20with%20Tomatoes%20and%20Tempeh.jpg",
            how_to: [
                'Potong ayam menjadi potongan kecil',
                'Potong tomat dan tempe menjadi potongan kecil',
                'Panaskan minyak sayur dalam wajan',
                'Tumis ayam hingga matang dan berubah warna',
                'Tambahkan potongan tomat dan tempe. Masak hingga semua bahan matang',
                'Beri sedikit garam dan lada sesuai selera',
                'Sajikan tumis ayam dengan tomat dan tempe sebagai hidangan seimbang'
            ].join(','),
            description: "Makanan sehat untuk anak usia 13 bulan ke atas",
            ingredients: {
                connect: [
                    {id: '02c3c4e5-666f-44e3-a104-5d1c215c0dfc'},
                    {id: '4393be63-9656-49a0-a974-dd8a088172f8'},
                    {id: 'f00e2ef2-bfff-426f-9a30-53362f8834aa'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Telur Rebus dengan Wortel dan Brokoli",
            target_age: 8,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Poached%20Eggs%20with%20Carrots%20and%20Broccoli.png",
            how_to: [
                'Rebus telur hingga matang. Kupas kulitnya dan potong menjadi potongan kecil',
                'Rebus wortel dan brokoli hingga empuk. Potong menjadi potongan kecil',
                'Campurkan potongan telur, wortel, dan brokoli dalam sebuah mangkuk',
                'Sajikan sebagai hidangan yang sehat dan lezat'
            ].join(','),
            description: "Makanan sehat untuk anak usia 8 sampai 10 bulan",
            ingredients: {
                connect: [
                    {id: 'b4c43feb-b9f8-425e-a593-691426136baa'},
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'},
                    {id: 'ebe4dea1-984f-4251-bcf0-fc22996a1bcc'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Bubur Ayam dan Ketang",
            target_age: 6,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Chicken%20and%20Potato%20Porridge.png",
            how_to: [
                'Rebus daging ayam dalam air kaldu hingga matang dan empuk',
                'Haluskan daging ayam rebus',
                'Campurkan daging ayam halus dengan ketang halus',
                'Tambahkan sedikit air kaldu ayam untuk kekentalan yang sesuai',
                'Panaskan bubur dan pastikan suhu aman sebelum memberikannya kepada bayi'
            ].join(','),
            description: "Makanan sehat untuk anak usia 6 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: '02c3c4e5-666f-44e3-a104-5d1c215c0dfc'},
                    {id: '3f02f9e7-e344-43fc-b74e-763a352842e6'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Sup Jagung Wortel dan Daging Sapi",
            target_age: 6,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Corn%20and%20Beef%20Soup.png",
            how_to: [
                'Panaskan sedikit minyak di dalam panci ',
                'Tambahkan daging sapi dan masak hingga berubah warna',
                'Tuangkan air kaldu sayuran dan biarkan mendidih',
                'Tambahkan jagung dan wortel, lalu masak hingga semua bahan matang',
                'Haluskan sup dengan blender atau tumbuk menjadi tekstur yang sesuai untuk bayi'
            ].join(','),
            description: "Makanan sehat untuk anak usia 6 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: '763e08e2-f2f6-4f9b-ab08-a7834b4eabc1'},
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'},
                    {id: 'c43e5001-02b8-4da4-90f3-cb69d1691744'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Sup Ikan dan Kentang Wortel",
            target_age: 6,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Carrot%20Fish%20and%20Potato%20Soup.png",
            how_to: [
                'Panaskan sedikit minyak di dalam panci ',
                'Tambahkan potongan ikan fillet, kentang, dan wortel, masak hingga ikan matang',
                'Tuangkan air kaldu dan biarkan mendidih',
                'Haluskan sup dengan blender atau tumbuk menjadi tekstur yang sesuai untuk bayi'
            ].join(','),
            description: "Makanan sehat untuk anak usia 6 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: '98d016b6-6342-4a89-a60e-690808b48b2a'},
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'},
                    {id: '3f02f9e7-e344-43fc-b74e-763a352842e6'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Sup Sayur Bayam dan Tomat",
            target_age: 6,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Spinach%20and%20Tomato%20Smooth%20Vegetable%20Soup.jpg",
            how_to: [
                'Panaskan sedikit minyak di dalam panci',
                'Tambahkan potongan tomat dan wortel, masak hingga tomat lunak',
                'Tuangkan air kaldu sayuran dan biarkan mendidih',
                'Tambahkan potongan bayam dan masak hingga layu',
                'Haluskan sup dengan blender atau tumbuk menjadi tekstur yang sesuai untuk bayi'
            ].join(','),
            description: "Makanan sehat untuk anak usia 6 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: '4393be63-9656-49a0-a974-dd8a088172f8'},
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Sup Labu dan Ayam",
            target_age: 6,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Pumpkin-and-Chicken-Stew.jpg",
            how_to: [
                'Panaskan sedikit minyak di dalam panci dan tumis bawang putih hingga harum',
                'Tambahkan potongan ayam dan masak hingga berubah warna',
                'Tuangkan air kaldu sayuran dan biarkan mendidih',
                'Tambahkan potongan labu kuning, lalu masak hingga semua bahan matang',
                'Haluskan sup dengan blender atau tumbuk menjadi tekstur yang sesuai untuk bayi'
            ].join(','),
            description: "Makanan sehat untuk anak usia 6 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: '02c3c4e5-666f-44e3-a104-5d1c215c0dfc'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Puree Sayuran",
            target_age: 4,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/vegetable-puree-bowl.jpg",
            how_to: [
                'Wortel (potong dadu), brokoli (potong kecil-kecil), ketang (potong dadu), Rebus semua sayuran hingga lunak',
                'Tiriskan air rebusan dan biarkan sedikit dingin',
                'Haluskan sayuran dengan blender atau food processor hingga menjadi puree yang lembut',
                'Tambahkan sedikit air rebusan jika perlu untuk mencapai konsistensi yang diinginkan',
                'Biarkan puree sedikit dingin dan sajikan'
            ].join(','),
            description: "Makanan sehat untuk anak usia 4 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'},
                    {id: '3f02f9e7-e344-43fc-b74e-763a352842e6'},
                    {id: 'ebe4dea1-984f-4251-bcf0-fc22996a1bcc'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Puree Buah",
            target_age: 4,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Fruit%20Puree.jpg",
            how_to: [
                'Rebus wortel hingga lunak, lalu haluskan menggunakan blender atau food processor',
                'Potong tomat menjadi dadu kecil',
                'Haluskan pisang dengan garpu atau blender',
                'Campurkan wortel halus, tomat, dan pisang dalam mangkuk',
                'Tambahkan air kaldu sayuran secukupnya untuk mencapai konsistensi yang diinginkan',
                'Aduk rata dan sajikan'
            ].join(','),
            description: "Makanan sehat untuk anak usia 4 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'},
                    {id: '4393be63-9656-49a0-a974-dd8a088172f8'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Puree Tempe dan Tomat",
            target_age: 4,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Tempeh%20and%20Tomato%20Puree.jpg",
            how_to: [
                'Rebus tempe hingga lunak, lalu haluskan menggunakan blender atau food processor.',
                'Potong tomat menjadi dadu kecil',
                'Campurkan tempe halus dan tomat dalam mangkuk',
                'Tambahkan air kaldu sayuran secukupnya untuk mencapai konsistensi puree yang lembut',
                'Aduk rata dan sajikan saat suhu rendah'
            ].join(','),
            description: "Makanan sehat untuk anak usia 4 sampai 8 bulan",
            ingredients: {
                connect: [
                    {id: 'f00e2ef2-bfff-426f-9a30-53362f8834aa'},
                    {id: '4393be63-9656-49a0-a974-dd8a088172f8'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Nasi Tim Sayur",
            target_age: 12,
            estimated_time: 30,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Vegetable%20Team%20Rice.JPG",
            how_to: [
                'Rebus wortel, brokoli, dan kentang hingga empuk',
                'Tiriskan air rebusan dan haluskan sayuran menggunakan blender atau food processor',
                'Campurkan sayuran halus, ayam suwir, dan nasi dalam panci',
                'Tambahkan sedikit air kaldu ayam jika perlu untuk mencapai konsistensi yang diinginkan',
                'Panaskan hingga mencapai suhu yang aman untuk dikonsumsi',
                'Dinginkan sedikit dan sajikan'
            ].join(','),
            description: "Makanan sehat untuk anak usia 12 bulan ke atas",
            ingredients: {
                connect: [
                    {id: '0803dbb8-3f92-4e68-add6-eb56e8dfe872'},
                    {id: 'ebe4dea1-984f-4251-bcf0-fc22996a1bcc'},
                    {id: '3f02f9e7-e344-43fc-b74e-763a352842e6'}
                ]
            }
        },
    })
    await prisma.recipe.create({
        data: {
            name: "Mashed Avocado dan Kentang Panggang",
            target_age: 12,
            estimated_time: 60,
            rating: 0,
            picture: "https://storage.googleapis.com/growell-user-profile/recipe/Mashed%20Avocado%20and%20Baked%20Potatoes.jpeg",
            how_to: [
                'Panggang kentang dalam oven hingga empuk',
                'Biarkan kentang sedikit dingin, kupas kulitnya, dan haluskan dengan garpu',
                'Haluskan alpukat matang dengan garpu',
                'Campurkan kentang halus dan alpukat dalam mangkuk',
                'Tambahkan sedikit minyak zaitun dan aduk rata',
                'Sajikan sebagai hidangan sampingan'
            ].join(','),
            description: "Makanan sehat untuk anak usia 12 bulan ke atas",
            ingredients: {
                connect: [
                    {id: '3f02f9e7-e344-43fc-b74e-763a352842e6'}
                ]
            }
        },
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