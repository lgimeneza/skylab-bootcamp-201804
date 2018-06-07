'use strict'

const { expect } = require('chai')
const logic = require('.')
const shApi = require('../../../../api/src')

describe('logic (sweet-home)', () => {
    const userData = { name: 'Nur', surname: 'C', phone: '637986245', dni:'42765289I', password: '123' }

    beforeEach(done => {
        const { dni, password } = userData

        shApi.authenticateUser(dni, password)
            .then(id => 
                shApi.unregisterUser(id, dni, password)
            )
            .then(() => done())
            .catch(() => done())
    })

    describe('register', () => {
        it('should succeed on correct data', () => {
            const { name, surname, phone, dni, password } = userData

            return logic.registerUser(name, surname, phone, dni, password)
                .then(res => expect(res).to.be.true)
        })
    })

    describe('login', () => {
        it('should succeed on correct data', () => {
            const { name, surname, phone, dni, password } = userData

            return shApi.registerUser(name, surname, phone, dni, password)
                .then(() => logic.authenticateUser(dni, password))
                .then(res => {
                    expect(res).to.be.true

                    expect(logic.userId).not.to.equal('NO-ID')
                })
        })
    })
    after(done => shApi.deleteDB(() => mongoose.connection.close(done)))
})
