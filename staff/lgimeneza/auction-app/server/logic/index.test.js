'use strict'

require('dotenv').config()

const { mongoose, models: { Product, Address, User } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')

const { env: { DB_URL_TEST } } = process

describe('logic (auction)', () => {

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

    false && beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([Product.remove()])
    })

    false && describe('add product', () => {
        it('should succeed on correct data', () => {
            return logic.addProduct(
                title,
                description,
                startDate,
                endDate,
                startPrice,
                closed,
                image
            ).then(res => {
                return Product.findOne({title})
                .then(data => {
                    expect(res).to.be.true
                    expect(data.title).to.equal(title)
                    expect(data.description).to.equal(description)
                })
            })
        })
        //TODO: Add error handling
    })

    false && describe('list products', () => {
        it('should succeed on correct data', () => {

            const products = indexes.map(() => new Product(product).save())

            return Promise.all(products)
            .then(() => {
                return logic.listProducts()
                .then(products => {
                    expect(products).to.exist
                    expect(products.length).to.equal(indexes.length)
                    expect(products.length).to.not.equal(150)
                    expect(products.length).to.not.equal(0)
                })
            })
        })
        //TODO: Add error handling
    })

    false && describe('retrieve product', () => {
        it('should succeed on correct data', () => {

            const newProduct = new Product(product)

            return newProduct.save()
            .then(res => {
                return logic.retrieveProduct(res._id.toString())
                .then(res => {
                    expect(res).to.exist
                    expect(res.title).to.equal(title)
                    expect(res.description).to.equal(description)
                    expect(res.title).not.to.equal('fake title')
                })
            })            

        })

        it('should fail on no correct data', () => {

            const newProduct = new Product(product)

            return newProduct.save()
            .then(res => {
                return logic.retrieveProduct('5b190a7b91a1554b1fa8b106')
                .catch(({ message }) => expect(message).to.equal(`no product found with id 5b190a7b91a1554b1fa8b106`))
            })            

        })
        //TODO: Add error handling
    })

    false && describe('add user', () => {

    })

    describe('add bid', () => {
        it('should succeed on correct data', async () => {

            const _address = { 
                line1: 'carrer major nº1',
                line2: 'baixos 3a',
                city: 'barcelona',
                province: 'barcelona',
                postcode: '08770',
                country: 'Spain'
            }

            const newAddress = new Address(_address)

            const _user = { 
                email: 'email@email.com',
                password: '123',
                name: 'lilam',
                surname: 'gimenez',
                role: 'admin',
                registerDate: Date.now(),
                products: [],
                address: newAddress,
                wishes:[]
            }

            const newUser = await new User(_user).save()

            const _product = { 
                title: 'Mac Book Pro 2011',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
                startDate: '2012-04-23T18:25:43.511Z',
                endDate: '2012-04-23T18:25:43.511Z',
                startPrice: 500,
                closed: false,
                image: 'la url de la imagen',
                category: null,
                winningBid: null,
                winningUser: null,
                bids: []
            }
            const newProduct = await new Product(_product).save()

            const userId = newUser._id
            const productId = newProduct._id
            const _price = 400

            return logic.addBid(productId, userId, _price)
            .then(bidId => {
                expect(bidId).to.be.a('string')
                expect(bidId).to.exist

                return Product.findById(productId.toString())
                .then(product =>{
                    expect(product).to.exist

                    expect(product.bids).to.exist
                    expect(product.bids.length).to.equal(1)

                    const [{ _id, price }] = product.bids

                    expect(_id.toString()).to.equal(bidId)
                    expect(price).to.equal(_price)
                })
            })

        })
        //TODO: Add error handling
    })

    after(done => mongoose.connection.close(done))
    //after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
