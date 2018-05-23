'use strict'

const expect = require('expect')
const logic = require('./logic')

describe('logic (notes)', () => {
    const { _notes } = logic
    const userId = '123'

    beforeEach(() => _notes.length = 0)

    describe('add note', () => {
        it('should add on correct data', () => {
            expect(_notes.length).toBe(0)

            const id = logic.addNote(userId, 'my note')

            expect(id).toBeDefined()
            expect(_notes.length).toBe(1)

            const [note] = _notes

            expect(note.id).toBeDefined()
            expect(note.id).toBe(id)
            expect(note.userId).toBe(userId)
            expect(note.text).toBe('my note')
        })

        it('should add notes with different ids', () => {
            expect(_notes.length).toBe(0)

            logic.addNote(userId, 'my note 1')
            logic.addNote(userId, 'my note 2')
            logic.addNote(userId, 'my note 3')

            expect(_notes.length).toBe(3)

            const [note1, note2, note3] = _notes

            expect(note1.id).not.toBe(note2.id)
            expect(note2.id).not.toBe(note3.id)
            expect(note3.id).not.toBe(note1.id)

            expect(note1.userId).toBe(userId)
            expect(note2.userId).toBe(userId)
            expect(note3.userId).toBe(userId)

            expect(note1.text).toBe('my note 1')
            expect(note2.text).toBe('my note 2')
            expect(note3.text).toBe('my note 3')
        })

        it('should throw error on no text', () => {
            expect(() => logic.addNote(userId, )).toThrowError('text is not a string')
        })

        it('should throw error on empty text', () => {
            expect(() => logic.addNote(userId, '')).toThrowError('text is empty or blank')
        })

        it('should throw error on blank text', () => {
            expect(() => logic.addNote(userId, '   ')).toThrowError('text is empty or blank')
        })
        
        it('should throw error input is empty', () => {
            expect(() => logic.addNote(undefined, 'note')).toThrowError('userId is not a string')
        })

        it('should throw error if user id is empty', () => {
            expect(() => logic.addNote(undefined, 'note')).toThrowError('userId is not a string')
        })

        it('should throw error if user id is empty', () => {
            expect(() => logic.addNote('', 'note')).toThrowError('userId is empty or blank')
        })

        it('should throw error if user id is blank text', () => {
            expect(() => logic.addNote('       ', 'note')).toThrowError('userId is empty or blank')
        })
    })


    describe('list notes', () => {
        it('should list notes', () => {
            expect(_notes.length).toBe(0)
            const  ids = []
            ids.push(logic.addNote(userId, 'my note 1'))
            ids.push(logic.addNote(userId, 'my note 2'))
            ids.push(logic.addNote(userId, 'my note 3'))
            ids.push(logic.addNote("secondUser", 'my note 4'))
            ids.push(logic.addNote("secondUser", 'my note 5'))

            expect(_notes.length).toBe(5)

            const notes = logic.listNotes(userId)
            const notes2 = logic.listNotes("secondUser")

            expect(_notes.length).toBe(5)
            expect(notes.length).toBe(3)
            expect(notes2.length).toBe(2)

            expect(notes).not.toEqual(_notes)
            expect(notes2).not.toEqual(_notes)

            notes.forEach((note, index) => {
                expect(note.id).toBe(ids[index])
                expect(note.userId).toBe(userId)
                expect(note.text).toBe(`my note ${index + 1}`)
            })

            notes2.forEach((note, index) => {
                expect(note.id).toBe(ids[index + 3])
                expect(note.userId).toBe("secondUser")
                expect(note.text).toBe(`my note ${index + 4}`)
            })
        })

        it('should throw error if user id is empty', () => {
            expect(() => logic.listNotes(undefined)).toThrowError('userId is not a string')
        })

        it('should throw error if user id is empty', () => {
            expect(() => logic.listNotes('')).toThrowError('userId is empty or blank')
        })

        it('should throw error if user id is blank text', () => {
            expect(() => logic.listNotes('       ')).toThrowError('userId is empty or blank')
        })

    })

    describe('retrieve note', () => {
        it('should succeed on correct data', () => {
            expect(_notes.length).toBe(0)

            const id = logic.addNote(userId, 'my note')

            expect(_notes.length).toBe(1)

            const note = logic.retrieveNote(userId, id)

            expect(note).toBeDefined()
            expect(note.id).toBe(id)
            expect(note.userId).toBe(userId)
            expect(note.text).toBe('my note')
        })

        it('should throw error on no id', () => {
            expect(() => logic.retrieveNote(userId, )).toThrowError('id is not a string')
        })

        it('should throw error on empty id', () => {
            expect(() => logic.retrieveNote(userId, '')).toThrowError('id is empty or blank')
        })

        it('should throw error on blank id', () => {
            expect(() => logic.retrieveNote(userId, '             ')).toThrowError('id is empty or blank')
        })

        it('should throw error on wrong id', () => {
            const id = 'non-existing-note-id'

            expect(() => logic.retrieveNote(userId, id)).toThrowError(`note with id ${id} does not exist`)
        })

        it('should throw error if user id is empty', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.retrieveNote(undefined, id)).toThrowError('userId is not a string')
        })

        it('should throw error if user id is empty', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.retrieveNote('', id)).toThrowError('userId is empty or blank')
        })

        it('should throw error if user id is blank text', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.retrieveNote('       ', id)).toThrowError('userId is empty or blank')
        })

        it('should throw error on wrong userId and id form another user', () => {
            const id = logic.addNote(userId, 'my note')

            expect(() => logic.retrieveNote("wrong User", id)).toThrowError(`note with id ${id} does not exist`)
        })
    })

    describe('remove note', () => {
        it('should remove a note', () => {
            expect(_notes.length).toBe(0)

            logic.addNote(userId, 'my note')

            expect(_notes.length).toBe(1)

            const [note] = _notes

            logic.removeNote(userId, note.id)

            expect(_notes.length).toBe(0)
            expect(_notes).toBe(logic._notes)
        })

        it('should throw error on no id', () => {
            expect(() => logic.removeNote(userId, )).toThrowError('id is not a string')
        })

        it('should throw error on empty id', () => {
            expect(() => logic.removeNote(userId, '')).toThrowError('id is empty or blank')
        })

        it('should throw error on blank id', () => {
            expect(() => logic.removeNote(userId, '             ')).toThrowError('id is empty or blank')
        })

        it('should throw error on wrong id', () => {
            const id = 'non-existing-note-id'

            expect(() => logic.removeNote(userId, id)).toThrowError(`note with id ${id} does not exist`)
        })

        it('should throw error if user id is empty', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.removeNote(undefined, id)).toThrowError('userId is not a string')
        })

        it('should throw error if user id is empty', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.removeNote('', id)).toThrowError('userId is empty or blank')
        })

        it('should throw error if user id is blank text', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.removeNote('       ', id)).toThrowError('userId is empty or blank')
        })

        it('should throw error on wrong userId and id form another user', () => {
            const id = logic.addNote(userId, 'my note')

            expect(() => logic.removeNote("wrong User", id)).toThrowError(`note with id ${id} does not exist`)
        })
    })

    describe('update note', () => {
        it('should succeed on correct data', () => {
            expect(_notes.length).toBe(0)

            logic.addNote(userId, 'my note')

            expect(_notes.length).toBe(1)

            const [{ id }] = _notes

            logic.updateNote(userId, id, 'my new note')

            expect(_notes.length).toBe(1)

            const [note] = _notes

            expect(note.id).toBe(id)
            expect(note.text).toBe('my new note')
        })

        it('should throw error on no id', () => {
            expect(() => logic.updateNote(userId, undefined, 'my new note')).toThrowError('id is not a string')
        })

        it('should throw error on empty id', () => {
            expect(() => logic.updateNote(userId, '', 'my new note')).toThrowError('id is empty or blank')
        })

        it('should throw error on blank id', () => {
            expect(() => logic.updateNote(userId, '             ', 'my new note')).toThrowError('id is empty or blank')
        })

        it('should throw error on wrong id', () => {
            const id = 'non-existing-note-id'

            expect(() => logic.updateNote(userId, id, 'my new note')).toThrowError(`note with id ${id} does not exist`)
        })

        it('should throw error on no text', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.updateNote(userId, id)).toThrowError('text is not a string')
        })

        it('should throw error on empty text', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.updateNote(userId, id, '')).toThrowError('text is empty or blank')
        })

        it('should throw error on blank text', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.updateNote(userId, id, '   ')).toThrowError('text is empty or blank')
        })

        it('should throw error if user id is empty', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.updateNote(undefined, id, 'my new text')).toThrowError('userId is not a string')
        })

        it('should throw error if user id is empty', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.updateNote('', id, 'my new text')).toThrowError('userId is empty or blank')
        })

        it('should throw error if user id is blank text', () => {
            const id = logic.addNote(userId, 'my note')
            expect(() => logic.updateNote('       ', id, 'my new text')).toThrowError('userId is empty or blank')
        })

        it('should throw error on wrong userId and id form another user', () => {
            const id = logic.addNote(userId, 'my note')

            expect(() => logic.updateNote("wrong User", id, 'my new text')).toThrowError(`note with id ${id} does not exist`)
        })
    })

    describe('search notes', () => {
        it('should return results on matching text', () => {
            expect(_notes.length).toBe(0)

            const id1 = logic.addNote(userId, 'my note 1')
            const id2 = logic.addNote(userId, 'my note 11')
            const id3 = logic.addNote(userId, 'my note 111')

            const res = logic.findNotes(userId, '11')

            expect(res).toBeDefined()
            expect(res.length).toBe(2)

            const [note1, note2] = res

            expect(note1).toBeDefined()
            expect(note1.id).toBe(id2)
            expect(note1.text).toBe('my note 11')

            expect(note2).toBeDefined()
            expect(note2.id).toBe(id3)
            expect(note2.text).toBe('my note 111')
        })

        it('should return results on matching random case', () => {
            expect(_notes.length).toBe(0)

            const id1 = logic.addNote(userId, 'my note 1')
            const id2 = logic.addNote(userId, 'my noute 11')
            const id3 = logic.addNote(userId, 'my note 111')

            const res = logic.findNotes(userId, 'nOTe')

            expect(res).toBeDefined()
            expect(res.length).toBe(2)

            const [note1, note2] = res
            
            expect(note1).toBeDefined()
            expect(note1.id).toBe(id1)
            expect(note1.text).toBe('my note 1')

            expect(note2).toBeDefined()
            expect(note2.id).toBe(id3)
            expect(note2.text).toBe('my note 111')
        })

        it('should throw error on no text', () => {
            expect(() => logic.findNotes(userId, )).toThrowError('text is not a string')
        })

        it('should throw error on empty text', () => {
            expect(() => logic.findNotes(userId, '')).toThrowError('text is empty')
        })

        it('should throw error if user id is empty', () => {
            expect(() => logic.findNotes(undefined, 'note')).toThrowError('userId is not a string')
        })

        it('should throw error if user id is empty', () => {
            expect(() => logic.findNotes('', 'note')).toThrowError('userId is empty or blank')
        })

        it('should throw error if user id is blank text', () => {
            expect(() => logic.findNotes('       ', 'note')).toThrowError('userId is empty or blank')
        })
    })
})