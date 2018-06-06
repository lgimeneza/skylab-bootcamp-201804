'use strict'

require('dotenv').config()

const { mongoose, models: { User, Order, Product, Category } } = require('../models')

const { env: { DB_URL } } = process

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
// parentCategories
const packsCategoryData = { image: 'http://images.com/1234', name: "Packs" }
const individualsCategoryData = { image: 'http://images.com/1234', name: "Individuals dish" }

// Children individualCategory
const meatCategoryData = { image: 'http://images.com/1234', name: "Carne" }
const soupCategoryData = { image: 'http://images.com/1234', name: "Sopa" }
const fishCategoryData = { image: 'http://images.com/1234', name: "Pescado" }
const pastaCategoryData = { image: 'http://images.com/1234', name: "Pasta" }
const proteinCategoryData = { image: 'http://images.com/1234', name: "Proteinas" }
const vegetarianCategoryData = { image: 'http://images.com/1234', name: "Vegetarian" }
const veganCategoryData = { image: 'http://images.com/1234', name: "Vegan" }

// products packCategories
const packMuscleData = { image: 'http://images.com/1234', name: 'Pack Muscle', description: 'Pack Muscle desc', price: 100 }
const packBodyTonicData = { image: 'http://images.com/1235', name: 'Pack Body Tonic', description: 'Pack Body Tonic desc', price: 90 }
const packBurningData = { image: 'http://images.com/1234', name: 'Pack Burning', description: 'Pack Burning desc', price: 85 }
const packHealthyData = { image: 'http://images.com/1234', name: 'Pack Healthy', description: 'Pack Healthy desc', price: 105 }
const packVeganData = { image: 'http://images.com/1234', name: 'Pack Vegan', description: 'Pack Vegan desc', price: 95 }
const packNoGlutenData = { image: 'http://images.com/1234', name: 'Pack No Gluten', description: 'Pack No Gluten desc', price: 100 }

// products individualsCategory
// products meatCategory
const polloVerduras = { image: 'http://images.com/1234', name: 'Pollo con verduras', description: 'Pollo con verduras desc', price: 100 }
const terneraData = { image: 'http://images.com/1234', name: 'Ternera asada', description: 'Ternera asada desc', price: 100 }
const polloArrozData = { image: 'http://images.com/1234', name: 'Pollo con arroz', description: 'Pollo con arroz desc', price: 100 }

// products soupCategory
const sopaVerdurasData = { image: 'http://images.com/1234', name: 'Sopa de verduras', description: 'Sopa de verduras desc', price: 100 }
const sopaMariscoData = { image: 'http://images.com/1234', name: 'Sopa de marisco', description: 'Sopa de marisco desc', price: 100 }

// products fishCategory
const pescadoPlanchaData = { image: 'http://images.com/1234', name: 'Pescado a la plancha', description: 'Pescado a la plancha desc', price: 100 }
const salmonData = { image: 'http://images.com/1234', name: 'Salmón ahumado', description: 'Salmón ahumado desc', price: 100 }
const pescadoVerdurasMuscleData = { image: 'http://images.com/1234', name: 'Pescado con verduras', description: 'Pescado con verduras desc', price: 100 }

// products pastaCategory
const tallarinesData = { image: 'http://images.com/1234', name: 'Tallarines con verdura', description: 'Tallarines con verdura', price: 100 }
const espaguetiData = { image: 'http://images.com/1234', name: 'Espagueti mediterráneo', description: 'Espagueti mediterráneo', price: 100 }
const macarronesIntegralesData = { image: 'http://images.com/1234', name: 'Macarrones integrales', description: 'Macarrones integrales desc', price: 100 }

// products riceCategory
const arrozIntegralData = { image: 'http://images.com/1234', name: 'Arroz integral', description: 'Arroz integral desc', price: 100 }
const arrozRemolachaData = { image: 'http://images.com/1234', name: 'Arroz con remolacha', description: 'Arroz con remolacha desc', price: 100 }
const risottoData = { image: 'http://images.com/1234', name: 'Risotto', description: 'Risotto desc', price: 100 }

// products vegetarianCategory
const ensaladaColData = { image: 'http://images.com/1234', name: 'Ensalada de col', description: 'Ensalada de Col desc', price: 100 }
const tacosFrijolesData = { image: 'http://images.com/1234', name: 'tacos de frijoles', description: 'tacos de frijoles desc', price: 100 }
const pastelesCamoteData = { image: 'http://images.com/1234', name: 'Pasteles de camotes', description: 'Pasteles de camotes desc', price: 100 }

// products veganCategory
const berenjenasData = { image: 'http://images.com/1234', name: 'Berenjenas al miso', description: 'Berenjenas al miso desc', price: 100 }
const salteadoBrocoliData = { image: 'http://images.com/1234', name: 'Salteado de Brocóli', description: 'Salteado de Brócoli desc', price: 100 }
const tortillaSinData = { image: 'http://images.com/1234', name: 'Tortilla sin huevos', description: 'Tortilla sin huevos desc', price: 100 }


const packsCategory = newCat(packsCategoryData).save()
const individualsCategory = newCat(individualsCategoryData).save()

const arrayPromsisesParents =[packsCategory, individualsCategory ]

const createParents = createData(arrayPromsesas)

const [packsCategory, individualsCategory] = createParents

const dataHijo1 = {name: "asdf", parent: packsCategory._id}
const dataHijo2 = {name: "asfd", parent: individualsCategory._id}

const catHijo1 = newCat(dataHijo1).save()
const catHijo2 = newCat(dataHijo2).save()

const arrayPromsesasHijos = [cat]

hijosResueltos = createData(arrayPromsesas)
