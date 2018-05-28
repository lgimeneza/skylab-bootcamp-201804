'use strict'

const mongoose = require('mongoose')
const expect = require('expect')
const logic = require('.')
const { User, Note } = require('../models')

describe('logic (notes)', () => {
    const userData = { name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' }

    before(() => mongoose.connect('mongodb://localhost/skylab-bootcamp-201804-test'))

    beforeEach(() => Promise.all([User.remove()/*, Note.deleteMany()*/]))

    describe('register user', () => {
        it('should succeed on correct dada', () =>
            logic.registerUser('John', 'Doe', 'jd@mail.com', '123')
                .then(res =>  {
                    expect(res).toBeTruthy()
                    User.find()
                        .then(res => {
                            expect(res[0].name).toBe('John')
                            expect(res[0].surname).toBe('Doe')
                            expect(res[0].email).toBe('jd@mail.com')
                            expect(res[0].password).toBe('123')
                        })
                })
        )

        it('should throw error on empty or blank', () =>
            logic.registerUser('','Doe', 'jd@mail.com', '123' )
                .catch(({ message }) => expect(message).toBe('name is empty or blank'))
        )
        it('should throw error on wrong name', () =>
            logic.registerUser(948592, 'Doe', 'jd@mail.com', '123')
                .catch(({ message }) => expect(message).toBe('name is not a string'))
        )
        it('should throw error on empty or blank', () =>
            logic.registerUser('John', '', 'jd@mail.com', '123')
                .catch(({ message }) => expect(message).toBe('surname is empty or blank'))
        )
        it('should throw error on wrong surname', () =>
            logic.registerUser('John', 948592, 'jd@mail.com', '123')
                .catch(({ message }) => expect(message).toBe('surname is not a string'))
        )
        it('should throw error on empty or blank', () =>
            logic.registerUser('John', 'Doe', '', '123')
                .catch(({ message }) => expect(message).toBe('email is empty or blank'))
        )
        it('should throw error on wrong email', () =>
            logic.registerUser('John', 'Doe', 98273, '123')
                .catch(({ message }) => expect(message).toBe('email is not a string'))
        )
        it('should throw error on empty or blank', () =>
            logic.registerUser('John', 'Doe', 'jd@mail.com', '')
                .catch(({ message }) => expect(message).toBe('password is empty or blank'))
        )
        it('should throw error on wrong password', () =>
            logic.registerUser('John', 'Doe', 'jd@mail.com', 93863)
                .catch(({ message }) => expect(message).toBe('password is not a string'))
        )


    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(() =>
                    logic.authenticateUser('jd@mail.com', '123')
                        .then(id => expect(id).toBeDefined())
                )
        )

        it('should throw error on empty or blank', () =>
            logic.registerUser('John', 'Doe', '', '123')
                .catch(({ message }) => expect(message).toBe('email is empty or blank'))
        )
        it('should throw error on wrong email', () =>
            logic.registerUser('John', 'Doe', 98273, '123')
                .catch(({ message }) => expect(message).toBe('email is not a string'))
        )
        it('should throw error on empty or blank', () =>
            logic.registerUser('John', 'Doe', 'jd@mail.com', '')
                .catch(({ message }) => expect(message).toBe('password is empty or blank'))
        )
        it('should throw error on wrong password', () =>
            logic.registerUser('John', 'Doe', 'jd@mail.com', 93863)
                .catch(({ message }) => expect(message).toBe('password is not a string'))
        )
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.retrieveUser(id)
                })
                .then(user => {
                    expect(user).toBeDefined()

                    const { id, name, surname, email, _id, password, notes } = user

                    expect(id).toBeDefined()
                    expect(name).toBe('John')
                    expect(surname).toBe('Doe')
                    expect(email).toBe('jd@mail.com')

                    expect(_id).toBeUndefined()
                    expect(password).toBeUndefined()
                    expect(notes).toBeUndefined()
                })
        )

        // TODO error cases
    })

    describe('udpate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.updateUser(id, 'Jack', 'Wayne', 'jd@mail.com', '123', 'jw@mail.com', '456')
                        .then(res => {
                            expect(res).toBeTruthy()

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).toBeDefined()

                            const { name, surname, email, password } = user

                            expect(user.id).toBe(id)
                            expect(name).toBe('Jack')
                            expect(surname).toBe('Wayne')
                            expect(email).toBe('jw@mail.com')
                            expect(password).toBe('456')
                        })
                })
        )

        // TODO error cases
    })

    describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.unregisterUser(id, 'jd@mail.com', '123')
                        .then(res => {
                            expect(res).toBeTruthy()

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).toBeNull()
                        })
                })
        )

        // TODO error cases
    })


    describe('add note', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.addNote(id, 'my note')
                        .then(noteId => {
                            expect(typeof noteId).toBe('string')
                            expect(noteId).toBeDefined()

                            return User.findById(id)
                                .then(user => {
                                    expect(user).toBeDefined()

                                    expect(user.notes).toBeDefined()
                                    expect(user.notes.length).toBe(1)

                                    const [{ id, text }] = user.notes

                                    expect(id).toBe(noteId)
                                    expect(text).toBe('my note')
                                })
                        })
                })
        )

        it('should fail on wrong user id', () => {
            const userId = '123456781234567812345678'

            return logic.addNote(userId, 'my note')
                .catch(({ message }) => expect(message).toBe(`no user found with id ${userId}`))
        })

        // TODO error cases
    })

    describe('retrieve note', () => {
        it('should succeed on correct data', () => {
            const user = new User(userData)
            const note = new Note({ text: 'my note' })

            user.notes.push(note)

            return user.save()
                .then(({ id: userId, notes: [{ id: noteId }] }) => {
                    return logic.retrieveNote(userId, noteId)
                })
                .then(({ id, text }) => {
                    expect(id).toBe(note.id)
                    expect(text).toBe(note.text)
                })
        })

        it('should fail on wrong user id', () => {
            const user = new User(userData)
            const note = new Note({ text: 'my note' })

            user.notes.push(note)

            return user.save()
                .then(({ notes: [{ id: noteId }] }) => {
                    const userId = '123456781234567812345678'

                    return logic.retrieveNote(userId, noteId)
                        .catch(({ message }) => expect(message).toBe(`no user found with id ${userId}`))
                })
        })

        it('should fail on wrong note id', () => {
            const user = new User(userData)
            const note = new Note({ text: 'my note' })

            user.notes.push(note)

            return user.save()
                .then(({ id: userId }) => {
                    const noteId = '123456781234567812345678'

                    return logic.retrieveNote(userId, noteId)
                        .catch(({ message }) => expect(message).toBe(`no note found with id ${noteId}`))
                })
        })
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
