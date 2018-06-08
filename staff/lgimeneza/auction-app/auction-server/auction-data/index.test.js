'use strict'

require('dotenv').config()

const { mongoose, models: { Product } } = require('./')
const expect = require('expect')

const { env: { DB_URL_TEST } } = process

describe('models (product)', () => {

    before(() => mongoose.connect(DB_URL_TEST))

    beforeEach(() => Promise.all([Product.deleteMany()]))

    describe('create product', () => {
        it('should succeed', () => {

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

            const newProduct = new Product(product)

            return newProduct.save()
                .then(product => {
                    expect(product).toBeDefined()
                    expect(product.title).toBe(title)
                    expect(product.description).toBe(description)
                    expect(product.startDate).toEqual(new Date(startDate))
                    expect(product.endDate).toEqual(new Date(endDate))
                })
        })
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
