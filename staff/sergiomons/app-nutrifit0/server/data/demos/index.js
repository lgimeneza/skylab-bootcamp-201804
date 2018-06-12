'use strict'

require('dotenv').config()

const { User, Order, Product, Category } = require('../models')
const { mongoose } = require('../../data')

const { env: { DB_URL } } = process

mongoose.connect(DB_URL)
    .then(() => mongoose.connection.db.dropDatabase())
    .then(() => {
        // parentCategories
        const packsCategoryData = { image: 'http://images.com/1234', name: "Packs" }
        const individualsCategoryData = { image: 'http://images.com/1234', name: "Individuals dish" }

        // Children individualsCategoryData
        const meatCategoryData = { image: 'http://images.com/1234', name: "Carne" }
        const soupCategoryData = { image: 'http://images.com/1234', name: "Sopa" }
        const fishCategoryData = { image: 'http://images.com/1234', name: "Pescado" }
        const pastaCategoryData = { image: 'http://images.com/1234', name: "Pasta" }
        const proteinCategoryData = { image: 'http://images.com/1234', name: "Proteinas" }
        const vegetarianCategoryData = { image: 'http://images.com/1234', name: "Vegetarian" }
        const veganCategoryData = { image: 'http://images.com/1234', name: "Vegan" }

        // products packCategories
        const packMuscleData = { image: 'https://deportesaludable.com/wp-content/uploads/2018/05/six-pack_1000x600.jpg', name: 'Pack Muscle', description: 'Pack Muscle desc', price: 100 }
        const packBodyTonicData = { image: 'https://www.perfectnutrition.es/76/dieta-2200-descarga-o-bajada-de-peso.jpg', name: 'Pack Body Tonic', description: 'Pack Body Tonic desc', price: 90 }
        const packBurningData = { image: 'https://bodycultures.com/wp-content/uploads/2016/12/shutterstock_527734021.jpg', name: 'Pack Burning', description: 'Pack Burning desc', price: 85 }
        const packHealthyData = { image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/06/1486402920-delish-rainbow-chicken-veggies-2.jpg', name: 'Pack Healthy', description: 'Pack Healthy desc', price: 105 }
        const packVeganData = { image: 'http://www.smartermeats.com/9-thickbox_default/match-meat-premium-vegan-meat-variety-pack.jpg', name: 'Pack Vegan', description: 'Pack Vegan desc', price: 95 }
        const packNoGlutenData = { image: 'https://static.ulabox.com/media/94390_banner-tablet.jpg', name: 'Pack No Gluten', description: 'Pack No Gluten desc', price: 100 }

        // products individualsCategory
        // products meatCategory
        const polloVerdurasData = { image: 'https://www.deliciosi.com/images/1000/1070/pollo-con-verduras.jpg', name: 'Pollo con verduras', description: 'Pollo con verduras desc', price: 4.25 }
        const terneraData = { image: 'http://sevilla.abc.es/gurme//wp-content/uploads/2010/12/solomillo-relleno-de-foie-gras.jpg', name: 'Ternera asada', description: 'Ternera asada desc', price: 4 }
        const polloArrozData = { image: 'https://www.cocinavital.mx/wp-content/uploads/2017/08/muslos-de-pollo-con-arroz.jpg', name: 'Pollo con arroz', description: 'Pollo con arroz desc', price: 4.50 }

        // products soupCategory
        const sopaVerdurasData = { image: 'http://images.com/1234', name: 'Sopa de verduras', description: 'Sopa de verduras desc', price: 3 }
        const sopaMariscoData = { image: 'http://images.com/1234', name: 'Sopa de marisco', description: 'Sopa de marisco desc', price: 3.25 }

        // products fishCategory
        const pescadoPlanchaData = { image: 'http://images.com/1234', name: 'Pescado a la plancha', description: 'Pescado a la plancha desc', price: 4 }
        const salmonData = { image: 'http://images.com/1234', name: 'Salmón ahumado', description: 'Salmón ahumado desc', price: 3.75 }
        const pescadoVerdurasData = { image: 'http://images.com/1234', name: 'Pescado con verduras', description: 'Pescado con verduras desc', price: 4 }

        // products pastaCategory
        const tallarinesData = { image: 'http://images.com/1234', name: 'Tallarines con verdura', description: 'Tallarines con verdura', price: 4.25 }
        const espaguetiData = { image: 'http://images.com/1234', name: 'Espagueti mediterráneo', description: 'Espagueti mediterráneo', price: 4.50 }
        const macarronesIntegralesData = { image: 'http://images.com/1234', name: 'Macarrones integrales', description: 'Macarrones integrales desc', price: 4.50 }

        // products riceCategory
        const arrozIntegralData = { image: 'http://images.com/1234', name: 'Arroz integral', description: 'Arroz integral desc', price: 4.25 }
        const arrozRemolachaData = { image: 'http://images.com/1234', name: 'Arroz con remolacha', description: 'Arroz con remolacha desc', price: 4.40 }
        const risottoData = { image: 'http://images.com/1234', name: 'Risotto', description: 'Risotto desc', price: 4.50 }

        // products vegetarianCategory
        const ensaladaColData = { image: 'http://images.com/1234', name: 'Ensalada de col', description: 'Ensalada de Col desc', price: 3.75 }
        const tacosFrijolesData = { image: 'http://images.com/1234', name: 'tacos de frijoles', description: 'tacos de frijoles desc', price: 4.25 }
        const pastelesCamoteData = { image: 'http://images.com/1234', name: 'Pasteles de camotes', description: 'Pasteles de camotes desc', price: 4 }

        // products veganCategory
        const berenjenasData = { image: 'http://images.com/1234', name: 'Berenjenas al miso', description: 'Berenjenas al miso desc', price: 4.25 }
        const salteadoBrocoliData = { image: 'http://images.com/1234', name: 'Salteado de Brocóli', description: 'Salteado de Brócoli desc', price: 4 }
        const tortillaSinData = { image: 'http://images.com/1234', name: 'Tortilla sin huevos', description: 'Tortilla sin huevos desc', price: 4.50 }

        return Promise.all([
            // Parents Category
            new Category(packsCategoryData).save(),
            new Category(individualsCategoryData).save(),
            //Children IndividualsCategory
            new Category(meatCategoryData).save(),
            new Category(soupCategoryData).save(),
            new Category(fishCategoryData).save(),
            new Category(pastaCategoryData).save(),
            new Category(proteinCategoryData).save(),
            new Category(vegetarianCategoryData).save(),
            new Category(veganCategoryData).save(),
            //Products PacksCategory
            new Product(packMuscleData).save(),
            new Product(packBodyTonicData).save(),
            new Product(packBurningData).save(),
            new Product(packHealthyData).save(),
            new Product(packVeganData).save(),
            new Product(packNoGlutenData).save(),
            // Products IndividualsCategory
            new Product(polloVerdurasData).save(),
            new Product(terneraData).save(),
            new Product(polloArrozData).save(),
            new Product(sopaVerdurasData).save(),
            new Product(sopaMariscoData).save(),
            new Product(pescadoPlanchaData).save(),
            new Product(salmonData).save(),
            new Product(pescadoVerdurasData).save(),
            new Product(tallarinesData).save(),
            new Product(espaguetiData).save(),
            new Product(macarronesIntegralesData).save(),
            new Product(arrozIntegralData).save(),
            new Product(arrozRemolachaData).save(),
            new Product(risottoData).save(),
            new Product(ensaladaColData).save(),
            new Product(tacosFrijolesData).save(),
            new Product(pastelesCamoteData).save(),
            new Product(berenjenasData).save(),
            new Product(salteadoBrocoliData).save(),
            new Product(tortillaSinData).save()]
        )
            .then(([packsCategory, individualsCategory, meatCategory, soupCategory, fishCategory, pastaCategory, proteinCategory,
                vegetarianCategory, veganCategory, packMuscle, packBodyTonic, packBurning, packHealthy, packVegan, packNoGluten,
                polloVerduras, ternera, polloArroz, sopaVerduras, sopaMarisco, pescadoPlancha, salmon, pescadoVerduras, tallarines,
                espagueti, macarronesIntegrales, arrozIntegral, arrozRemolacha, risotto, ensaladaCol, tacosFrijoles, pastelesCamote,
                berenjenas, salteadoBrocoli, tortillaSin]) => {

                // Set parent to child IndividualsCategory
                meatCategory.parent = individualsCategory._id;
                soupCategory.parent = individualsCategory._id;
                fishCategory.parent = individualsCategory._id;
                pastaCategory.parent = individualsCategory._id;
                proteinCategory.parent = individualsCategory._id;
                vegetarianCategory.parent = individualsCategory._id;
                veganCategory.parent = individualsCategory._id;

                // Set category to products packsCategory
                packMuscle.category = packsCategory._id;
                packBodyTonic.category = packsCategory._id;
                packBurning.category = packsCategory._id;
                packHealthy.category = packsCategory._id;
                packVegan.category = packsCategory._id;
                packNoGluten.category = packsCategory._id;

                // Set category to products individualsCategory
                polloVerduras.category = meatCategory._id;
                ternera.category = meatCategory._id;
                polloArroz.category = meatCategory._id;

                sopaVerduras.category = soupCategory._id;
                sopaMarisco.category = soupCategory._id;

                pescadoPlancha.category = fishCategory._id;
                salmon.category = fishCategory._id;
                pescadoVerduras.category = fishCategory._id;

                tallarines.category = pastaCategory._id;
                espagueti.category = pastaCategory._id;
                macarronesIntegrales.category = pastaCategory._id;

                arrozIntegral.category = proteinCategory._id;
                arrozRemolacha.category = proteinCategory._id;
                risotto.category = proteinCategory._id;

                ensaladaCol.category = vegetarianCategory._id;
                tacosFrijoles.category = vegetarianCategory._id;
                pastelesCamote.category = vegetarianCategory._id;

                berenjenas.category = veganCategory._id;
                salteadoBrocoli.category = veganCategory._id;
                tortillaSin.category = veganCategory._id;

                return [meatCategory.save(), soupCategory.save(), fishCategory.save(), pastaCategory.save(), proteinCategory.save(),
                vegetarianCategory.save(), veganCategory.save(), packMuscle.save(), packBodyTonic.save(), packBurning.save(), packHealthy.save(), packVegan.save(), packNoGluten.save(),
                polloVerduras.save(), ternera.save(), polloArroz.save(), sopaVerduras.save(), sopaMarisco.save(), pescadoPlancha.save(), salmon.save(), pescadoVerduras.save(), tallarines.save(),
                espagueti.save(), macarronesIntegrales.save(), arrozIntegral.save(), arrozRemolacha.save(), risotto.save(), ensaladaCol.save(), tacosFrijoles.save(), pastelesCamote.save(),
                berenjenas.save(), salteadoBrocoli.save(), tortillaSin.save()]
            })
        //  .then(() => {
        //      mongoose.connection.close()
        //      console.log('done')
        //  })


        // const arrayPromsisesParents =[ packsCategory, individualsCategory ]

        // const createParents = createData(arrayPromsisesParents)

        // const individualsCategoryId = individualsCategory.id

        // debugger

        // // Children individualsCategory
        // const meatCategoryData = { image: 'http://images.com/1234', name: "Carne", parent: individualsCategoryId }
        // const soupCategoryData = { image: 'http://images.com/1234', name: "Sopa", parent: individualsCategoryId }
        // const fishCategoryData = { image: 'http://images.com/1234', name: "Pescado", parent: individualsCategoryId }
        // const pastaCategoryData = { image: 'http://images.com/1234', name: "Pasta", parent: individualsCategoryId }
        // const proteinCategoryData = { image: 'http://images.com/1234', name: "Proteinas", parent: individualsCategoryId }
        // const vegetarianCategoryData = { image: 'http://images.com/1234', name: "Vegetarian", parent: individualsCategoryId }
        // const veganCategoryData = { image: 'http://images.com/1234', name: "Vegan", parent: individualsCategoryId }

        // const meatCategory = new Category(meatCategoryData).save()
        // const soupCategory = new Category(soupCategoryData).save()
        // const fishCategory = new Category(fishCategoryData).save()
        // const pastaCategory = new Category(pastaCategoryData).save()
        // const proteinCategory = new Category(proteinCategoryData).save()
        // const vegetarianCategory = new Category(vegetarianCategoryData).save()
        // const veganCategory = new Category(veganCategoryData).save()

        // // Array IndividualsCategory promises
        // const arrayIndividualsCategory = [meatCategory, soupCategory, fishCategory, pastaCategory, proteinCategory, vegetarianCategory, veganCategory]

        // // Save in data Base
        // const createChildrenIndividuals = createData(arrayIndividualsCategory)

        // // products packCategories
        // const packMuscleData = { image: 'http://images.com/1234', name: 'Pack Muscle', description: 'Pack Muscle desc', price: 100, category: packsCategory._id }
        // const packBodyTonicData = { image: 'http://images.com/1235', name: 'Pack Body Tonic', description: 'Pack Body Tonic desc', price: 90, category: packsCategory._id }
        // const packBurningData = { image: 'http://images.com/1234', name: 'Pack Burning', description: 'Pack Burning desc', price: 85, category: packsCategory._id }
        // const packHealthyData = { image: 'http://images.com/1234', name: 'Pack Healthy', description: 'Pack Healthy desc', price: 105, category: packsCategory._id }
        // const packVeganData = { image: 'http://images.com/1234', name: 'Pack Vegan', description: 'Pack Vegan desc', price: 95, category: packsCategory._id }
        // const packNoGlutenData = { image: 'http://images.com/1234', name: 'Pack No Gluten', description: 'Pack No Gluten desc', price: 100, category: packsCategory._id }

        // // products individualsCategory
        // // products meatCategory
        // const polloVerdurasData = { image: 'http://images.com/1234', name: 'Pollo con verduras', description: 'Pollo con verduras desc', price: 4.25, category: meatCategory._id }
        // const terneraData = { image: 'http://images.com/1234', name: 'Ternera asada', description: 'Ternera asada desc', price: 4, category: meatCategory._id }
        // const polloArrozData = { image: 'http://images.com/1234', name: 'Pollo con arroz', description: 'Pollo con arroz desc', price: 4.50, category: meatCategory._id }

        // // products soupCategory
        // const sopaVerdurasData = { image: 'http://images.com/1234', name: 'Sopa de verduras', description: 'Sopa de verduras desc', price: 3 }
        // const sopaMariscoData = { image: 'http://images.com/1234', name: 'Sopa de marisco', description: 'Sopa de marisco desc', price: 3.25 }

        // // products fishCategory
        // const pescadoPlanchaData = { image: 'http://images.com/1234', name: 'Pescado a la plancha', description: 'Pescado a la plancha desc', price: 4 }
        // const salmonData = { image: 'http://images.com/1234', name: 'Salmón ahumado', description: 'Salmón ahumado desc', price: 3.75 }
        // const pescadoVerdurasData = { image: 'http://images.com/1234', name: 'Pescado con verduras', description: 'Pescado con verduras desc', price: 4 }

        // // products pastaCategory
        // const tallarinesData = { image: 'http://images.com/1234', name: 'Tallarines con verdura', description: 'Tallarines con verdura', price: 4.25 }
        // const espaguetiData = { image: 'http://images.com/1234', name: 'Espagueti mediterráneo', description: 'Espagueti mediterráneo', price: 4.50 }
        // const macarronesIntegralesData = { image: 'http://images.com/1234', name: 'Macarrones integrales', description: 'Macarrones integrales desc', price: 4.50 }

        // // products riceCategory
        // const arrozIntegralData = { image: 'http://images.com/1234', name: 'Arroz integral', description: 'Arroz integral desc', price: 4.25 }
        // const arrozRemolachaData = { image: 'http://images.com/1234', name: 'Arroz con remolacha', description: 'Arroz con remolacha desc', price: 4.40 }
        // const risottoData = { image: 'http://images.com/1234', name: 'Risotto', description: 'Risotto desc', price: 4.50 }

        // // products vegetarianCategory
        // const ensaladaColData = { image: 'http://images.com/1234', name: 'Ensalada de col', description: 'Ensalada de Col desc', price: 3.75 }
        // const tacosFrijolesData = { image: 'http://images.com/1234', name: 'tacos de frijoles', description: 'tacos de frijoles desc', price: 4.25 }
        // const pastelesCamoteData = { image: 'http://images.com/1234', name: 'Pasteles de camotes', description: 'Pasteles de camotes desc', price: 4 }

        // // products veganCategory
        // const berenjenasData = { image: 'http://images.com/1234', name: 'Berenjenas al miso', description: 'Berenjenas al miso desc', price: 4.25 }
        // const salteadoBrocoliData = { image: 'http://images.com/1234', name: 'Salteado de Brocóli', description: 'Salteado de Brócoli desc', price: 4 }
        // const tortillaSinData = { image: 'http://images.com/1234', name: 'Tortilla sin huevos', description: 'Tortilla sin huevos desc', price: 4.50 }


        // const polloVerduras = new Product(polloVerdurasData).save()
        // const ternera = new Product(terneraData).save()
        // const polloArroz = new Product(polloArrozData).save()
        // const sopaVerduras = new Product(sopaVerdurasData).save()
        // const sopaMarisco = new Product(sopaMariscoData).save()
        // const pescadoPlancha = new Product(pescadoPlanchaData).save()
        // const salmon = new Product(salmonData).save()
        // const pescadoVerduras = new Product(pescadoVerdurasData).save()
        // const tallarines = new Product(tallarinesData).save()
        // const espagueti = new Product(espaguetiData).save()
        // const macarronesIntegrales = new Product(macarronesIntegralesData).save()
        // const arrozIntegral = new Product(arrozIntegralData).save()
        // const arrozRemolacha = new Product(arrozRemolachaData).save()
        // const risotto = new Product(risottoData).save()
        // const ensaladaCol = new Product(ensaladaColData).save()
        // const tacosFrijoles = new Product(tacosFrijolesData).save()
        // const pastelesCamote = new Product(pastelesCamoteData).save()
        // const berenjenas = new Product(berenjenasData).save()
        // const salteadoBrocoli = new Product(salteadoBrocoliData).save()
        // const tortillaSin = new Product(tortillaSinData).save()

        // const promisesProducts = [polloVerduras, ternera, polloArroz, sopaVerduras, sopaMarisco, pescadoPlancha, salmon, pescadoVerduras, tallarines, espagueti, macarronesIntegrales, arrozIntegral, arrozRemolacha, risotto, ensaladaCol, tacosFrijoles, pastelesCamote, berenjenas, salteadoBrocoli, tortillaSin]

        // const createProducts = createData(promisesProducts)

        // function createData(promises) {
        //     mongoose.connect(DB_URL)
        //         .then((connection) => {
        //             return Promise.all(promises)
        //                 .then(res => {
        //                     console.log(res)
        //                 })
        //                 .then(() => {
        //                     mongoose.connection.close()
        //                 })
        //         })
        //         .catch(console.error)
        // }


        // 'use strict'

        // require('dotenv').config()

        // const { mongoose, models: { User, Category, Product, Order } } = require('..')

        // const { env: { DB_URL } } = process

        // // WARN run this script from root folder: $ node demos/

        // mongoose.connect(DB_URL)
        //     .then(() => {
        //         // TODO insertions

        //         //Categories
        //         let beginnerCourseCategoryData = { name: 'Beginner Course', description: 'Beginner Course desc', image: 'http://images.com/230957' }
        //         let advancedCourseCategoryData = { name: 'Advanced Course', description: 'Advanced Course desc', image: 'http://images.com/259827' }

        //         //Products
        //         let beginnerCourseData = { name: 'Beginner Course I', price: 50, discount: 15, description: 'Beginner Course I desc', image: 'http://images.com/5678', stock: 123 }
        //         let beginnerCourseData2 = { name: 'Beginner Course II', price: 50, discount: 15, description: 'Beginner Course II desc', image: 'http://images.com/5679', stock: 11}
        //         let advancedCourseData = { name: 'Advanced Course I', price: 100, discount: 20, description: 'Advanced Course I desc', image: 'http://images.com/1234', stock: 77 }


        //         return Promise.all([
        //             Category.create(beginnerCourseCategoryData),
        //             Category.create(advancedCourseCategoryData)
        //         ])
        //             .then(res => {
        //                 console.log(res)

        //                 beginnerCourseData.category = res[0]._id
        //                 beginnerCourseData2.category = res[0]._id
        //                 advancedCourseData.category = res[1]._id

        //                 return Promise.all([
        //                     Product.create(beginnerCourseData),
        //                     Product.create(beginnerCourseData2),
        //                     Product.create(advancedCourseData),
        //                 ])
        //             })
        //     })
        //     .then(() => mongoose.disconnect())
        //     .then(() => console.log('done'))

    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('done'))