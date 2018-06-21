'use strict'

require('dotenv').config()

const { mongoose, models: { Product, Category, Address, User, Bid } } = require('data')
const { expect } = require('chai')
const auctionApi = require('.')

const { env: { DB_URL_TEST, API_URL } } = process

auctionApi.url = API_URL

describe('logic (auction api)', () => {

    const image01 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product01.png?alt=media&token=98d69ce5-7c4c-4665-811f-b4a2bf15e150' // Macbook 13
    const category01 = new Category({ name: 'Laptops' })
    const address01 = new Address({ line1: 'carrer major nº1', line2: 'baixos 3a', city: 'barcelona',  province: 'barcelona', postcode: '08770', country: 'Spain' })
    const user01 = new User({ email: 'jd@email.com', password: '123', name: 'John', surname: 'Doe', role: 'customer', registerDate: Date.now(), products: [], address: address01, wishes:[] })
    const bid01 = new Bid({ price: 120, date: Date.now(), user: user01 })
    const bid02 = new Bid({ price: 150, date: Date.now(), user: user01 })

    const title = 'MacBook Pro de 13 pulgadas 128GB',
        description = 'Intel Core i5 de doble núcleo a 2,3 GHz8 GB de memoria RAM128 GB flash PCIeIntel Iris Plus Graphics 640',
        startDate = Date.now(),
        endDate = Date.now(),
        startPrice = 100,
        currentPrice = 150,
        currentUser = user01,
        currentBid = bid02,
        closed = false,
        images = [image01],
        category = category01,
        winningBid = null,
        winningUser = null,
        bids = [bid01, bid02]

    const product = {
        title,
        description,
        startDate,
        endDate,
        startPrice,
        currentPrice,
        currentUser,
        currentBid,
        closed,
        images,
        category,
        winningBid,
        winningUser,
        bids,
    }

    const indexes = []

    before(() => mongoose.connect(DB_URL_TEST))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([Product.remove(), User.remove()])
    })

    false && describe('list products', () => {
        it('should succeed on correct data', () => {

            console.log('indexes', indexes.length)

            const products = indexes.map(() => new Product(product).save())

            return Promise.all(products)
            .then(() => {
                return auctionApi.listProducts()
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

    describe('register user', () => {
        it('should succeed on correct dada', () =>
            auctionApi.registerUser('John', 'Doe', 'jd@email.com', '123')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on already registered user', () =>
            user01.save()
                .then((user) => {
                    const { name, surname, email, password } = user

                    return auctionApi.registerUser(name, surname, email, password)
                        .catch(({ message }) => {
                            expect(message).to.equal(`user with email ${user.email} already exists`)
                        })
                })
        )

        false && it('should fail on no user name', () =>
            auctionApi.registerUser()
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        false && it('should fail on empty user name', () =>
            auctionApi.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        false && it('should fail on blank user name', () =>
            auctionApi.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        false && it('should fail on no user surname', () =>
            auctionApi.registerUser(userData.name)
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        false && it('should fail on empty user surname', () =>
            auctionApi.registerUser(userData.name, '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        false && it('should fail on blank user surname', () =>
            auctionApi.registerUser(userData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        false && it('should fail on no user email', () =>
            auctionApi.registerUser(userData.name, userData.surname)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        false && it('should fail on empty user email', () =>
            auctionApi.registerUser(userData.name, userData.surname, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        false && it('should fail on blank user email', () =>
            auctionApi.registerUser(userData.name, userData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        false && it('should fail on no user password', () =>
            auctionApi.registerUser(userData.name, userData.surname, userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        false && it('should fail on empty user password', () =>
            auctionApi.registerUser(userData.name, userData.surname, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        false && it('should fail on blank user password', () =>
            auctionApi.registerUser(userData.name, userData.surname, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        false && describe('on unexpected server behavior', () => {
            let sandbox

            beforeEach(() => sandbox = sinon.createSandbox())

            afterEach(() => sandbox.restore())

            it('should fail on response status hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    resolve({ status: 201, data: { status: 'KO' } })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { name, surname, email, password } = userData

                return auctionApi.registerUser(name, surname, email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 201 (KO)`)
                    })
            })

            it('should fail on email hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ response: { data: { error: 'email is not a string' } } })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { name, surname, email, password } = userData

                return auctionApi.registerUser(name, surname, email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal('email is not a string')
                    })
            })

            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { name, surname, email, password } = userData

                return auctionApi.registerUser(name, surname, email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})