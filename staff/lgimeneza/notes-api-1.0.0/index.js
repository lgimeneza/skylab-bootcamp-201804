const express = require('express')
const bodyParser = require('body-parser')
const logic = require('./src/logic')

const port = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json()) // middleware

app.post('/api/notes', (req, res) => {
    const { body: { text } } = req

    if (isJson(text) === false) res.status(400).json({ status: 'KO' })

    const note = logic.addNote(text)

    if (note.text !== text) res.status(404).json({ status: 'KO' })

    res.status(201)
    res.json({ status: 'OK' })
})

app.get('/api/notes', (req, res) => {

    res.json({
        status: 'OK',
        notes: logic.listNotes()
    })
})

app.delete('/api/notes/:id', (req, res) => {
    const { params: { id } } = req

    try {

        logic.removeNote(id)

        res.status(404)
        res.json({ status: 'OK' })
    } catch (error) {

        res.status(404)
        res.json({ status: 'KO', error: `note with id ${id} not found` })
    }
    
})

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})

function isJson(str) {

    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}