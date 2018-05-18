'use strict'

const express = require('express')
const bodyParser = require('body-parser')
let logic = require('./scripts/logic')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {

    const todos = 

    res.status(200).send(`
    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Task-app</title>
    </head>
    
    <body>
        <h1>tasks app</h1>
    
        <h2>add task</h2>
    
        <form id="task-form" action="/add-task" method="POST">
            <input type="text" name="task">
            <button type="submit">add</button>
        </form>
    
        ${todos}
        <h2>todo\'s</h2>
    
        <ul>
            ${logic.listTodos().map(task => `<li><a href="/mark-task-done/${task.id}" class="btn btn-success">${task.text}</a></li>`).join('')}
        </ul>
    
        <h2>done\'s</h2>
    
        <ul>
            ${logic.listDones().map(task => `<li><a href="/remove-task/${task.id}" class="btn btn-success">${task.text}</a></li>`).join('')}
        </ul>
    
    
    </body>
    
    </html>`)

})

app.post('/add-task', (req, res) => {

    const { body: { task } } = req

    logic.addTask(task)

    res.redirect('/')

})

app.get('/mark-task-done/:taskId', (req, res) => {

    const taskId = Number(req.params.taskId)

    logic.markTaskDone(taskId)

    res.redirect('/')
})

app.get('/remove-task/:taskId', (req, res) => {

    const taskId = Number(req.params.taskId)

    logic.removeTask(taskId)

    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Server corriendo en http://localhost:${port}`)
})

