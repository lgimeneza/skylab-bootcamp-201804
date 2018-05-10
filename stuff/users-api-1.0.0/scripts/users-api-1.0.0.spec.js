'use strict'

describe('users api', () => {
    let user

    beforeEach(() => user = { username: 'u', password: 'p' })

    describe('register > login > unregister', () => {
        it('should succeed on valid user', () =>
            usersApi.register(user)
                .then(id => {
                    expect(id).toBeDefined()

                    return usersApi.login(user)
                        .then(data => {
                            expect(data).toBeDefined()

                            expect(data.id).toBeDefined()
                            expect(data.id).toBe(id)

                            expect(data.token).toBeDefined()

                            usersApi.token = data.token

                            user.id = id

                            return usersApi.unregister(user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()
                        })
                })
        )
    })

    describe('register > login > retrieve > unregister', () => {
        it('should succeed on valid user', () =>
            usersApi.register(user)
                .then(id => {
                    expect(id).toBeDefined()

                    return usersApi.login(user)
                        .then(data => {
                            expect(data).toBeDefined()

                            expect(data.id).toBeDefined()
                            expect(data.id).toBe(id)

                            expect(data.token).toBeDefined()

                            usersApi.token = data.token

                            return usersApi.retrieve(id)
                        })
                        .then(_user => {
                            expect(_user).toBeDefined()
                            expect(_user.id).toBe(id)
                            expect(_user.username).toBe(user.username)

                            _user.password = user.password

                            return usersApi.unregister(_user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()
                        })
                })
        )
    })

    describe('register > login > update > retrieve > unregister', () => {
        it('should succeed on valid user', () =>
            usersApi.register(user)
                .then(id => {
                    expect(id).toBeDefined()

                    return usersApi.login(user)
                        .then(data => {
                            expect(data).toBeDefined()

                            expect(data.id).toBeDefined()
                            expect(data.id).toBe(id)

                            expect(data.token).toBeDefined()

                            usersApi.token = data.token

                            user.id = id

                            user.newUsername = 'u2'

                            return usersApi.update(user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()

                            return usersApi.retrieve(id)
                        })
                        .then(_user => {
                            expect(_user).toBeDefined()
                            expect(_user.id).toBe(id)
                            expect(_user.username).toBe(user.newUsername)

                            _user.password = user.password

                            return usersApi.unregister(_user)
                        })
                        .then(res => {
                            expect(res).toBeTruthy()
                        })
                })
        )
    })
})