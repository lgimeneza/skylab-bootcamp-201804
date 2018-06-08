'use strict'

require('dotenv').config()

const { mongoose, models: { Product } } = require('data')
const { expect } = require('chai')
const notesApi = require('.')

const { env: { DB_URL_TEST, API_URL } } = process

notesApi.url = API_URL

describe('logic (auction api)', () => {

    const title = 'title test 1',
    description = 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
    startDate = '2012-04-23T18:25:43.511Z',
    endDate = '2012-04-23T18:25:43.511Z',
    startPrice = 500,
    closed = false,
    image = 'la url de la imagen'

    const product = { 
        title,
        description,
        startDate,
        endDate,
        startPrice,
        closed,
        image
    }

    const indexes = []

    before(() => mongoose.connect(DB_URL_TEST))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([Product.remove()])
    })

    describe('list products', () => {
        it('should succeed on correct data', () => {

            console.log('indexes', indexes.length)

            const products = indexes.map(() => new Product(product).save())

            return Promise.all(products)
            .then(() => {
                return notesApi.listProducts()
                .then(products => {
                    expect(products).to.exist
                    expect(products.length).to.equal(indexes.length)
                    expect(products.length).to.not.equal(150)
                    expect(products.length).to.not.equal(0)

                    products.forEach(({ title, description, startPrice }) => {
                        expect(title).to.include(product.title)
                        expect(description).to.include(product.description)
                        expect(startPrice).to.equal(product.startPrice)
                    })
                })
            })
        })
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})