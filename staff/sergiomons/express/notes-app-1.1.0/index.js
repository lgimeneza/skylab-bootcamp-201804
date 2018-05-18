const logic = require('./logic')
const express = require('express');
const bodyParser = require('body-parser');

const port = process.argv[2]

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))


app.get('/', (req, res) => {
    const toDos = logic.listTodos()
    const dones = logic.listDones()
    res.send(`<html>
    <head>
        <title>Notes App</title>
    </head>
    <body>
        <form action="/addTask" method="POST">
            <textarea name="note" placeholder="write a note"></textarea>
            <button type="submit">keep</button>
        </form>
        <h2>ToDo List</h2>
        <ul>
            ${toDos.map(task => `<li>${task.text}<a href="/markTaskDone/${task.id}"><button >V</button></a></li>`)}
            
        </ul>
        <h2>DONE List</h2>
        <ul>
            ${dones.map(task => `<li>${task.text}<a href="/removeTask/${task.id}"><button >X</button></li>`)}
        </ul>
    </body>
</html>`)
})

app.post('/addTask', (req, res) => {

    const {note} = req.body   

    logic.addTask(note)

    res.redirect("/")
})


app.get('/markTaskDone/:id', (req, res) => {

    const { params: {id}} = req

    logic.markTaskDone(Number(id))

    res.redirect('/')
})

app.get('/removeTask/:id', (req, res) => {

    const { params: {id}} = req

    logic.removeTask(Number(id))

    res.redirect('/')
})

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')
    process.exit()
})
