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
                .then(res => expect(res).toBeTruthy())
        )

        // TODO error cases
    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(() =>
                    logic.authenticateUser('jd@mail.com', '123')
                        .then(id => expect(id).toBeDefined())
                )
        )

        // TODO error cases
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
