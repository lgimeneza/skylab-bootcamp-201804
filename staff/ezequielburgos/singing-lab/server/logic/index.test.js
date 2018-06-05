'use strict'

require('dotenv').config()

const { mongoose, models: { User, Apartment } } = require('data')
const logic = require('.')
const { expect } = require('chai')

const { env: { DB_URL } } = process

describe('logic (sweet-home)', () => {
    const userData = { name: 'Nur', surname: 'C', phone: '689456739', dni: '45629856L', password: '1234' }
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

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
