'use strict'

const uuidv4 = require('uuid/v4')

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

const logic = {
    _notes: [],

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

        if (!(typeof id === 'string' && typeof userId ==='string')) throw Error('id or userid is not a string')

        if (!(id = id.trim())) throw Error('id is empty or blank')

        const index = this._notes.findIndex(note => note.id === id)

        if (index < 0) throw Error(`note with id ${id} does not exist`)

        if (this._notes[index].userId!==userId) throw Error(`Note with ID ${id} doesn\'t belong to this user.`)

        return this._notes[index]
    },

    /**
     * @param {string} userId
     */
    listNotes(userId) {
        if (typeof userId !== 'string') throw Error('id is not a string')
        
        let userNotes = this._notes.filter(v=>v.userId===userId)

        if (!userNotes.length) throw Error('No notes attached to this user ID')

        return userNotes
    },

    /**
     * 
     * @param {string} userId
     * @param {string} id 
     *
     * @throws
     */
    removeNote(userId, id) {
        // TODO check user id
        
        if (!(typeof id === 'string' && typeof userId ==='string')) throw Error('id or userid is not a string')

        if (!(id = id.trim())) throw Error('id is empty or blank')

        const index = this._notes.findIndex(note => note.id === id)

        if (index < 0) throw Error(`note with id ${id} does not exist`)

        if (this._notes[index].userId!==userId) throw Error(`Note with ID ${id} doesn\'t belong to this user.`)

        this._notes.splice(index, 1)
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
        // TODO check user id

        if (!(typeof id === 'string' && typeof userId ==='string')) throw Error('id or userid is not a string')

        if (!(id = id.trim())) throw Error('id is empty or blank')

        if (typeof text !== 'string') throw Error('text is not a string')

        if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

        const note = this._notes.find(note => note.id === id)

        if (!note) throw Error(`note with id ${id} does not exist`)

        if (note.userId!==userId) throw Error('This note doesn\'t belong to this user.')

        note.text = text
    },

    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @throws
     */
    findNotes(userId, text) {
        // TODO filter by user id too

        if (!(typeof id === 'string' && typeof userId ==='string')) throw Error('id or userid is not a string')

        if (!text.length) throw Error('text is empty')



        return this._notes.filter(note => note.userId===userId && note.text.includes(text))
    }
}

module.exports = logic