'use strict'

describe('logic (github)', () => {
    it('should "tom" search get results', done => {
        logic.searchUsers('tom', (err, users) => {
            expect(users).toBeDefined()
            expect(users instanceof Array).toBeTruthy()
            expect(users.length).toBe(30)

            done()
        })
    })

    it('should "tom" retrieval get info', done => {
        logic.retrieveUser('tom', (err, user) => {
            expect(user).toBeDefined()
            expect(user.login).toBe('tom')

            done()
        })
    })
})