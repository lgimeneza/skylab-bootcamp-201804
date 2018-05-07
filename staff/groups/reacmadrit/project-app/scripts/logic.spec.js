'use strict'

describe('logic (project)', () => {
    let token = ''
    let userId = ''

    beforeEach(function () {

        it('should REGISTER new user pepe return status OK and ID', done => {
            logic.register('pepe', '123', (err, response) => {

                done()
            })
        })


        it('should LOGIN from pepe return status OK and new token', done => {
            logic.login('pepe', '123', (err, response) => {
                token = response.data.token
                userId = response.data.id

                done()
            })
        })

    })

    it('should RETRIEVE from pepe return status OK and new token', done => {


        logic.retrieve(userId, token, (err, response) => {
            expect(err).toBeUndefined()

            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.data).toBeDefined()
            expect(response.data.id).toEqual(userId)

            done()
        })
    })


    it('should REGISTER new user toni return status OK and ID', done => {
        logic.register('toni', '123', (err, response) => {
            expect(err).toBeUndefined()

            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.status).toBe("OK")

            done()
        })
    })


    it('should LOGIN from toni return status OK and new token', done => {
        logic.login('toni', '123', (err, response) => {
            expect(err).toBeUndefined()

            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.data).toBeDefined()

            done()
        })

    })

})