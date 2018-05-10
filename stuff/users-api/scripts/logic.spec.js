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

    describe('register > login > retrieve > unregister', () => {
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

                            return logic.retrieve(id)
                        })
                        .then(_user => {
                            expect(_user).toBeDefined()
                            expect(_user.id).toBe(id)
                            expect(_user.username).toBe(user.username)

                            _user.password = user.password

                            return logic.unregister(_user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()
                        })
                })
        )
    })

    describe('register > login > update > retrieve > unregister', () => {
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

                            user.newUsername = 'u2'

                            return logic.update(user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()

                            return logic.retrieve(id)
                        })
                        .then(_user => {
                            expect(_user).toBeDefined()
                            expect(_user.id).toBe(id)
                            expect(_user.username).toBe(user.newUsername)

                            _user.password = user.password

                            return logic.unregister(_user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()
                        })
                })
        )
    })
})