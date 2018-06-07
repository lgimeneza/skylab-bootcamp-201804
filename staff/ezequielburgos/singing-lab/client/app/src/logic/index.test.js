'use strict'

const { expect } = require('chai')
const logic = require('.')
const singingLabApi = require('api')

describe('logic (notes-app)', () => {
    const userData = { name: 'John', surname: 'Doe', phone: '+34 111 222 333', address: 'Roc Boronat 35', email: 'jd@mail.com', password: '123' }
    const maryDoeData = { name: 'mary', surname: 'doe', phone: '+34 444 555 111', address: 'colorado', email: 'md@mail.com', password: '456' }

    beforeEach(done => {
        const { email, password } = userData

        singingLabApi.authenticateUser(email, password)
            .then(id =>
                singingLabApi.unregisterUser(id, email, password)
            )
            .then(() => done())
            .catch(() => done())
    })

    describe('register', () => {
        it('should succeed on correct data', () => {
            const { name, surname, address, email, password } = userData

            return logic.registerUser(name, surname, address, email, password)
                .then(res => expect(res).to.be.true)
        })
    })

    describe('login', () => {
        it('should succeed on correct data', () => {
            const { name, surname, address, email, password } = userData

            return singingLabApi.registerUser(name, surname, address, email, password)
                .then(() => logic.login(email, password))
                .then(res => {
                    expect(res).to.be.true

                    expect(logic.userId).not.to.equal('NO-ID')
                })
        })
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () => {
            const { name, surname, address, email, password } = userData

            return singingLabApi.registerUser(name, surname, address, email, password)
                .then(() => logic.login(email, password))
                .then(res => {
                
                    expect(res).to.be.true
                    expect(logic.userId).not.to.equal('NO-ID')

                    return singingLabApi.retrieveUser(logic.userId)
                        .then(res => {
                            expect(res.name).to.equal('John')
                            expect(res.surname).to.equal('Doe')
                            expect(res.address).to.equal('Roc Boronat 35')
                            expect(res.email).to.equal('jd@mail.com')
                        })
                })
        })
    })

    // describe('update user', () => {
    //     it('should succeed on correct data', () => {
    //         const { name, surname, address, email, password } = userData

    //         return singingLabApi.registerUser(name, surname, address, email, password)
    //             .then(() => logic.login(email, password))
    //             .then(res => {
    //                 expect(res).to.be.true
    //                 expect(logic.userId).not.to.equal('NO-ID')

    //                 return singingLabApi.updateUser(logic.userId, 'John', 'Doe', '+34 111 222 333', 'colorado', 'jd@mail.com', '123', 'jw@mail.com', '456')
    //                     .then(res => {

    //                         expect(res).to.be.true
    //                         expect(res.name).to.equal('John')
    //                         return singingLabApi.retrieveUser(logic.userId)
    //                             .then(res => {
    //                                 expect(res.name).to.equal('John')
    //                                 expect(res.surname).to.equal('Doe')
    //                                 expect(res.address).to.equal('Roc Boronat 35')
    //                                 expect(res.email).to.equal('jd@mail.com')
    //                             })

    //                     })
    //             })
    //     })
    // })

    describe('unregister user', () => {
        it('should succeed on correct data', () => {
            const { name, surname, address, email, password } = userData

            return logic.register(name, surname, address, email, password)
                then(res => {
                    console.log('HELLO')
                })

        })
    })
})
