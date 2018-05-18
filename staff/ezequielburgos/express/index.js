const express = require('express')
const bodyParser = require('body-parser')
const logic = require('./logic')

// const port = process.argv[2]
const port = 3000

const app = express()
app.use(bodyParser.urlencoded({ extended: false })) // middleware

const notes = []

app.get('/', (req, res) => {
    res.send(`<html>
        <head>
            <title>Notes App</title>
        </head>
        <body>
            <form action="/add-note" method="POST">
                <textarea name="note" placeholder="write a note"></textarea>
                <button type="submit">keep</button>
            </form>
            <h1>ToDo</h1>
            <ul>
            ${notes.map((note, index) => `<li>${note}<button><a href=/dones?id=${note}>V</a></button></li>`)}
             </ul>
             <h1>Dones</h1>
            <ul>
          
             </ul>
        </body>
    </html>`)
})

app.post('/add-note', (req, res) => {
    const { body: { note } } = req
    notes.push(note)
    res.redirect('/')
})


app.get('/dones', (req, res) => {
    const { body: { note } } = req
    notes.pop(note)
    res.redirect('/')
})

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})