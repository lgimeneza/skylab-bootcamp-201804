class Note {
    constructor(text) {
        this.id = ++i
        this.text = text
    }
}
var i = 0

const logic = {
    _notes: [],

    addNote(text) {

        if (typeof text !== 'string') throw Error('Invalid input text')
        if (text === '') throw Error('Text cannot blank or empty')
        const note = new Note(text)

        this._notes.push(note)
    },

    listNotes() {
        return this._notes
    },

    removeNote(id) {

        if (typeof id !== 'number') throw Error('Invalid id')

        const note = this._notes.find(note => note.id == id)

        if(note) {
            this._notes = this._notes.filter(note => note.id != id)

            return true
        }
      return false
    }

}

module.exports = logic