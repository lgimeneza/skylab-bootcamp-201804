'use strict'

require('dotenv').config()

const { mongoose, models: { User, Order, Product, Category } } = require('data')
const { expect } = require('chai')
const clientApi = require('./index')
const _ = require('lodash')
const sinon = require('sinon')
const axios = require('axios')
const jwt = require('jsonwebtoken')

const { env: { DB_URL, API_URL, TOKEN_SECRET } } = process

clientApi.url = API_URL

describe('logic Api (api)', () => {
    const userDataRegister = { username: 'sergi', email: 'ser@email.com', password: '123', repeatPassword: '123' }
    const userData = { name: 'Sergio', surname: 'M', username: 'sergi', email: 'ser@email.com', password: '123', address: 'Calle V', phone: 123456789, points: 4, orders: [] }
    const otherUserData = { name: 'Jack', surname: 'Wayne', email: 'jw@mail.com', password: '456' }
    const fakeUserId = '123456781234567812345678'
    const indexes = []

    // products data
    const polloVerdurasData = { image: 'http://images.com/1234', name: 'Pollo con verduras', description: 'Pollo con verduras desc', price: 4.25 }
    const terneraData = { image: 'http://images.com/1234', name: 'Ternera asada', description: 'Ternera asada desc', price: 4 }
    const polloArrozData = { image: 'http://images.com/1234', name: 'Pollo con arroz', description: 'Pollo con arroz desc', price: 4.50 }
    const sopaVerdurasData = { image: 'http://images.com/1234', name: 'Sopa de verduras', description: 'Sopa de verduras desc', price: 3 }
    const sopaMariscoData = { image: 'http://images.com/1234', name: 'Sopa de marisco', description: 'Sopa de marisco desc', price: 3.25 }
    const pescadoPlanchaData = { image: 'http://images.com/1234', name: 'Pescado a la plancha', description: 'Pescado a la plancha desc', price: 4 }
    // categories
    const pack_CategoryData = { name: 'Pack' }
    const individuals_CategoryData = { name: 'Individuals' }
    const meat_CategoryData = { name: 'Carne' }
    const soup_CategoryData = { name: 'Sopa' }

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([User.remove(), Product.deleteMany(), Category.deleteMany()])
    })

    describe('register user', () => {

        const { username, email, password, repeatPassword } = userDataRegister

        it('should succeed on correct dada', () =>
            clientApi.registerUser(username, email, password, repeatPassword)
                .then(res => {
                    expect(res).to.be.true
                })
        )

        it('should fail on existing username', () => {
            User.create(userDataRegister)
                .then(() => {
                    return clientApi.registerUser(username, 'other@email.com', '123', '123')
                        .catch(({ message }) => expect(message).to.equal(`user with username ${username} already exists`))
                })
        })

        it('should fail on existing email', () => {
            User.create(userDataRegister)
                .then(() => {
                    return clientApi.registerUser('otherUsername', email, '123', '123')
                        .catch(({ message }) => expect(message).to.equal(`user with email ${email} already exists`))
                })
        })

        it('should fail on no user username', () =>
            clientApi.registerUser()
                .catch(({ message }) => expect(message).to.equal('username is not a string'))
        )

        it('should fail on empty user username', () =>
            clientApi.registerUser('')
                .catch(({ message }) => expect(message).to.equal('username is empty or blank'))
        )

        it('should fail on blank user username', () =>
            clientApi.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('username is empty or blank'))
        )

        it('should fail on no user email', () =>
            clientApi.registerUser(username)
                .catch(({ message }) => expect(message).to.equal('email is not a string'))
        )

        it('should fail on empty user email', () =>
            clientApi.registerUser(username, '')
                .catch(({ message }) => expect(message).to.equal('email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            clientApi.registerUser(username, '     ')
                .catch(({ message }) => expect(message).to.equal('email is empty or blank'))
        )

        it('should fail on no user password', () =>
            clientApi.registerUser(username, email)
                .catch(({ message }) => expect(message).to.equal('password is not a string'))
        )

        it('should fail on empty user password', () =>
            clientApi.registerUser(username, email, '')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            clientApi.registerUser(username, email, '     ')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )

        it('should fail on no user repeatPassword', () =>
            clientApi.registerUser(username, email, password)
                .catch(({ message }) => expect(message).to.equal('repeatPassword is not a string'))
        )

        it('should fail on empty user repeatPassword', () =>
            clientApi.registerUser(username, email, password, '')
                .catch(({ message }) => expect(message).to.equal('repeatPassword is empty or blank'))
        )

        it('should fail on blank user repeatPassword', () =>
            clientApi.registerUser(username, email, password, '     ')
                .catch(({ message }) => expect(message).to.equal('repeatPassword is empty or blank'))
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

                const { username, email, password, repeatPassword } = userDataRegister

                return clientApi.registerUser(username, email, password, repeatPassword)
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 201 (KO)`)
                    })
            })

            it('should fail on email hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ response: { data: { error: 'email is not a string' } } })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { username, email, password, repeatPassword } = userDataRegister

                return clientApi.registerUser(username, email, password, repeatPassword)
                    .catch(({ message }) => {
                        expect(message).to.equal('email is not a string')
                    })
            })

            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { username, email, password, repeatPassword } = userDataRegister

                return clientApi.registerUser(username, email, password, repeatPassword)
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })


    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userDataRegister)
                .then(id => {
                    return clientApi.authenticateUser('ser@email.com', '123')
                        .then(id => {
                            expect(id).to.exist
                            expect(clientApi.token).not.to.equal('NO-TOKEN')
                        })

                })
        )

        it('should fail on no user email', () =>
            clientApi.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('email is not a string'))
        )

        it('should fail on empty email', () =>
            clientApi.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('email is empty or blank'))
        )

        it('should fail on blank email', () =>
            clientApi.authenticateUser('     ')
                .catch(({ message }) => expect(message).to.equal('email is empty or blank'))
        )

        it('should fail on no password', () =>
            clientApi.authenticateUser(userDataRegister.email)
                .catch(({ message }) => expect(message).to.equal('password is not a string'))
        )

        it('should fail on empty password', () =>
            clientApi.authenticateUser(userDataRegister.email, '')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )

        it('should fail on blank password', () =>
            clientApi.authenticateUser(userDataRegister.email, '     ')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
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

                const { email, password } = userData

                return clientApi.authenticateUser(email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 200 (KO)`)
                    })
            })

            it('should fail on email hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ response: { data: { error: 'email is not a string' } } })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { email, password } = userData

                return clientApi.authenticateUser(email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal('email is not a string')
                    })
            })

            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'post').returns(resolved)

                const { email, password } = userData

                return clientApi.authenticateUser(email, password)
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    const token = jwt.sign({ id }, TOKEN_SECRET)

                    clientApi.token(token)

                    return clientApi.retrieveUser(id)
                })
                .then(user => {
                    expect(user).to.exist

                    const { _id, name, surname, username, email, password, address, phone, points, orders } = user

                    expect(name).to.equal('Sergio')
                    expect(surname).to.equal('M')
                    expect(username).to.equal('sergi')
                    expect(email).to.equal('ser@email.com')
                    expect(address).to.equal('Calle V')
                    expect(phone).to.equal(123456789)

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    expect(points).to.be.undefined
                    expect(orders).to.be.undefined
                })
        )

        it('should fail on no user id', () =>
            clientApi.retrieveUser()
                .catch(({ message }) => expect(message).to.equal('userId is not a string'))
        )

        it('should fail on empty user userId', () =>
            clientApi.retrieveUser('')
                .catch(({ message }) => expect(message).to.equal('userId is empty or blank'))
        )

        it('should fail on blank user userId', () =>
            clientApi.retrieveUser('     ')
                .catch(({ message }) => expect(message).to.equal('userId is empty or blank'))
        )

        describe('on unexpected server behavior', () => {
            let sandbox

            beforeEach(() => sandbox = sinon.createSandbox())

            afterEach(() => sandbox.restore())

            it('should fail on response status hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    resolve({ status: 200, data: { status: 'KO' } })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.retrieveUser(fakeUserId)
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 200 (KO)`)
                    })
            })

            it('should fail on id hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ response: { data: { error: 'user id is not a string' } } })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.retrieveUser(fakeUserId)
                    .catch(({ message }) => {
                        expect(message).to.equal('user id is not a string')
                    })
            })

            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.retrieveUser(fakeUserId)
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })

    // describe('udpate user', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id }) => {
    //                 const token = jwt.sign({ id }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.updateUser(id, 'Jack', 'Wayne', 'jd@mail.com', '123', 'jw@mail.com', '456')
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
    //             User.create(userData),
    //             User.create(otherUserData)
    //         ])
    //             .then(([{ id: id1 }, { id: id2 }]) => {
    //                 const token = jwt.sign({ id: id1 }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 const { name, surname, email, password } = userData

    //                 return clientApi.updateUser(id1, name, surname, email, password, otherUserData.email)
    //             })
    //             .catch(({ message }) => expect(message).to.equal(`user with email ${otherUserData.email} already exists`))
    //     )

    //     it('should fail on no user id', () =>
    //         clientApi.updateUser()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         clientApi.updateUser('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         clientApi.updateUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no user name', () =>
    //         clientApi.updateUser(fakeUserId)
    //             .catch(({ message }) => expect(message).to.equal('user name is not a string'))
    //     )

    //     it('should fail on empty user name', () =>
    //         clientApi.updateUser(fakeUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
    //     )

    //     it('should fail on blank user name', () =>
    //         clientApi.updateUser(fakeUserId, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
    //     )

    //     it('should fail on no user surname', () =>
    //         clientApi.updateUser(fakeUserId, userData.name)
    //             .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
    //     )

    //     it('should fail on empty user surname', () =>
    //         clientApi.updateUser(fakeUserId, userData.name, '')
    //             .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
    //     )

    //     it('should fail on blank user surname', () =>
    //         clientApi.updateUser(fakeUserId, userData.name, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
    //     )

    //     it('should fail on no user email', () =>
    //         clientApi.updateUser(fakeUserId, userData.name, userData.surname)
    //             .catch(({ message }) => expect(message).to.equal('user email is not a string'))
    //     )

    //     it('should fail on empty user email', () =>
    //         clientApi.updateUser(fakeUserId, userData.name, userData.surname, '')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on blank user email', () =>
    //         clientApi.updateUser(fakeUserId, userData.name, userData.surname, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on no user password', () =>
    //         clientApi.updateUser(fakeUserId, userData.name, userData.surname, userData.email)
    //             .catch(({ message }) => expect(message).to.equal('user password is not a string'))
    //     )

    //     it('should fail on empty user password', () =>
    //         clientApi.updateUser(fakeUserId, userData.name, userData.surname, userData.email, '')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on blank user password', () =>
    //         clientApi.updateUser(fakeUserId, userData.name, userData.surname, userData.email, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )
    // })

    // describe('unregister user', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id }) => {
    //                 const token = jwt.sign({ id }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 const { email, password } = userData

    //                 return clientApi.unregisterUser(id, email, password)
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
    //         clientApi.unregisterUser()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         clientApi.unregisterUser('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         clientApi.unregisterUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no user email', () =>
    //         clientApi.unregisterUser(fakeUserId)
    //             .catch(({ message }) => expect(message).to.equal('user email is not a string'))
    //     )

    //     it('should fail on empty user email', () =>
    //         clientApi.unregisterUser(fakeUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on blank user email', () =>
    //         clientApi.unregisterUser(fakeUserId, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on no user password', () =>
    //         clientApi.unregisterUser(fakeUserId, userData.email)
    //             .catch(({ message }) => expect(message).to.equal('user password is not a string'))
    //     )

    //     it('should fail on empty user password', () =>
    //         clientApi.unregisterUser(fakeUserId, userData.email, '')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on blank user password', () =>
    //         clientApi.unregisterUser(fakeUserId, userData.email, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )
    // })

    // describe('add note', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id }) => {
    //                 const token = jwt.sign({ id }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.addNote(id, noteText)
    //                     .then(noteId => {
    //                         expect(noteId).to.be.a('string')
    //                         expect(noteId).to.exist

    //                         return User.findById(id)
    //                             .then(user => {
    //                                 expect(user).to.exist

    //                                 expect(user.notes).to.exist
    //                                 expect(user.notes.length).to.equal(1)

    //                                 const [{ id, text }] = user.notes

    //                                 expect(id).to.equal(noteId)
    //                                 expect(text).to.equal(noteText)
    //                             })
    //                     })
    //             })
    //     )

    //     it('should fail on wrong user id', () =>
    //         User.create(userData)
    //             .then(({ id }) => {
    //                 const token = jwt.sign({ id }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.addNote(fakeUserId, noteText)
    //                     .catch(({ message }) => expect(message).to.equal(`user id ${fakeUserId} does not match token user id ${id}`))
    //             })
    //     )

    //     it('should fail on no user id', () =>
    //         clientApi.addNote()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         clientApi.addNote('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         clientApi.addNote('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no text', () => {
    //         clientApi.addNote(fakeUserId)
    //             .catch(({ message }) => expect(message).to.equal('text is not a string'))
    //     })

    //     it('should fail on empty text', () =>
    //         clientApi.addNote(fakeUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('text is empty or blank'))
    //     )

    //     it('should fail on blank text', () =>
    //         clientApi.addNote(fakeUserId, '   ')
    //             .catch(({ message }) => expect(message).to.equal('text is empty or blank'))
    //     )
    // })

    // describe('retrieve note', () => {
    //     it('should succeed on correct data', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId, notes: [{ id: noteId }] }) => {
    //                 const token = jwt.sign({ id: userId }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.retrieveNote(userId, noteId)
    //             })
    //             .then(({ id, text }) => {
    //                 expect(id).to.equal(note.id)
    //                 expect(text).to.equal(note.text)
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         clientApi.retrieveNote()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         clientApi.retrieveNote('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         clientApi.retrieveNote('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on wrong user id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ notes: [{ id: noteId }] }) => {
    //                 const token = jwt.sign({ id: user.id }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.retrieveNote(fakeUserId, noteId)
    //                     .catch(({ message }) => expect(message).to.equal(`user id ${fakeUserId} does not match token user id ${user.id}`))
    //             })
    //     })

    //     it('should fail on no note id', () =>
    //         clientApi.retrieveNote(fakeUserId)
    //             .catch(({ message }) => expect(message).to.equal('note id is not a string'))
    //     )

    //     it('should fail on empty note id', () =>
    //         clientApi.retrieveNote(fakeUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('note id is empty or blank'))
    //     )

    //     it('should fail on blank note id', () =>
    //         clientApi.retrieveNote(fakeUserId, '       ')
    //             .catch(({ message }) => expect(message).to.equal('note id is empty or blank'))
    //     )

    //     it('should fail on wrong note id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId }) => {
    //                 const token = jwt.sign({ id: userId }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.retrieveNote(userId, fakeNoteId)
    //                     .catch(({ message }) => expect(message).to.equal(`no note found with id ${fakeNoteId}`))
    //             })
    //     })
    // })

    describe('list main categories', () => {
        it('should succeed on correct data', () => {
            return Promise.all([
                new Category(pack_CategoryData).save(),
                new Category(individuals_CategoryData).save()
            ])
                .then(([pack_Category, individuals_Category]) => {
                            return clientApi.listParentsCategory()
                                .then(categories => {
                                    
                                    expect(categories.length).to.equal(2)

                                    const category = categories.find(category => category.id == pack_Category._id.toString())

                                    expect(category.id).to.equal(pack_Category._doc._id.toString())
                                    expect(category.id).not.to.equal(individuals_Category._doc._id.toString())
                                    expect(category.name).to.equal(pack_Category.name)
                                })
                        
                })
        })

        describe('on unexpected server behavior', () => {
            let sandbox

            beforeEach(() => sandbox = sinon.createSandbox())

            afterEach(() => sandbox.restore())

            it('should fail on response status hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    resolve({ status: 201, data: { status: 'KO' } })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.listParentsCategory()
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 201 (KO)`)
                    })
            })

            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.listParentsCategory()
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })

    describe('list subcategories', () => {
        it('should succeed on correct data', () => {
            return Promise.all([
     
                new Category(individuals_CategoryData).save(),

                new Category(meat_CategoryData).save(),
                
            ])
                .then(([individuals_Category, meat_Category]) => {

                    meat_Category.parent = individuals_Category._id.toString()

                    const individuals_CategoryId = individuals_Category._id.toString()
                   
                    return meat_Category.save()
                        .then(() => {
                            return clientApi.listSubcategories(individuals_CategoryId)
                                .then(categories => {
                                    expect(categories.length).to.equal(1)

                                    const category = categories.find(category => category.id == meat_Category._id.toString())

                                    expect(category.id).to.equal(meat_Category._doc._id.toString())
                                    expect(category.name).to.equal(meat_Category.name)
                                    expect(category.parentId).to.equal(individuals_Category._id.toString())
                                })
                        })
                })
        })

        describe('on unexpected server behavior', () => {
            let sandbox

            beforeEach(() => sandbox = sinon.createSandbox())

            afterEach(() => sandbox.restore())

            it('should fail on response status hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    resolve({ status: 201, data: { status: 'KO' } })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.listSubcategories('123456789213')
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 201 (KO)`)
                    })
            })


            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.listSubcategories('123456789213')
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })

    describe('list products by category', () => {
        it('should succeed on correct data', () => {
            return Promise.all([
                new Product(polloVerdurasData).save(),
                new Product(terneraData).save(),
                new Product(polloArrozData).save(),
                new Product(sopaVerdurasData).save(),
                new Product(sopaMariscoData).save(),
                new Product(pescadoPlanchaData).save(),
                new Category(individuals_CategoryData).save()
            ])
                .then(([polloVerduras, ternera, polloArroz, sopaVerduras, sopaMarisco, pescadoPlancha, individuals_Category]) => {

                    polloVerduras.category = individuals_Category._id;
                    ternera.category = individuals_Category._id;
                    polloArroz.category = individuals_Category._id;

                    const individuals_CategoryId = individuals_Category._id.toString()
                    
                    return Promise.all([
                        polloVerduras.save(),
                        ternera.save(),
                        polloArroz.save()
                    ])
                        .then(() => {
                            return clientApi.listProductsByCategory(individuals_CategoryId)
                                .then(products => {
                                    expect(products.length).to.equal(3)

                                    const product = products.find(product => product.id == polloVerduras._id.toString())

                                    expect(product.id).to.equal(polloVerduras._doc._id.toString())
                                    expect(product.id).not.to.equal(ternera._doc._id.toString())
                                    expect(product.name).to.equal(polloVerduras.name)
                                    expect(product.description).to.equal(polloVerduras.description)
                                    expect(product.price).to.equal(polloVerduras.price)
                                    expect(product.categoryId).to.equal(individuals_Category._id.toString())
                                })
                        })
                })
        })

        describe('on unexpected server behavior', () => {
            let sandbox

            beforeEach(() => sandbox = sinon.createSandbox())

            afterEach(() => sandbox.restore())

            it('should fail on response status hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    resolve({ status: 201, data: { status: 'KO' } })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.listProductsByCategory('123456789213')
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 201 (KO)`)
                    })
            })


            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.listProductsByCategory('123456789213')
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })

    describe('list all products', () => {
        it('should succeed on correct data', () => {
            return Promise.all([
                new Product(polloVerdurasData).save(),
                new Product(terneraData).save(),
                new Product(polloArrozData).save(),
                new Product(sopaVerdurasData).save(),
                new Product(sopaMariscoData).save(),
                new Product(pescadoPlanchaData).save(),
            ])
                .then(([polloVerduras, ternera, polloArroz, sopaVerduras, sopaMarisco, pescadoPlancha ]) => {

                    return polloVerduras.save()
                        .then(() => {
                            return clientApi.listProducts()
                                .then(products => {
                                    expect(products.length).to.equal(6)

                                    const product = products.find(product => product.id === polloVerduras._id.toString())

                                    expect(product.id).to.equal(polloVerduras._doc._id.toString())
                                    expect(product.id).not.to.equal(ternera._doc._id.toString())
                                    expect(product.name).to.equal(polloVerduras.name)
                                    expect(product.description).to.equal(polloVerduras.description)
                                    expect(product.price).to.equal(polloVerduras.price)
                                })
                        })
                })
        })

        describe('on unexpected server behavior', () => {
            let sandbox

            beforeEach(() => sandbox = sinon.createSandbox())

            afterEach(() => sandbox.restore())

            it('should fail on response status hacked', () => {
                const resolved = new Promise((resolve, reject) => {
                    resolve({ status: 201, data: { status: 'KO' } })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.listProducts()
                    .catch(({ message }) => {
                        expect(message).to.equal(`unexpected response status 201 (KO)`)
                    })
            })


            it('should fail on server down', () => {
                const resolved = new Promise((resolve, reject) => {
                    reject({ code: 'ECONNREFUSED' })
                })

                sandbox.stub(axios, 'get').returns(resolved)

                return clientApi.listProducts()
                    .catch(({ message }) => {
                        expect(message).to.equal('could not reach server')
                    })
            })
        })
    })

    // describe('update note', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id: userId }) =>
    //                 User.findByIdAndUpdate(userId, { $push: { notes: { text: noteText } } }, { new: true })
    //                     .then(user => {
    //                         const noteId = user.notes[user.notes.length - 1].id

    //                         const newNoteText = `${noteText} 2`

    //                         const token = jwt.sign({ id: user.id }, TOKEN_SECRET)

    //                         clientApi.token = token

    //                         return clientApi.updateNote(userId, noteId, newNoteText)
    //                             .then(res => {
    //                                 expect(res).to.be.true

    //                                 return User.findById(userId)
    //                             })
    //                             .then(({ notes }) => {
    //                                 const [{ id, text }] = notes

    //                                 expect(id).to.equal(noteId)
    //                                 expect(text).to.equal(newNoteText)
    //                             })
    //                     })
    //             )
    //     )

    //     it('should fail on non user id', () =>
    //         clientApi.updateNote()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         clientApi.updateNote('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         clientApi.updateNote('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on wrong user id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ notes: [{ id: noteId }] }) => {
    //                 const token = jwt.sign({ id: user.id }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.updateNote(fakeUserId, noteId, `${noteText} 2`)
    //                     .catch(({ message }) => expect(message).to.equal(`user id ${fakeUserId} does not match token user id ${user.id}`))
    //             })
    //     })

    //     it('should fail on wrong note id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId }) => {
    //                 const token = jwt.sign({ id: user.id }, TOKEN_SECRET)

    //                 clientApi.token = token

    //                 return clientApi.updateNote(userId, fakeNoteId, `${noteText} 2`)
    //                     .catch(({ message }) => expect(message).to.equal(`no note found with id ${fakeNoteId}`))
    //             })
    //     })
    // })

    // describe('remove note', () => {
    //     it('should succeed on correct data', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId, notes: [{ id: noteId }] }) => {
    //                 const token = jwt.sign({ id: userId }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.removeNote(userId, noteId)
    //                     .then(res => {
    //                         expect(res).to.be.true

    //                         return User.findById(userId)
    //                     })
    //                     .then(({ notes }) => {
    //                         expect(notes).to.exist
    //                         expect(notes.length).to.equal(0)
    //                     })
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         clientApi.removeNote()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         clientApi.removeNote('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         clientApi.removeNote('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on wrong user id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ notes: [{ id: noteId }] }) => {
    //                 const token = jwt.sign({ id: user.id }, TOKEN_SECRET)

    //                 clientApi.token = token

    //                 return clientApi.removeNote(fakeUserId, noteId)
    //                     .catch(({ message }) => expect(message).to.equal(`user id ${fakeUserId} does not match token user id ${user.id}`))
    //             })
    //     })

    //     it('should fail on no note id', () =>
    //         clientApi.removeNote(fakeUserId)
    //             .catch(({ message }) => expect(message).to.equal('note id is not a string'))
    //     )

    //     it('should fail on empty note id', () =>
    //         clientApi.removeNote(fakeUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('note id is empty or blank'))
    //     )

    //     it('should fail on blank note id', () =>
    //         clientApi.removeNote(fakeUserId, '       ')
    //             .catch(({ message }) => expect(message).to.equal('note id is empty or blank'))
    //     )

    //     it('should fail on wrong note id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId }) => {
    //                 const token = jwt.sign({ id: userId }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.removeNote(userId, fakeNoteId)
    //                     .catch(({ message }) => expect(message).to.equal(`no note found with id ${fakeNoteId}`))
    //             })
    //     })
    // })

    // describe('find notes', () => {
    //     it('should succeed on correct data', () => {
    //         const user = new User(userData)

    //         user.notes.push(new Note({ text: `${noteText} a` }))
    //         user.notes.push(new Note({ text: `${noteText} ab` }))
    //         user.notes.push(new Note({ text: `${noteText} abc` }))
    //         user.notes.push(new Note({ text: `${noteText} bc` }))
    //         user.notes.push(new Note({ text: `${noteText} c` }))

    //         const text = 'ab'

    //         return user.save()
    //             .then(({ id: userId, notes }) => {
    //                 const matchingNotes = notes.filter(note => note.text.includes(text))

    //                 const validNoteIds = _.map(matchingNotes, 'id')
    //                 const validNoteTexts = _.map(matchingNotes, 'text')

    //                 const token = jwt.sign({ id: userId }, TOKEN_SECRET)

    //                 clientApi.token(token)

    //                 return clientApi.findNotes(userId, text)
    //                     .then(notes => {
    //                         expect(notes).to.exist
    //                         expect(notes.length).to.equal(matchingNotes.length)

    //                         notes.forEach(({ id, text, _id }) => {
    //                             // expect(validNoteIds.includes(id)).to.be.true
    //                             // expect(validNoteTexts.includes(text)).to.be.true
    //                             // or
    //                             expect(validNoteIds).to.include(id)
    //                             expect(validNoteTexts).to.include(text)
    //                             expect(_id).not.to.exist
    //                         })
    //                     })
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         clientApi.findNotes()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         clientApi.findNotes('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         clientApi.findNotes('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no text', () =>
    //         clientApi.findNotes(fakeUserId)
    //             .catch(({ message }) => expect(message).to.equal('text is not a string'))
    //     )

    //     it('should fail on empty text', () =>
    //         clientApi.findNotes(fakeUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('text is empty'))
    //     )
    // })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})