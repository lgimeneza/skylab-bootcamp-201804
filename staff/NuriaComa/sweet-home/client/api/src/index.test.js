'use strict'

require('dotenv').config()

const { mongoose, models: { User, Apartment } } = require('data')
const shApi = require('.')
const { expect } = require('chai')
const axios = require('axios')
const jwt = require('jsonwebtoken')

const { env: { DB_URL, API_URL, TOKEN_SECRET } } = process

shApi.url = API_URL
console.log(DB_URL)

describe('logic (sweet-home)', () => {
    const userData = { name: 'Nur', surname: 'C', phone: '689456739', dni: '45629856L', password: '123' }
    const exempleID = '987654321234537812345375'

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => User.remove())

    describe('register user', () => {
        it('should succeed on correct data', () =>
            shApi.registerUser('Nur', 'C', '689456739', '45629856L', '123')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on existing dni', () => {
            User.create(userData)
                .then(() => {
                    return shApi.registerUser('Mar', 'L', '685243497', '45629856L', '5678')
                })
                .catch(({ message }) => expect(message).to.equal(`user with dni ${userData.dni} already exists`))
        })
        it('should fail on no user name', () =>
        shApi.registerUser()
            .catch(({ message }) => expect(message).to.equal('name is not a string'))
    )

        it('should fail on empty user name', () =>
            shApi.registerUser('')
                .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            shApi.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            shApi.registerUser(userData.name)
                .catch(({ message }) => expect(message).to.equal('surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            shApi.registerUser(userData.name, '')
                .catch(({ message }) => expect(message).to.equal('surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            shApi.registerUser(userData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('surname is empty or blank'))
        )

        it('should fail on no user phone', () =>
            shApi.registerUser(userData.name, userData.surname)
                .catch(({ message }) => expect(message).to.equal('phone is not a string'))
        )

        it('should fail on empty user phone', () =>
            shApi.registerUser(userData.name, userData.surname, '')
                .catch(({ message }) => expect(message).to.equal('phone is empty or blank'))
        )

        it('should fail on blank user phone', () =>
            shApi.registerUser(userData.name, userData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('phone is empty or blank'))
        )

        it('should fail on no user dni', () =>
        shApi.registerUser(userData.name, userData.surname, userData.phone)
            .catch(({ message }) => expect(message).to.equal('dni is not a string'))
    )

        it('should fail on empty user dni', () =>
            shApi.registerUser(userData.name, userData.surname, userData.phone,'')
                .catch(({ message }) => expect(message).to.equal('dni is empty or blank'))
        )

        it('should fail on blank user dni', () =>
            shApi.registerUser(userData.name, userData.surname,userData.phone, '     ')
                .catch(({ message }) => expect(message).to.equal('dni is empty or blank'))
        )

        it('should fail on no user password', () =>
            shApi.registerUser(userData.name, userData.surname, userData.phone, userData.dni)
                .catch(({ message }) => expect(message).to.equal('password is not a string'))
        )

        it('should fail on empty user password', () =>
            shApi.registerUser(userData.name, userData.surname,userData.phone, userData.dni, '')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            shApi.registerUser(userData.name, userData.surname, userData.phone, userData.dni, '     ')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )
    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(() =>
                    shApi.authenticateUser('45629856L', '123')
                    
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no user dni', () =>
            shApi.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user dni is not a string'))
        )

        it('should fail on empty user dni', () =>
            shApi.authenticateUser('', userData.password)
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on blank user dni', () =>
            shApi.authenticateUser('     ', userData.password)
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on no user password', () =>
            shApi.authenticateUser(userData.dni)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            shApi.authenticateUser(userData.dni, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            shApi.authenticateUser(userData.dni, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })
    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    const token = jwt.sign({ id }, TOKEN_SECRET)

                    shApi.token = token

                    return shApi.retrieveUser(id)
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
            shApi.retrieveUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            shApi.retrieveUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            shApi.retrieveUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })
    describe('udpate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {

                    const token = jwt.sign({ id }, TOKEN_SECRET)

                    shApi.token = token

                    return shApi.updateUser(id, 'Nur', 'C', '689456739','45629856L', '123', '678345629', '456')
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
            shApi.updateUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            shApi.updateUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            shApi.updateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user name', () =>
            shApi.updateUser(exempleID)
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            shApi.updateUser(exempleID, '')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            shApi.updateUser(exempleID, '     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            shApi.updateUser(exempleID, userData.name)
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            shApi.updateUser(exempleID, userData.name, '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            shApi.updateUser(exempleID, userData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on no user phone', () =>
            shApi.updateUser(exempleID, userData.name, userData.surname)
                .catch(({ message }) => expect(message).to.equal('user phone is not a string'))
        )

        it('should fail on empty user phone', () =>
            shApi.updateUser(exempleID, userData.name, userData.surname, '')
                .catch(({ message }) => expect(message).to.equal('user phone is empty or blank'))
        )

        it('should fail on blank user phone', () =>
            shApi.updateUser(exempleID, userData.name, userData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user phone is empty or blank'))
        )

        it('should fail on no user dni', () =>
        shApi.updateUser(exempleID, userData.name, userData.surname,userData.phone)
            .catch(({ message }) => expect(message).to.equal('user dni is not a string'))
    )

        it('should fail on empty user dni', () =>
            shApi.updateUser(exempleID, userData.name, userData.surname,userData.phone, '')
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on blank user dni', () =>
            shApi.updateUser(exempleID, userData.name, userData.surname,userData.phone, '     ')
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )
        it('should fail on no user password', () =>
            shApi.updateUser(exempleID, userData.name, userData.surname, userData.phone, userData.dni)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            shApi.updateUser(exempleID, userData.name, userData.surname, userData.phone, userData.dni, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            shApi.updateUser(exempleID, userData.name, userData.surname, userData.phone, userData.dni, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

   describe('unregister user', () => {

        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {

                    const token = jwt.sign({ id }, TOKEN_SECRET)

                    shApi.token = token
                    
                    return shApi.unregisterUser(id, userData.dni, userData.password)
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
            shApi.unregisterUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            shApi.unregisterUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            shApi.unregisterUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user dni', () =>
            shApi.unregisterUser(exempleID)
                .catch(({ message }) => expect(message).to.equal('user dni is not a string'))
        )

        it('should fail on empty user dni', () =>
            shApi.unregisterUser(exempleID, '')
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on blank user dni', () =>
            shApi.unregisterUser(exempleID, '     ')
                .catch(({ message }) => expect(message).to.equal('user dni is empty or blank'))
        )

        it('should fail on no user password', () =>
            shApi.unregisterUser(exempleID, userData.dni)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            shApi.unregisterUser(exempleID, userData.dni, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            shApi.unregisterUser(exempleID, userData.dni, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
     })


    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
