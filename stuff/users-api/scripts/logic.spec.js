'use strict'

describe('logic (users api)', () => {
    let user

    beforeEach(() => user = { username: 'u', password: 'p' })

    describe('register > login > unregister', () => {
        it('should succeed on valid user', () =>
            logic.register(user)
                .then(id => {
                    expect(id).toBeDefined()

                    return logic.login(user)
                        .then(data => {
                            expect(data).toBeDefined()

                            expect(data.id).toBeDefined()
                            expect(data.id).toBe(id)

                            expect(data.token).toBeDefined()

                            logic.token = data.token

                            user.id = id

                            return logic.unregister(user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()
                        })
                })
        )
    })

    describe('register > login > update > unregister', () => {
        it('should succeed on valid user', () =>
            logic.register(user)
                .then(id => {
                    expect(id).toBeDefined()

                    return logic.login(user)
                        .then(data => {
                            expect(data).toBeDefined()

                            expect(data.id).toBeDefined()
                            expect(data.id).toBe(id)

                            expect(data.token).toBeDefined()

                            logic.token = data.token

                            user.id = id

                            return logic.update(user) // TODO
                        })
                        .then(res => {
                            return logic.unregister(user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()
                        })
                })
        )
    })
})