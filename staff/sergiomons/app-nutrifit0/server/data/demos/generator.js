'use strict'

require('dotenv').config()

const { User, Order, Product, Category }  = require('../models')
const { mongoose }  = require('../../data')

const { env: { DB_URL } } = process


// parentCategories
// const packsCategoryData = { image: 'http://images.com/1234', name: "Packs" }
// const individualsCategoryData = { image: 'http://images.com/1234', name: "Individuals dish" }

// Children individualCategory
// const meatCategoryData = { image: 'http://images.com/1234', name: "Carne" }
// const soupCategoryData = { image: 'http://images.com/1234', name: "Sopa" }
// const fishCategoryData = { image: 'http://images.com/1234', name: "Pescado" }
// const pastaCategoryData = { image: 'http://images.com/1234', name: "Pasta" }
// const proteinCategoryData = { image: 'http://images.com/1234', name: "Proteinas" }
// const vegetarianCategoryData = { image: 'http://images.com/1234', name: "Vegetarian" }
// const veganCategoryData = { image: 'http://images.com/1234', name: "Vegan" }

// products packCategories
// const packMuscleData = { image: 'http://images.com/1234', name: 'Pack Muscle', description: 'Pack Muscle desc', price: 100 }
// const packBodyTonicData = { image: 'http://images.com/1235', name: 'Pack Body Tonic', description: 'Pack Body Tonic desc', price: 90 }
// const packBurningData = { image: 'http://images.com/1234', name: 'Pack Burning', description: 'Pack Burning desc', price: 85 }
// const packHealthyData = { image: 'http://images.com/1234', name: 'Pack Healthy', description: 'Pack Healthy desc', price: 105 }
// const packVeganData = { image: 'http://images.com/1234', name: 'Pack Vegan', description: 'Pack Vegan desc', price: 95 }
// const packNoGlutenData = { image: 'http://images.com/1234', name: 'Pack No Gluten', description: 'Pack No Gluten desc', price: 100 }


// const packsCategory = new Category(packsCategoryData).save()
// const individualsCategory = new Category(individualsCategoryData).save()

// const arrayPromsisesParents =[packsCategory, individualsCategory ]

// const createParents = createData(arrayPromsesas)

// const [packsCategory, individualsCategory] = createParents

// Children individualCategory
// const meatCategoryData = { image: 'http://images.com/1234', name: "Carne" }
// const soupCategoryData = { image: 'http://images.com/1234', name: "Sopa" }
// const fishCategoryData = { image: 'http://images.com/1234', name: "Pescado" }
// const pastaCategoryData = { image: 'http://images.com/1234', name: "Pasta" }
// const proteinCategoryData = { image: 'http://images.com/1234', name: "Proteinas" }
// const vegetarianCategoryData = { image: 'http://images.com/1234', name: "Vegetarian" }
// const veganCategoryData = { image: 'http://images.com/1234', name: "Vegan" }

// const meatCategory = new Category(meatCategoryData).save()
// const soupCategory = new Category(soupCategoryData).save()
// const fishCategory = new Category(fishCategoryData).save()
// const pastaCategory = new Category(pastaCategoryData).save()
// const proteinCategory = new Category(proteinCategoryData).save()
// const vegetarianCategory = new Category(vegetarianCategoryData).save()
// const veganCategory = new Category(veganCategoryData).save()

// Array IndividualsCategory promises
// const arrayIndividualsCategory = [meatCategory, soupCategory, fishCategory, pastaCategory, proteinCategory, vegetarianCategory, veganCategory]

// const createChildrenIndividuals = createData(arrayIndividualsCategory)


// products individualsCategory
// products meatCategory
const polloVerdurasData = { image: 'http://images.com/1234', name: 'Pollo con verduras', description: 'Pollo con verduras desc', price: 4.25 }
const terneraData = { image: 'http://images.com/1234', name: 'Ternera asada', description: 'Ternera asada desc', price: 4 }
const polloArrozData = { image: 'http://images.com/1234', name: 'Pollo con arroz', description: 'Pollo con arroz desc', price: 4.50 }

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


const polloVerduras = new Product(polloVerdurasData).save()
const ternera = new Product(terneraData).save()
const polloArroz = new Product(polloArrozData).save()
const sopaVerduras = new Product(sopaVerdurasData).save()
const sopaMarisco = new Product(sopaMariscoData).save()
const pescadoPlancha = new Product(pescadoPlanchaData).save()
const salmon = new Product(salmonData).save()
const pescadoVerduras = new Product(pescadoVerdurasData).save()
const tallarines = new Product(tallarinesData).save()
const espagueti = new Product(espaguetiData).save()
const macarronesIntegrales = new Product(macarronesIntegralesData).save()
const arrozIntegral = new Product(arrozIntegralData).save()
const arrozRemolacha = new Product(arrozRemolachaData).save()
const risotto = new Product(risottoData).save()
const ensaladaCol = new Product(ensaladaColData).save()
const tacosFrijoles = new Product(tacosFrijolesData).save()
const pastelesCamote = new Product(pastelesCamoteData).save()
const berenjenas = new Product(berenjenasData).save()
const salteadoBrocoli = new Product(salteadoBrocoliData).save()
const tortillaSin = new Product(tortillaSinData).save()

const promisesProducts = [polloVerduras, ternera, polloArroz, sopaVerduras, sopaMarisco, pescadoPlancha, salmon, pescadoVerduras, tallarines, espagueti, macarronesIntegrales, arrozIntegral, arrozRemolacha, risotto, ensaladaCol, tacosFrijoles, pastelesCamote, berenjenas, salteadoBrocoli, tortillaSin]

const createProducts = createData(promisesProducts)

function createData(promises) {
    mongoose.connect(DB_URL)
        .then((connection) => {
            return Promise.all(promises)
                .then(res => {
                    console.log(res)
                })
                .then(() => {
                    mongoose.connection.close()
                })
        })
        .catch(console.error)
}

