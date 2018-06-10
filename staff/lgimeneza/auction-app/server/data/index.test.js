'use strict'

require('dotenv').config()

const { mongoose, models: { Product, Category, Address, User } } = require('./')
const expect = require('expect')

const { env: { DB_URL_TEST } } = process

describe('models (auction)', () => {

    before(() => mongoose.connect(DB_URL_TEST))

    beforeEach(() => Promise.all([Product.deleteMany(), Category.deleteMany(), Address.deleteMany(), User.deleteMany()]))

    describe('create product', () => {
        it('should succeed', () => {

            const title = 'title test 1',
            description = 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
            startDate = '2012-04-23T18:25:43.511Z',
            endDate = '2012-04-23T18:25:43.511Z',
            startPrice = 500,
            closed = false,
            image = 'la url de la imagen',
            category = '',
            winningBid = '',
            winningUser = '',
            bids = ''
        
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

            return newUser.save()
                .then(user => {
                    expect(user).toBeDefined()
                    expect(user.email).toBe(_user.email)
                })
        })        
    })



    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
