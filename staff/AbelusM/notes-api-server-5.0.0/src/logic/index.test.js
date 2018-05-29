'use strict'

const mongoose = require('mongoose')
const expect = require('expect')
const logic = require('.')
const { User, Note } = require('../models')

describe('logic (notes)', () => {
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
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
                .then(() =>
                    logic.authenticateUser('jd@mail.com', '123')
                        .then(id => expect(id).toBeDefined())
                )
        )

        // TODO error cases
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
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
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
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
    })

    describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
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
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
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

        it('should throw error on wrong user id', () => {
            const userId = '123456781234567812345678'

            return logic.addNote(userId, 'my note')
                .catch(({ message }) => expect(message).toBe(`no user found with id ${userId}`))
        })
    })

    describe('retrieve note', () => {
        it('should succeed on correct data', () =>
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
                .then(({ id }) => {
                    return logic.addNote(id, 'my note 1')
                        .then(noteId => {
                            expect(typeof noteId).toBe('string')
                            expect(noteId).toBeDefined()

                            return logic.retrieveNote(id, noteId)
                                .then(note => {
                                    expect(note).toBeDefined()
                                    expect(note).toBe('my note 1')
                                })
                        })
                })
        )
    })
    describe('list notes', () => {
        it('should succeed on correct data', () =>
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
                .then(({ id }) => {
                    return logic.addNote(id, 'my note 1')
                    logic.addNote(id, 'my note 2')
                        .then(noteId => {
                            expect(typeof noteId).toBe('string')
                            expect(noteId).toBeDefined()

                            return logic.listNotes(userId)
                                .then(data => {
                                    expect(data).toBeDefined()
                                    expect(data.length).toBe(2)
                                })
                        })
                })
        )
    })
    describe('remove note', () => {
        it('should succeed on correct data', () =>
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
                .then(({ id }) => {
                    return 
                    const p1 = logic.addNote(id, 'my note 1')
                    const p2 = logic.addNote(id, 'my note 2')
                    Promise.all(p1,p2)
                        .then(noteId => {
                            expect(typeof noteId).toBe('string')
                            expect(noteId).toBeDefined()

                            return logic.removeNote(userId, id)
                                .then(data => {
                                    expect(data).toBeUndefined()
                                    expect(data.length).toBe(0)
                                })
                        })
                        .then(res => expect(res.length).toBe(1))
                })
        )
    })

    describe('update note', () => {
        it('should succeed on correct data', () =>
            User.create({ name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' })
                .then(({ id }) => {
                    return logic.addNote(id, 'my note 1')
                        .then(noteId => {
                            expect(typeof noteId).toBe('string')
                            expect(noteId).toBeDefined()

                            return logic.updateNote(id, noteId, 'my new note 2000')
                                .then(res => {
                                    expect(res).toBeDefined()
                                    expect(res.text).toBe('my new note 2000')
                                })
                        })
                })
        )
    })
    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})