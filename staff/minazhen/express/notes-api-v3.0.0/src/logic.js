'use strict'

const uuidv4 = require('uuid/v4')
const fs = require('fs')

/**
 * Note abstraction
 */
class Note {
    /**
     * 
     * @param {string} userId 
     * @param {string} text 
     */
    constructor(userId, text) {
        this.id = uuidv4()
        this.userId = userId
        this.text = text
    }
}

const path = './data/notes.json'

const _notes = JSON.parse(fs.readFileSync(path))

function save() {
    fs.writeFileSync(path, JSON.stringify(_notes, null, 4))
}

// const _notes = []

const logic = {
    get _notes() {
        return _notes
    },

    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @throws
     */
    addNote(userId, text) {

        if (typeof userId !== 'string') throw Error('userId is not a string')

        if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

        if (typeof text !== 'string') throw Error('text is not a string')

        if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

        const note = new Note(userId, text)

        this._notes.push(note)

        save()

        return note.id
    },

    /**
     * 
     * @param {string} userId
     * @param {string} id 
     * 
     * @throws
     */
    retrieveNote(userId, id) {
        if (typeof userId !== 'string') throw Error('userId is not a string')

        if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

        if (typeof id !== 'string') throw Error('id is not a string')

        if (!(id = id.trim())) throw Error('id is empty or blank')

        const index = this._notes.findIndex(note => {
            if (note.userId === userId) return note.id === id
        })

        if (index < 0) throw Error(`note with id ${id} does not exist`)

        return this._notes[index]
    },

    /**
     * @param {string} userId
     */
    listNotes(userId) {

        if (typeof userId !== 'string') throw Error('userId is not a string')

        if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

        let notes = this._notes.filter(note => {
            if (note.userId === userId) return note
        })

        return notes
    },

    /**
     * 
     * @param {string} userId
     * @param {string} id 
     *
     * @throws
     */
    removeNote(userId, id) {
        if (typeof userId !== 'string') throw Error('userId is not a string')

        if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')
        
        if (typeof id !== 'string') throw Error('id is not a string')

        if (!(id = id.trim())) throw Error('id is empty or blank')

        const index = this._notes.findIndex(note => {
            if (note.userId === userId) return note.id === id
        })

        if (index < 0) throw Error(`note with id ${id} does not exist`)

        this._notes.splice(index, 1)

        save()
    },

    /**
     * 
     * @param {string} userId
     * @param {string} id 
     * @param {string} text 
     * 
     * @throws
     */
    updateNote(userId, id, text) {
        if (typeof userId !== 'string') throw Error('userId is not a string')

        if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

        if (typeof id !== 'string') throw Error('id is not a string')

        if (!(id = id.trim())) throw Error('id is empty or blank')

        if (typeof text !== 'string') throw Error('text is not a string')

        if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

        const note = this.listNotes(userId).find(note => note.id === id)

        if (!note) throw Error(`note with id ${id} does not exist`)

        note.text = text

        save()
    },

    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @throws
     */
    findNotes(userId, text) {
        if (typeof userId !== 'string') throw Error('userId is not a string')

        if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

        if (typeof text !== 'string') throw Error('text is not a string')

        if (!text.trim().length) throw Error('text is empty or blank')

        const txt = new RegExp(text,"i"); 

        const notes = this.listNotes(userId).filter(note => {
            if (note.text.search(txt) > -1) return note
        })

        return notes
    }
}

module.exports = logic