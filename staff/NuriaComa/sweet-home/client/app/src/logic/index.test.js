'use strict'

const { expect } = require('chai')
const logic = require('.')
const shApi = require('api')

describe('logic (sweet-home)', () => {
    const userData = { name: 'Nur', surname: 'C', phone: '637986245', dni: '42765289I', password: '123' }

    beforeEach((done) => {
        const { dni, password } = userData

        shApi.authenticateUser(dni, password)
            .then(id => {
                shApi.unregisterUser(id, dni, password)
                .then(res => {
                    console.log('0')
                    done()
                })
            })
            .catch(err => {
                console.log('E')
                done()
            })
    })

    describe('register', () => {
        it('should succeed on correct data', () => {
            const { name, surname, phone, dni, password } = userData
            console.log('1')

            return logic.registerUser(name, surname, phone, dni, password)
                .then(res => {
                    expect(res).to.be.true
                })
        })
    })

    describe('login', () => {
        it('should succeed on correct data', () => {
            const { name, surname, phone, dni, password } = userData
            console.log('2')

            return shApi.registerUser(name, surname, phone, dni, password)
                .then(() => logic.authenticateUser(dni, password))
                .then(res => {
                    expect(res).to.exist

                    expect(logic.userId).not.to.equal('NO-ID')
                })
        })
    })
    describe('retrieve', () => {
        it('shoul succeed on correct data', () => {
            const { name, surname, phone, dni, password } = userData
            console.log('3')

            return shApi.registerUser(name, surname, phone, dni, password)
                .then(() => logic.authenticateUser(dni, password))
                .then(() => {
                    logic.retrieveUser(logic.userId)
                        .then(res => {
                            expect(res).to.be.true

                            expect(logic.data).not.to.equal('NO-DATA')
                        })
                })

        })
    })
    
    describe('update', () => {
        it('should succeed on correct data', () => {
            const { name, surname, phone, dni, password } = userData
            console.log('4')

            return shApi.registerUser(name, surname, phone, dni, password)
                .then(() => logic.authenticateUser(dni, password))
                .then(() => {
                   
                    const newPassword = '789'

                    return logic.updateUser(logic.userId, name, surname, phone, dni, password, newPassword)
                        .then(res => {
                            expect(res).to.be.true

                            // TODO check user updated correctly (check other properties of user)

                            return shApi.unregisterUser(logic.userId, dni, '789')
                        })
                })
        })

    })

    describe('list users', () => {
        it('shoul succeed on correct data', () => {
            const { name, surname, phone, dni, password } = userData

            return shApi.registerUser(name, surname, phone, dni, password)
                .then(() => logic.authenticateUser(dni, password))

                .then(() => {
                    logic.listUsers()
                        .then(res => {
                        
                            expect(logic.data).not.to.equal('NO-DATA')
                        })
                })

        })
    })
    describe('unregister', () => {
        it('should succeed on correct data', () => {
            const { name, surname, phone, dni, password } = userData

            return shApi.registerUser(name, surname, phone, dni, password)
                .then(() => logic.authenticateUser(dni, password))
                .then(() => {
                    logic.unregisterUser(logic.userId, dni, password)
                        .then(res => {
                            expect(res).to.be.true

                        })
                })
        })

    })
})
