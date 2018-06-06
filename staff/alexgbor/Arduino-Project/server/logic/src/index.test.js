'use strict'

require('dotenv').config()

const { mongoose, models: { User, Arduino, ArduinoData } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')

const { env: { DB_URL } } = process

describe('logic (user)', () => {
    const userData = { name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123123ab' }
    const otherUserData = { name: 'Jack', surname: 'Wayne', email: 'jw@mail.com', password: '456456cd' }
    const dummyUserId = '123456781234567812345678'
    const dummyArduId = '234523452345234523452345'


    const indexes = []

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([User.remove()/*, Note.deleteMany()*/])
    })

    describe('register user', () => {
        it('should succeed on correct data', () =>
            logic.registerUser('John', 'Doe', 'jd@mail.com', '123123ab')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on wrong regex password', () =>
            logic.registerUser('Alex', 'Gómez', 'ag@mail.com', '123')
                .catch(({ message }) => {
                    expect(message).to.equal('Wrong password')
                })
        )

        it('should fail on wrong regex email', () =>
            logic.registerUser('Alex', 'Gómez', 'agmail.com', '123123ab')
                .catch(({ message }) => {
                    expect(message).to.equal('Wrong email')
                })
        )

        it('should fail on already registered user', () =>
            User.create(userData)
                .then(() => {
                    const { name, surname, email, password } = userData

                    return logic.registerUser(name, surname, email, password)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`user with email ${userData.email} already exists`)
                })
        )

        it('should fail on no user name', () =>
            logic.registerUser()
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            logic.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            logic.registerUser(userData.name)
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            logic.registerUser(userData.name, '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            logic.registerUser(userData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.registerUser(userData.name, userData.surname)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.registerUser(userData.name, userData.surname, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.registerUser(userData.name, userData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.registerUser(userData.name, userData.surname, userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.registerUser(userData.name, userData.surname, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.registerUser(userData.name, userData.surname, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(() =>
                    logic.authenticateUser('jd@mail.com', '123123ab')
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no user email', () =>
            logic.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.authenticateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.authenticateUser(userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.authenticateUser(userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.authenticateUser(userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.retrieveUser(id)
                })
                .then(user => {
                    expect(user).to.exist

                    const { name, surname, email, _id, password, notes } = user

                    expect(name).to.equal('John')
                    expect(surname).to.equal('Doe')
                    expect(email).to.equal('jd@mail.com')

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    expect(notes).to.be.undefined
                })
        )

        it('should fail on no user id', () =>
            logic.retrieveUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.retrieveUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.retrieveUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })

    describe('update user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.updateUser(id, 'Jack', 'Wayne', 'jd@mail.com', '123123ab', 'jw@mail.com', '456456cd')
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.exist

                            const { name, surname, email, password } = user

                            expect(user.id).to.equal(id)
                            expect(name).to.equal('Jack')
                            expect(surname).to.equal('Wayne')
                            expect(email).to.equal('jw@mail.com')
                            expect(password).to.equal('456456cd')
                        })
                })
        )

        it('should fail on changing email to an already existing user\'s email', () =>
            Promise.all([
                User.create(userData),
                User.create(otherUserData)
            ])
                .then(([{ id: id1 }, { id: id2 }]) => {
                    const { name, surname, email, password } = userData

                    return logic.updateUser(id1, name, surname, email, password, otherUserData.email)
                })
                .catch(({ message }) => expect(message).to.equal(`user with email ${otherUserData.email} already exists`))
        )

        it('should fail on no user id', () =>
            logic.updateUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.updateUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.updateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user name', () =>
            logic.updateUser(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            logic.updateUser(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.updateUser(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            logic.updateUser(dummyUserId, userData.name)
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            logic.updateUser(dummyUserId, userData.name, '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            logic.updateUser(dummyUserId, userData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on wrong new password regex', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, userData.email, userData.password, userData.email, '123')
                .catch(({ message }) => expect(message).to.equal('Wrong new password'))
        )

        it('should fail on wrong new email regex', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, userData.email, userData.password, 'agmail.com', userData.password)
                .catch(({ message }) => expect(message).to.equal('Wrong new email'))
        )

        it('should fail on no user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.unregisterUser(id, 'jd@mail.com', '123123ab')
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.be.null
                        })
                })
        )

        it('should fail on no user id', () =>
            logic.unregisterUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.unregisterUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.unregisterUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.unregisterUser(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.unregisterUser(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.unregisterUser(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.unregisterUser(dummyUserId, userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.unregisterUser(dummyUserId, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.unregisterUser(dummyUserId, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('add arduino', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.addArduino(id, '192.162.1.1')
                        .then(arduId => {
                            expect(arduId).to.be.a('string')
                            expect(arduId).to.exist

                            return User.findById(id)
                                .then(user => {
                                    expect(user).to.exist
                                    expect(user.arduinos).to.exist
                                    expect(user.arduinos.length).to.equal(1)

                                    const [{ id, ip }] = user.arduinos

                                    expect(id).to.equal(arduId)
                                    expect(ip).to.equal('192.162.1.1')
                                })
                        })
                })
        )

        it('should fail on wrong user id', () =>
            logic.addArduino(dummyUserId, '192.168.1.1')
                .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
        )

        it('should fail on no user id', () =>
            logic.addArduino()
                .catch(({ message }) => expect(message).to.equal('You must input a valid ip'))
        )

        it('should fail on empty user id', () =>
            logic.addArduino('', '192.168.1.1')
                .catch(({ message }) => expect(message).to.equal('userId is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.addArduino('     ', '192.168.1.1')
                .catch(({ message }) => expect(message).to.equal('userId is empty or blank'))
        )

        it('should fail on no ip', () => {
            logic.addArduino(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('You must input a valid ip'))
        })

        it('should fail on empty ip', () =>
            logic.addArduino(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('You must input a valid ip'))
        )

        it('should fail on blank ip', () =>
            logic.addArduino(dummyUserId, '   ')
                .catch(({ message }) => expect(message).to.equal('Empty ip'))
        )

    })

    describe('retrieve arduino', () => {
        it('should succeed on correct data', () => {
            const user = new User(userData)
            const arduIp = '192.168.1.1'
            const ardu = new Arduino({ ip: arduIp })

            user.arduinos.push(ardu)

            return user.save()
                .then(({ id: userId, arduinos: [{ id: arduId }] }) => {
                    return logic.retrieveArduino(userId, arduId)
                })
                .then(({ id, ip, _id }) => {
                    expect(id).to.equal(ardu.id)
                    expect(ip).to.equal(ardu.ip)
                    expect(_id).not.to.exist
                })
        })

        it('should fail on non user id', () =>
            logic.retrieveArduino()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.retrieveArduino('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.retrieveArduino('      ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on wrong user id', () => {
            const user = new User(userData)
            const ardu = new Arduino({ ip: '192.168.1.1' })

            user.arduinos.push(ardu)

            return user.save()
                .then(({ arduinos: [{ id: arduId }] }) => {
                    return logic.retrieveArduino(dummyUserId, arduId)
                        .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
                })
        })

        it('should fail on no arduId', () =>
            logic.retrieveArduino(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('arduId is not a string'))
        )

        it('should fail on empty arduId', () =>
            logic.retrieveArduino(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('arduId is empty or blank'))
        )

        it('should fail on blank arduId', () =>
            logic.retrieveArduino(dummyUserId, '       ')
                .catch(({ message }) => expect(message).to.equal('arduId is empty or blank'))
        )

        it('should fail on wrong arduId', () => {
            const user = new User(userData)
            const ardu = new Arduino({ ip: '192.168.1.1' })

            user.arduinos.push(ardu)

            return user.save()
                .then(({ id: userId }) => {
                    return logic.retrieveArduino(userId, dummyArduId)
                        .catch(({ message }) => expect(message).to.equal(`no arduino found with id ${dummyArduId}`))
                })
        })

    })

    describe('list arduinos', () => {
        it('should succeed on correct data', () => {
            const user = new User(userData)
            const dummyIp = '192.168.1.'
            const arduinos = indexes.map(index => new Arduino({ ip: `${dummyIp}${index}` }))

            user.arduinos = arduinos

            return user.save()
                .then(({ id: userId, arduinos }) => {
                    const validArduinoIds = _.map(arduinos, 'id')
                    const validArduinoIps = _.map(arduinos, 'ip')

                    return logic.listArduinos(userId)
                        .then(arduinos => {
                            expect(arduinos).to.exist
                            expect(arduinos.length).to.equal(indexes.length)

                            arduinos.forEach(({ id, ip, _id }) => {
                                expect(validArduinoIds).to.include(id)
                                expect(validArduinoIps).to.include(ip)
                                expect(_id).not.to.exist
                            })
                        })
                })
        })

        it('should fail on non user id', () =>
            logic.listArduinos()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.listArduinos('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.listArduinos('      ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})