const express = require('express')
const bodyParser = require('body-parser')
const logic= require ('./src/logic.js')
const port = process.argv[2]

const app=express()

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res)=>{


    res.send (`<html>
    <head>
        <title>TASK APP</title>
    </head>
    <body>
        <form action="/add-task" method="POST">
            <input name="task" placeholder="New task"></input>
            <button type="submit">ADD</button>
        </form>
    </body>
</html>`)
})
app.post('/add-task', (req, res) => {
    const { body: { text} } = req
    logic.addTask(text)

        res.redirect('/')
        res.send(`<html>
            <head>
                <title>TASK APP</title>
            </head>
            <body>
                <form action="/add-task" method="POST">
                    <input name="task" placeholder="New task"></input> 
                    <button type="submit">ADD</button>
                </form>
                <h1>TO DO </h1>
                <ul>
                    ${logic.listTodos().map(task => `<li>${task.text} <button type="submit" formaction="/add-Dones">✓</button></li>`).join('')}
                </ul>
                
            </body>
        </html>`) 
})
app.post('/add-Dones', (req, res) => {
    const { body: { task} } = req

    logic.addTask(task)
    logic.markTaskDone(id)
    logic.removeTask()

        res.send(`<html>
            <head>
                <title>TASK APP</title>
            </head>
            <body>
                <form action="/add-task" method="POST">
                    <input name="task" placeholder="New task"></input> 
                    <button type="submit">ADD</button>
                </form>
                <h1>TO DO </h1>
                <ul>
                    ${logic.listTodos().map(task => `<li>${task.text}<button type="submit" formaction="/add-Dones">✓</button></li> `).join('')}
                </ul>
                <h1>TO DO </h1>
                <ul>
                    ${logic.listDones().map(task => `<li>${task.text}<button type="submit" formaction="/removeTask">✗</button></li> `).join('')}
                </ul>
                
            </body>
        </html>`) 
})

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})