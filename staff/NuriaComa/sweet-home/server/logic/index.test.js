'use strict'

require('dotenv').config()

const { mongoose, models: { User, Apartment } } = require('data')
const logic = require('.')
const { expect } = require('chai')

const { env: { DB_URL } } = process

describe('logic (sweet-home)', () => {
    const userData = { name: 'Nur', surname: 'C', phone: '689456739', dni: '45629856L', password: '123' }
    const dummyUserId = '123456781234567812345678'
    before(() => mongoose.connect(DB_URL))

    beforeEach(() => User.remove())

    describe('register user', () => {
        it('should succeed on correct data', () =>
            logic.registerUser('Nur', 'C', '689456739', '45629856L', '1234')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on existing dni', () => {
            User.create(userData)
                .then(() => {
                    return logic.registerUser('Mar', 'L', '685243497', '45629856L', '5678')
                        .catch(({ message }) => expect(message).to.equal(`user with dni ${userData.dni} already exists`))
                })
        })
        it('should fail on no user name', () =>
        logic.registerUser()
            .catch(({ message }) => expect(message).to.equal('name is not a string'))
    )

        it('should fail on empty user name', () =>
            logic.registerUser('')
                .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            logic.registerUser(userData.name)
                .catch(({ message }) => expect(message).to.equal('surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            logic.registerUser(userData.name, '')
                .catch(({ message }) => expect(message).to.equal('surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            logic.registerUser(userData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('surname is empty or blank'))
        )

        it('should fail on no user phone', () =>
            logic.registerUser(userData.name, userData.surname)
                .catch(({ message }) => expect(message).to.equal('phone is not a string'))
        )

        it('should fail on empty user phone', () =>
            logic.registerUser(userData.name, userData.surname, '')
                .catch(({ message }) => expect(message).to.equal('phone is empty or blank'))
        )

        it('should fail on blank user phone', () =>
            logic.registerUser(userData.name, userData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('phone is empty or blank'))
        )

        it('should fail on no user dni', () =>
        logic.registerUser(userData.name, userData.surname, userData.phone)
            .catch(({ message }) => expect(message).to.equal('dni is not a string'))
    )

        it('should fail on empty user dni', () =>
            logic.registerUser(userData.name, userData.surname, userData.phone,'')
                .catch(({ message }) => expect(message).to.equal('dni is empty or blank'))
        )

        it('should fail on blank user dni', () =>
            logic.registerUser(userData.name, userData.surname,userData.phone, '     ')
                .catch(({ message }) => expect(message).to.equal('dni is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.registerUser(userData.name, userData.surname, userData.phone, userData.dni)
                .catch(({ message }) => expect(message).to.equal('password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.registerUser(userData.name, userData.surname,userData.phone, userData.dni, '')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.registerUser(userData.name, userData.surname, userData.phone, userData.dni, '     ')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )
    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(() =>
                    logic.authenticateUser('45629856L', '123')
                    
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no user dni', () =>
            logic.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user dni is not a string'))
        )

        it('should fail on empty user dni', () =>
            logic.authenticateUser('', userData.password)
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on blank user dni', () =>
            logic.authenticateUser('     ', userData.password)
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.authenticateUser(userData.dni)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.authenticateUser(userData.dni, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.authenticateUser(userData.dni, '     ')
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

                    const { name, surname, phone, dni, _id, password } = user

                    expect(name).to.equal('Nur')
                    expect(surname).to.equal('C')
                    expect (phone).to.equal('689456739')
                    expect(dni).to.equal('45629856L')

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    
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
    describe('udpate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.updateUser(id, 'Nur', 'C', '689456739','45629856L', '123', '678345629', '456')
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.exist

                            const { name, surname, phone, dni, password } = user

                            expect(user.id).to.equal(id)
                            expect(name).to.equal('Nur')
                            expect(surname).to.equal('C')
                            expect(phone).to.equal('678345629')
                            expect(dni).to.equal('45629856L')
                            expect(password).to.equal('456')
                        })
                })
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

        it('should fail on no user phone', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname)
                .catch(({ message }) => expect(message).to.equal('user phone is not a string'))
        )

        it('should fail on empty user phone', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, '')
                .catch(({ message }) => expect(message).to.equal('user phone is empty or blank'))
        )

        it('should fail on blank user phone', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user phone is empty or blank'))
        )

        it('should fail on no user dni', () =>
        logic.updateUser(dummyUserId, userData.name, userData.surname,userData.phone)
            .catch(({ message }) => expect(message).to.equal('user dni is not a string'))
    )

        it('should fail on empty user dni', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname,userData.phone, '')
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on blank user dni', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname,userData.phone, '     ')
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )
        it('should fail on no user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, userData.phone, userData.dni)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, userData.phone, userData.dni, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.surname, userData.phone, userData.dni, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })
    describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.unregisterUser(id, '45629856L', '123')
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

        it('should fail on no user dni', () =>
            logic.unregisterUser(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('user dni is not a string'))
        )

        it('should fail on empty user dni', () =>
            logic.unregisterUser(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on blank user dni', () =>
            logic.unregisterUser(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.unregisterUser(dummyUserId, userData.dni)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.unregisterUser(dummyUserId, userData.dni, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.unregisterUser(dummyUserId, userData.dni, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })


    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
