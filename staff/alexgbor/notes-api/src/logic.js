'use strict'

class Note {
    constructor(text) {
        this.id = Date.now()
        this.text = text
    }
}

const logic = {
    _notes: [],

    addNote(text) {
        const note = new Note(text)

        this._notes.push(note)
    },

    listNotes() {
        let textList = this._notes.map(v => v.text)
        return textList
    },

    removeNote(id) {
        let index = this._notes.findIndex(v=> v.id==id)
        this._notes.splice(index,1)  
    }
}

module.exports = logic