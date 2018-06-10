'use strict'

require('dotenv').config()

const { mongoose, models: { Product, Category, Address, User, Bid } } = require('./')
const expect = require('expect')

const { env: { DB_URL_TEST } } = process

describe('models (auction)', () => {

    before(() => mongoose.connect(DB_URL_TEST))

    beforeEach(() => Promise.all([Product.deleteMany(), Category.deleteMany(), Address.deleteMany(), User.deleteMany()]))

    describe('create product', () => {
        it('should succeed', () => {

            const _product = { 
                title: 'title test 1',
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

            const newProduct = new Product(_product)

            return newProduct.save()
                .then(product => {
                    expect(product).toBeDefined()
                    expect(product.title).toBe(_product.title)
                    expect(product.description).toBe(_product.description)
                    expect(product.startDate).toEqual(new Date(_product.startDate))
                    expect(product.endDate).toEqual(new Date(_product.endDate))
                })
        })
    })

    describe('create category', () => {
        it('should succeed', () => {

            const _category = { 
                name: 'Computers'
            }

            const newCategory = new Category(_category)

            return newCategory.save()
                .then(category => {
                    expect(category).toBeDefined()
                    expect(category.name).toBe(_category.name)
                })
        })        
    })

    describe('create address', () => {
        it('should succeed', () => {
           
            const _address = { 
                line1: 'carrer major nº1',
                line2: 'baixos 3a',
                city: 'barcelona',
                province: 'barcelona',
                postcode: '08770',
                country: 'Spain'
            }

            const newAddress = new Address(_address)

            return newAddress.save()
                .then(address => {
                    expect(address).toBeDefined()
                    expect(address.line1).toBe(_address.line1)
                    expect(address.line2).toBe(_address.line2)
                    expect(address.city).toBe(_address.city)
                    expect(address.province).toBe(_address.province)
                    expect(address.postcode).toBe(_address.postcode)
                    expect(address.country).toBe(_address.country)
                })
        })        
    })

    describe('create user', () => {
        it('should succeed', () => {
           
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

            const newUser = new User(_user)

            return Promise.all([newUser.save(), newAddress.save()])
                .then(res => {
                    expect(res).toBeDefined()
                    expect(res[0].email).toBe(_user.email)
                })
        })        
    })

    describe('create bid, user, address', () => {
        it('should succeed', () => {

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

            const newUser = new User(_user)

            const _bid = { 
                price: 300,
                date: Date.now(),
                user: newUser
            }

            const newBid = new Bid(_bid)

            return Promise.all([newAddress.save(), newUser.save(), newBid.save()])
                .then(res => {
                    expect(res).toBeDefined()
                    expect(res[2].user.role).toBe(_user.role)
                    expect(res[2].user.address.line1).toBe(_user.address.line1)
                })
        })
    })

    describe('create product, bid, user, address, category', () => {
        it('should succeed', async () => {

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

            const newUser = new User(_user)

            const _bid = { 
                price: 300,
                date: Date.now(),
                user: newUser
            }

            const newBid = new Bid(_bid)

            const _category = { 
                name: 'Computers'
            }

            const newCategory = new Category(_category)

            const _product = { 
                title: 'Mac Book Pro 2011',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
                startDate: '2012-04-23T18:25:43.511Z',
                endDate: '2012-04-23T18:25:43.511Z',
                startPrice: 500,
                closed: false,
                image: 'la url de la imagen',
                category: newCategory,
                winningBid: null,
                winningUser: null,
                bids: newBid
            }
            const newProduct = new Product(_product)

            return Promise.all([newAddress.save(), newUser.save(), newBid.save(), newCategory.save(), newProduct.save()])
                .then(res => {
                    expect(res).toBeDefined()
                    expect(res[0].line1).toBe(_address.line1)
                    expect(res[0].postcode).toBe(_address.postcode)
                    expect(res[1].email).toBe(_user.email)
                    expect(res[1].name).toBe(_user.name)
                    expect(res[2].price).toBe(_bid.price)
                    expect(res[2].user._id).toBe(res[1]._id)
                    expect(res[3].name).toBe(_category.name)
                    expect(res[4].title).toBe(_product.title)
                    expect(res[4].description).toBe(_product.description)
                    expect(res[4].bids[0]._id).toBe(res[2]._id)
                })
        })
    })


    //after(done => mongoose.connection.close(done))
    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
