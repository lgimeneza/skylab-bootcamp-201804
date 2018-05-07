'use strict'

describe('logic (project)', () => {
    let token = ''
    let userId = ''

    it('should REGISTER new user toni return status OK and ID', done => {
        logic.register('toni6', '123').then(response => {
            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.status).toBe("OK")
            done()
        })
    })
    it('should REGISTER new user toni throw error', function(){
        expect(function() {
            logic.register('123')}).toThrowError('input must be strings')
        })
    })


    it('should LOGIN from toni return status OK and new token', done => {
        logic.login('toni', '123').then(response => {
            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.data).toBeDefined()
            done()
        })

    })

    it('should LOGIN user toni throw error', function () {
        expect(function () {
            logic.register('123')
        }).toThrowError('input must be strings')
    })

    it('should LOGIN from toni and wrong password receive an object with error message', done => {
        logic.login('toni', '124').then(response => {
            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.error).toBe('username and/or password wrong')
            done()
        })
    })

    it('should RETRIEVE from toni 123 return status OK and data object with username and id', done => {
        logic.login('toni', '123')
            .then(response => {
                logic.retrieve(response.data.id, response.data.token)
                .then(response => {
                    expect(response).toBeDefined()
                    expect(response instanceof Object).toBeTruthy()
                    expect(response.data.id).toBeDefined()
                    done()
                })
            })
    })

    it('should RETRIEVE from toni 123 and wrong token receive a message error', done => {
        logic.login('toni', '123')
            .then(response => {
                logic.retrieve(response.data.id, 'kqjqwejiqew')
                .then(response => {
                    expect(response).toBeDefined()
                    expect(response instanceof Object).toBeTruthy()
                    expect(response.error).toBe('invalid token')
                    done()
                })
            })
    })