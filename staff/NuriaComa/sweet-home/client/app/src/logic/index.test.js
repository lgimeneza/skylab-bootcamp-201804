'use strict'

const { expect } = require('chai')
const logic = require('.')
const shApi = require('api')

describe('logic (sweet-home)', () => {
    const userData = { name: 'Nur', surname: 'C', phone: '637986245', dni: '42765289I', password: '123' }

    beforeEach(done => {
        const { dni, password } = userData

        shApi.authenticateUser(dni, password)
            .then(id =>
                shApi.unregisterUser(id, dni, password)
            )
            .then(res => {
                done()
            })
            .catch(err => {
                done()
            })
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
    describe('retrieve', ()=>{
        it('shoul succed on correct data', ()=>{
            const { name, surname, phone, dni, password } = userData

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
    describe('update', ()=>{
        it('should succed on correct data', ()=>{
            const { name, surname, phone, dni, password } = userData

            return shApi.registerUser(name, surname, phone, dni, password)
                .then(() => logic.authenticateUser(dni, password))
                .then(() => {
                    logic.updateUser(logic.userId, name, surname, phone, dni, password, newPhone, newPassword )
                    .then(res => {
                        expect(res).to.be.true
    
                    })
                })
        })

    })
    describe('list users', ()=>{
        it('shoul succed on correct data', ()=>{
            

            return shApi.listUsers()
                .then(() => logic.authenticateUser(dni, password))
                .then(() => {
                    logic.listUsers()
                    .then(res => {
                        expect(res).to.be.true
    
                        expect(logic.data).not.to.equal('NO-DATA')
                    })
                })
                      
        })
    })
    describe('unregister', ()=>{
        it('should succed on correct data', ()=>{
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
