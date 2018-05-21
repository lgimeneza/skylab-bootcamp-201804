const express = require('express')
const bodyParser = require('body-parser')
const logic = require('./src/logic')

const port = process.argv[2]

const app = express()
app.use(bodyParser.json()) 


app.post('/api/notes', (req, res) => {
    const { body: { text } } = req

    logic.addNote(text)

    res.status(201)
    res.json({ status: 'OK' })
})

app.get('/api/notes', (req, res) => {

    logic.listNotes()

    res.json({
        status: 'OK',
        notes
    })
})

app.delete('/api/notes/:id', (req, res) => {
    const { params: { id } } = req

    const matchId = logic.removeNote(id)

    if (matchId) {

        res.json({ status: 'OK' })
    } else {
        res.status(404)

        res.json({ status: 'KO', error: `note with id ${id} not found` })
    }
})

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})