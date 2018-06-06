'use strict'

require('dotenv').config()

const { mongoose, models: { User, Category, Product, Order } } = require('../../../server/data')
const { expect } = require('chai')
const singinLabApi = require('./index')
const _ = require('lodash')
const sinon = require('sinon')
const axios = require('axios')
const jwt = require('jsonwebtoken')

const { env: { DB_URL, API_URL, TOKEN_SECRET } } = process

singinLabApi.url = API_URL

describe('logic (singingLab api)', () => {
    let jackData, annaData, otherjackData, beginnerCourseCategoryData, advancedCourseCategoryData, beginnerCourseData, advancedCourseData
    const dummyUserId = '123456781234567812345678'
    const dummyNoteId = '123456781234567812345678'

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        jackData = { name: 'Jack', surname: 'Johnson', phone: '+34 933 666 777', address: 'Roc Boronat 35', email: 'jj@mail.com', password: '123' }
        annaData = { name: 'Anna', surname: 'Kennedy', phone: '+34 933 666 778', address: 'Llull 69', email: 'ak@mail.com', password: '456' }
        otherjackData = { name: 'Jack', surname: 'Doe', phone: '+34 933 665 778', address: 'Londres 32', email: 'jd@mail.com', password: '789' }
        beginnerCourseCategoryData = { name: 'Beginner Course', description: 'Beginner Course desc', image: 'http://images.com/230957' }
        advancedCourseCategoryData = { name: 'Advanced Course', description: 'Advanced Course desc', image: 'http://images.com/259827' }
        beginnerCourseData = { name: 'Beginner Course I', price: 50, discount: 15, description: 'Beginner Course I desc', image: 'http://images.com/5678', stock: 123 }
        advancedCourseData = { name: 'Advanced Course I', price: 100, discount: 20, description: 'Advanced Course I desc', image: 'http://images.com/1234', stock: 77 }

        return Promise.all([User.remove(), Category.deleteMany(), Product.deleteMany()])
    })


    describe('register user', () => {
        it('should succeed on correct dada', () =>
            singinLabApi.registerUser('John', 'Doe', 'Roc Boronat 35', 'jd@mail.com', '123')
                .then(res => {
                    expect(res).to.be.true
                })
                
        )

        it('should fail on already registered user', () =>
            User.create(jackData)
                .then(() => {
                    const { name, surname, address, email, password } = jackData

                    return singinLabApi.registerUser(name, surname, address, email, password)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`user with email ${jackData.email} already exists`)
                })
        )

        it('should fail on no user name', () =>
            singinLabApi.registerUser()
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            singinLabApi.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            singinLabApi.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            singinLabApi.registerUser(jackData.name)
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            singinLabApi.registerUser(jackData.name, '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            singinLabApi.registerUser(jackData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on no user address', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname)
                .catch(({ message }) => expect(message).to.equal('user address is not a string'))
        )

        it('should fail on empty user address', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname, '')
                .catch(({ message }) => expect(message).to.equal('user address is empty or blank'))
        )

        it('should fail on blank user address', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user address is empty or blank'))
        )

        it('should fail on no user email', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname, jackData.address)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname, jackData.address, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname, jackData.address, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname, jackData.address, jackData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname, jackData.address, jackData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            singinLabApi.registerUser(jackData.name, jackData.surname, jackData.address, jackData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        describe('on unexpected server behavior', () => {
            let sandbox

            beforeEach(() => sandbox = sinon.createSandbox())

            afterEach(() => sandbox.restore())

            it('should fail on response status hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    resolve({ status: 201, data: { status: 'KO' } })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { name, surname, address, email, password } = jackData

                return singinLabApi.registerUser(name, surname, address, email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 201 (KO)`)
                    })
            })

            it('should fail on email hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ response: { data: { error: 'email is not a string' } } })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { name, surname, address, email, password } = jackData

                return singinLabApi.registerUser(name, surname, address, email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal('email is not a string')
                    })
            })

            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { name, surname, address, email, password } = jackData

                return singinLabApi.registerUser(name, surname, address, email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })


    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(jackData)
                .then(() =>
                    singinLabApi.authenticateUser('jj@mail.com', '123')
                        .then(id => {
                            expect(id).to.exist

                            expect(singinLabApi.token).not.to.equal('NO-TOKEN')
                        })
                )
        )

        it('should fail on no user email', () =>
            singinLabApi.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            singinLabApi.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            singinLabApi.authenticateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            singinLabApi.authenticateUser(jackData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            singinLabApi.authenticateUser(jackData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            singinLabApi.authenticateUser(jackData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        describe('on unexpected server behavior', () => {
            let sandbox

            beforeEach(() => sandbox = sinon.createSandbox())

            afterEach(() => sandbox.restore())

            it('should fail on response status hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    resolve({ status: 200, data: { status: 'KO' } })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { email, password } = jackData

                return singinLabApi.authenticateUser(email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 200 (KO)`)
                    })
            })

            it('should fail on email hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ response: { data: { error: 'email is not a string' } } })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { email, password } = jackData

                return singinLabApi.authenticateUser(email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal('email is not a string')
                    })
            })

            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { email, password } = jackData

                return singinLabApi.authenticateUser(email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(jackData)
                .then(({ id }) => {
                    const token = jwt.sign({ id }, TOKEN_SECRET)

                    notesApi.token = token

                    return notesApi.retrieveUser(id)
                })
                .then(user => {
                    expect(user).to.exist
                    console.log(user)
                    const { name, surname, email, _id, password, notes } = user

                    expect(name).to.equal('John')
                    expect(surname).to.equal('Doe')
                    expect(email).to.equal('jd@mail.com')

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    expect(notes).to.be.undefined
                })
        )

        // it('should fail on no user id', () =>
        //     notesApi.retrieveUser()
        //         .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        // )

        // it('should fail on empty user id', () =>
        //     notesApi.retrieveUser('')
        //         .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        // )

        // it('should fail on blank user id', () =>
        //     notesApi.retrieveUser('     ')
        //         .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        // )

        // describe('on unexpected server behavior', () => {
        //     let sandbox

        //     beforeEach(() => sandbox = sinon.createSandbox())

        //     afterEach(() => sandbox.restore())

        //     it('should fail on response status hacked', () => {
        //         const resolved = new Promise((resolve, reject) => {
        //             resolve({ status: 200, data: { status: 'KO' } })
        //         })

        //         sandbox.stub(axios, 'get').returns(resolved)

        //         return notesApi.retrieveUser(fakeUserId)
        //             .catch(({ message }) => {
        //                 expect(message).to.equal(`unexpected response status 200 (KO)`)
        //             })
        //     })

        //     it('should fail on id hacked', () => {
        //         const resolved = new Promise((resolve, reject) => {
        //             reject({ response: { data: { error: 'user id is not a string' } } })
        //         })

        //         sandbox.stub(axios, 'get').returns(resolved)

        //         return notesApi.retrieveUser(fakeUserId)
        //             .catch(({ message }) => {
        //                 expect(message).to.equal('user id is not a string')
        //             })
        //     })

        //     it('should fail on server down', () => {
        //         const resolved = new Promise((resolve, reject) => {
        //             reject({ code: 'ECONNREFUSED' })
        //         })

        //         sandbox.stub(axios, 'get').returns(resolved)

        //         return notesApi.retrieveUser(fakeUserId)
        //             .catch(({ message }) => {
        //                 expect(message).to.equal('could not reach server')
        //             })
        //     })
        // })
    })

    // describe('udpate user', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(jackData)
    //             .then(({ id }) => {
    //                 const token = jwt.sign({ id }, TOKEN_SECRET)

    //                 notesApi.token = token

    //                 return notesApi.updateUser(id, 'Jack', 'Wayne', 'jd@mail.com', '123', 'jw@mail.com', '456')
    //                     .then(res => {
    //                         expect(res).to.be.true

    //                         return User.findById(id)
    //                     })
    //                     .then(user => {
    //                         expect(user).to.exist

    //                         const { name, surname, email, password } = user

    //                         expect(user.id).to.equal(id)
    //                         expect(name).to.equal('Jack')
    //                         expect(surname).to.equal('Wayne')
    //                         expect(email).to.equal('jw@mail.com')
    //                         expect(password).to.equal('456')
    //                     })
    //             })
    //     )

    //     it('should fail on changing email to an already existing user\'s email', () =>
    //         Promise.all([
    //             User.create(jackData),
    //             User.create(otherjackData)
    //         ])
    //             .then(([{ id: id1 }, { id: id2 }]) => {
    //                 const token = jwt.sign({ id: id1 }, TOKEN_SECRET)

    //                 notesApi.token = token

    //                 const { name, surname, email, password } = jackData

    //                 return notesApi.updateUser(id1, name, surname, email, password, otherjackData.email)
    //             })
    //             .catch(({ message }) => expect(message).to.equal(`user with email ${otherjackData.email} already exists`))
    //     )

    //     it('should fail on no user id', () =>
    //         notesApi.updateUser()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         notesApi.updateUser('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         notesApi.updateUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no user name', () =>
    //         notesApi.updateUser(fakeUserId)
    //             .catch(({ message }) => expect(message).to.equal('user name is not a string'))
    //     )

    //     it('should fail on empty user name', () =>
    //         notesApi.updateUser(fakeUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
    //     )

    //     it('should fail on blank user name', () =>
    //         notesApi.updateUser(fakeUserId, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
    //     )

    //     it('should fail on no user surname', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name)
    //             .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
    //     )

    //     it('should fail on empty user surname', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name, '')
    //             .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
    //     )

    //     it('should fail on blank user surname', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
    //     )

    //     it('should fail on no user email', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name, jackData.surname)
    //             .catch(({ message }) => expect(message).to.equal('user email is not a string'))
    //     )

    //     it('should fail on empty user email', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name, jackData.surname, '')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on blank user email', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name, jackData.surname, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on no user password', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name, jackData.surname, jackData.email)
    //             .catch(({ message }) => expect(message).to.equal('user password is not a string'))
    //     )

    //     it('should fail on empty user password', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name, jackData.surname, jackData.email, '')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on blank user password', () =>
    //         notesApi.updateUser(fakeUserId, jackData.name, jackData.surname, jackData.email, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )
    // })

    // describe('unregister user', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(jackData)
    //             .then(({ id }) => {
    //                 const token = jwt.sign({ id }, TOKEN_SECRET)

    //                 notesApi.token = token

    //                 const { email, password } = jackData

    //                 return notesApi.unregisterUser(id, email, password)
    //                     .then(res => {
    //                         expect(res).to.be.true

    //                         return User.findById(id)
    //                     })
    //                     .then(user => {
    //                         expect(user).to.be.null
    //                     })
    //             })
    //     )

    //     it('should fail on no user id', () =>
    //         notesApi.unregisterUser()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         notesApi.unregisterUser('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         notesApi.unregisterUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no user email', () =>
    //         notesApi.unregisterUser(fakeUserId)
    //             .catch(({ message }) => expect(message).to.equal('user email is not a string'))
    //     )

    //     it('should fail on empty user email', () =>
    //         notesApi.unregisterUser(fakeUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on blank user email', () =>
    //         notesApi.unregisterUser(fakeUserId, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on no user password', () =>
    //         notesApi.unregisterUser(fakeUserId, jackData.email)
    //             .catch(({ message }) => expect(message).to.equal('user password is not a string'))
    //     )

    //     it('should fail on empty user password', () =>
    //         notesApi.unregisterUser(fakeUserId, jackData.email, '')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on blank user password', () =>
    //         notesApi.unregisterUser(fakeUserId, jackData.email, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )
    // })


    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})