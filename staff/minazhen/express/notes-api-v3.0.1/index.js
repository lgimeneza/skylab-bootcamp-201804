"use strict"

const express = require("express")
const bodyParser = require("body-parser")
const logic = require("./src/logic")

const port = process.argv[2] || 3000

const app = express()
app.use(bodyParser.json()) // middleware

const userTemp = "Mina"

app.post('/api/users/:userId/notes', (req, res) => {
    const { body: { text }, params : { userId } } = req

    try {
        const id = logic.addNote(userId, text)

        res.status(201)
        res.json({ status: 'OK', data: { id } })
    } catch (err) {
        res.status(400)
        res.json({ status: 'KO' , error: {message: `${err}`}})
    }

})

app.get('/api/users/:userId/notes', (req, res) => {
    const { params: { userId }, query : { q } } = req

    if (q) {
        try {
            res.json({
                status: 'OK',
                data : logic.findNotes(userId, q)
            })
        } catch (err) {
            res.status(400)
            res.json({ status: 'KO' , error: { message: `${err}` }})
        }
    } else {
        res.json({
            status: 'OK',
            data : logic.listNotes(userId)
        })
    } 
})

app.get('/api/users/:userId/notes/:id', (req, res) => {
    const { params: { userId, id } } = req

    try {
        res.json({
            status : 'OK',
            data : logic.retrieveNote(userId, id)
        })
    } catch (err) {
        res.status(400)
        res.json({ status: 'KO' , error: {message: `${err}`}})
    }
})

app.delete('/api/users/:userId/notes/:id', (req, res) => {
    const { params: { userId, id } } = req

    try {
        logic.removeNote(userId, id)

        res.json({ status: 'OK' })
    } catch (err) {
        res.status(404)
        res.json({ status: 'KO', error: {message: `${err}`}})
    }
})

app.patch('/api/users/:userId/notes/:id', (req, res) => {
    const { params: { userId, id }, body: { text } } = req

    try{
        logic.updateNote(userId, id, text)

        res.json({ status: 'OK' }) 
    } catch (err) {
        res.status(400)
        res.json({ status: 'KO', error: {message: `${err}`}})
    }
})

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})