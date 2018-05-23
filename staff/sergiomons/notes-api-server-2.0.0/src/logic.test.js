'use strict'

const expect = require('expect')
const logic = require('./logic')
const expectJS = require('expect.js')

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

            expect(note1.text).toBe('my note 1')
            expect(note2.text).toBe('my note 2')
            expect(note3.text).toBe('my note 3')

            expect(note1.userId).toBe(userId)
            expect(note2.userId).toBe(userId)
            expect(note3.userId).toBe(userId)
        })

        it('should throw error on no userId and text', () => {
            expect(() => logic.addNote()).toThrowError('userId is not a string')
        })

        it('should throw error on empty userId or text', () => {
            expect(() => logic.addNote('', '')).toThrowError('userId is empty or blank')
        })

        it('should throw error on no userId', () => {
            expect(() => logic.addNote(undefined, 'my note')).toThrowError('userId is not a string')
        })

        it('should throw error userId is not string', () => {
            expect(() => logic.addNote(8, 'my note')).toThrowError('userId is not a string')
        })

        it('should throw error on empty useriId', () => {
            expect(() => logic.addNote('', 'my note')).toThrowError('userId is empty or blank')
        })

        it('should throw error on blank userId', () => {
            expect(() => logic.addNote('   ', 'my note')).toThrowError('userId is empty or blank')
        })

        it('should throw error on no text', () => {
            expect(() => logic.addNote(userId)).toThrowError('text is not a string')
        })

        it('should throw error text is not string', () => {
            expect(() => logic.addNote(userId, 8)).toThrowError('text is not a string')
        })

        it('should throw error on empty text', () => {
            expect(() => logic.addNote(userId, '')).toThrowError('text is empty or blank')
        })

        it('should throw error on blank text', () => {
            expect(() => logic.addNote(userId, '   ')).toThrowError('text is empty or blank')
        })
    })

    describe('test list notes', () => {

        it('should list notes', () => {
            expect(_notes.length).toBe(0)
    
            logic.addNote(userId, 'my note 1')
            logic.addNote(userId, 'my note 2')
            logic.addNote(userId, 'my note 3')
            logic.addNote('456', 'my note 3')
    
            expect(_notes.length).toBe(4)
    
            const notes = logic.listNotes(userId)

            const [note1, note2, note3, note4] = _notes
    
            expect(notes.length).toBe(3)
            expect(note1.userId).toBe(userId)
            expect(note2.userId).toBe(userId)
            expect(note3.userId).toBe(userId)
            expect(note4.userId).not.toBe(userId)
        })

        it('should throw error on no userId', () => {
            expect(() => logic.listNotes()).toThrowError('userId is not a string')
            })
    
            it('should throw error on empty userId', () => {
                expect(() => logic.listNotes('')).toThrowError('userId is empty or blank')
            })
    
            it('should throw error on blank userId', () => {
                expect(() => logic.listNotes('             ')).toThrowError('userId is empty or blank')
            })
    })


    describe('retrieve note', () => {
        it('should succeed on correct data', () => {
            expect(_notes.length).toBe(0)

            const id1 = logic.addNote(userId, 'my note')
            const id2 = logic.addNote(userId, 'my note2')

            expect(_notes.length).toBe(2)

            const note = logic.retrieveNote(userId, id1)

            expectJS(note).to.be.an('object')
            expect(note).toBeDefined()
            expect(note.id).toBe(id1)
            expect(note.userId).toBe(userId)
            expect(note.text).toBe('my note')
        })

        it('should throw error on no userId and id', () => {
            expect(() => logic.retrieveNote()).toThrowError('userId or id is not a string')
        })

        it('should throw error on empty userId or id', () => {
            expect(() => logic.retrieveNote('', '')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on no userId', () => {
            expect(() => logic.retrieveNote(undefined, '897')).toThrowError('userId or id is not a string')
        })

        it('should throw error userId is not string', () => {
            expect(() => logic.retrieveNote(8, '897')).toThrowError('userId or id is not a string')
        })

        it('should throw error on empty useriId', () => {
            expect(() => logic.retrieveNote('', '897')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on blank userId', () => {
            expect(() => logic.retrieveNote('   ', '897')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on no id', () => {
            expect(() => logic.retrieveNote(userId)).toThrowError('userId or id is not a string')
        })

        it('should throw error id is not string', () => {
            expect(() => logic.retrieveNote(userId, 8)).toThrowError('userId or id is not a string')
        })

        it('should throw error on empty id', () => {
            expect(() => logic.retrieveNote(userId, '')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on blank id', () => {
            expect(() => logic.retrieveNote(userId, '   ')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on wrong id', () => {
            const id = 'non-existing-note-id'

            expect(() => logic.retrieveNote(userId, id)).toThrowError(`note with id ${id} does not exist`)
        })
     })

    describe('remove note', () => {
        it('should remove a note', () => {
            expect(_notes.length).toBe(0)

            const id1 = logic.addNote(userId, 'my note')
            const id2 = logic.addNote(userId, 'my note2')
            const id3 = logic.addNote('789', 'my note3')

            expect(_notes.length).toBe(3)

            const [note1, note2, note3] = _notes

            logic.removeNote(userId, note1.id)

            expect(_notes.length).toBe(2)
            expect(_notes).toBe(logic._notes)
            expect(_notes[0].userId).toBe(userId)
            expect(_notes[1].userId).not.toBe(userId)

        })

        it('should throw error on no userId and id', () => {
            expect(() => logic.retrieveNote()).toThrowError('userId or id is not a string')
        })

        it('should throw error on empty userId or id', () => {
            expect(() => logic.retrieveNote('', '')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on no userId', () => {
            expect(() => logic.retrieveNote(undefined, '897')).toThrowError('userId or id is not a string')
        })

        it('should throw error userId is not string', () => {
            expect(() => logic.retrieveNote(8, '897')).toThrowError('userId or id is not a string')
        })

        it('should throw error on empty useriId', () => {
            expect(() => logic.retrieveNote('', '897')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on blank userId', () => {
            expect(() => logic.retrieveNote('   ', '897')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on no id', () => {
            expect(() => logic.retrieveNote(userId)).toThrowError('userId or id is not a string')
        })

        it('should throw error id is not string', () => {
            expect(() => logic.retrieveNote(userId, 8)).toThrowError('userId or id is not a string')
        })

        it('should throw error on empty id', () => {
            expect(() => logic.retrieveNote(userId, '')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on blank id', () => {
            expect(() => logic.retrieveNote(userId, '   ')).toThrowError('userId or id is empty or blank')
        })

        it('should throw error on wrong id', () => {
            const id = 'non-existing-note-id'

            expect(() => logic.retrieveNote(userId, id)).toThrowError(`note with id ${id} does not exist`)
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
            expect(note.userId).toBe(userId)
            expect(note.text).toBe('my new note')
        })

        it('should throw error on no userId or id or text', () => {
            expect(() => logic.updateNote()).toThrowError('userId or id or text is not a string')
        })

        it('should throw error on empty userId or id or text', () => {
            expect(() => logic.updateNote('', '', '')).toThrowError('userId or id or text is empty or blank')
        })

        it('should throw error on no userId', () => {
            expect(() => logic.updateNote(undefined, '897', 'my new note')).toThrowError('userId or id or text is not a string')
        })

        it('should throw error userId is not string', () => {
            expect(() => logic.updateNote(8, '897', 'my new note')).toThrowError('userId or id or text is not a string')
        })

        it('should throw error on empty useriId', () => {
            expect(() => logic.updateNote('', '897', 'my new note')).toThrowError('userId or id or text is empty or blank')
        })

        it('should throw error on blank userId', () => {
            expect(() => logic.updateNote('   ', '897', 'my new note')).toThrowError('userId or id or text is empty or blank')
        })

        it('should throw error on no id', () => {
            expect(() => logic.updateNote(userId, undefined, 'my new note')).toThrowError('userId or id or text is not a string')
        })

        it('should throw error id is not string', () => {
            expect(() => logic.updateNote(userId, 8, 'my new note')).toThrowError('userId or id or text is not a string')
        })

        it('should throw error on empty id', () => {
            expect(() => logic.updateNote(userId, '', 'my new note')).toThrowError('userId or id or text is empty or blank')
        })

        it('should throw error on blank id', () => {
            expect(() => logic.updateNote(userId, '   ', 'my new note')).toThrowError('userId or id or text is empty or blank')
        })

        it('should throw error on no text', () => {
            expect(() => logic.updateNote(userId, '567')).toThrowError('userId or id or text is not a string')
        })

        it('should throw error id is not string', () => {
            expect(() => logic.updateNote(userId, '567', 8)).toThrowError('userId or id or text is not a string')
        })

        it('should throw error on empty id', () => {
            expect(() => logic.updateNote(userId, '567', '')).toThrowError('userId or id or text is empty or blank')
        })

        it('should throw error on blank id', () => {
            expect(() => logic.updateNote(userId, '567', '   ')).toThrowError('userId or id or text is empty or blank')
        })

        it('should throw error on wrong id', () => {
            const id = 'non-existing-note-id'

            expect(() => logic.updateNote(userId, id, 'my new note')).toThrowError(`note with id ${id} does not exist`)
        })
     })

    

    describe('search notes', () => {
        it('should return results on matching text', () => {
            expect(_notes.length).toBe(0)

            const id1 = logic.addNote(userId, 'my note 1')
            const id2 = logic.addNote(userId, 'my note 11')
            const id3 = logic.addNote(userId, 'my note 111')

            expect(_notes.length).toBe(3)

            const res = logic.findNotes(userId, '11')

            expect(res).toBeDefined()
            expect(res.length).toBe(2)

            const [note1, note2] = res

            expect(note1).toBeDefined()
            expect(note1.userId).toBe(userId)
            expect(note1.id).toBe(id2)
            expect(note1.text).toBe('my note 11')

            expect(note2).toBeDefined()
            expect(note2.userId).toBe(userId)
            expect(note2.id).toBe(id3)
            expect(note2.text).toBe('my note 111')
        })

        it('should return results on matching text case', () => {
            expect(_notes.length).toBe(0)

            const id1 = logic.addNote(userId, 'my note a')
            const id2 = logic.addNote(userId, 'my note aA')
            const id3 = logic.addNote(userId, 'my note aAa')

            const res = logic.findNotes(userId, 'aA')

            expect(res).toBeDefined()
            expect(res.length).toBe(2)

            const [note1, note2] = res

            expect(note1).toBeDefined()
            expect(note1.userId).toBe(userId)
            expect(note1.id).toBe(id2)
            expect(note1.text).toBe('my note aA')

            expect(note2).toBeDefined()
            expect(note2.userId).toBe(userId)
            expect(note2.id).toBe(id3)
            expect(note2.text).toBe('my note aAa')
        })

        it('should throw error on no userId and text', () => {
            expect(() => logic.addNote()).toThrowError('userId is not a string')
         })

        it('should throw error on empty userId or text', () => {
            expect(() => logic.addNote('', '')).toThrowError('userId is empty or blank')
        })

        it('should throw error on no userId', () => {
            expect(() => logic.addNote(undefined, 'my note')).toThrowError('userId is not a string')
        })

        it('should throw error userId is not string', () => {
            expect(() => logic.addNote(8, 'my note')).toThrowError('userId is not a string')
        })

        it('should throw error on empty useriId', () => {
            expect(() => logic.addNote('', 'my note')).toThrowError('userId is empty or blank')
        })

        it('should throw error on blank userId', () => {
            expect(() => logic.addNote('   ', 'my note')).toThrowError('userId is empty or blank')
        })

        it('should throw error on no text', () => {
            expect(() => logic.addNote(userId)).toThrowError('text is not a string')
        })

        it('should throw error or is not string', () => {
            expect(() => logic.addNote(userId, 8)).toThrowError('text is not a string')
        })

        it('should throw error on empty text', () => {
            expect(() => logic.addNote(userId, '')).toThrowError('text is empty or blank')
        })

        it('should throw error on blank text', () => {
            expect(() => logic.addNote(userId, '   ')).toThrowError('text is empty or blank')
        })
    })
})

