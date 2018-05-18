const express = require('express')
const bodyParser = require('body-parser')

const port = process.argv[2]
const app = express()
app.use(bodyParser.urlencoded({ extended: false })) // middleware
const tasks = []

app.get('/', (req, res) => {
    let count=0;
    res.send(`<html>
        <head>
            <title>tasks App</title>
        </head>
        <body>
            <form action="/add-task" method="POST">
                <textarea name="task" placeholder="write a task"></textarea>
                <button type="submit">keep</button>
            </form>
            <ul>
            ${tasks.map(task => `<li>${task}</li> <a href="/delete-task?id_msg=${count++}"><button>delete</button></a>`)}
            </ul>
        </body>
    </html>`)
})


app.get('/delete-task', (req, res) => {
    const { query: { id_msg } } = req
    tasks.splice(id_msg, 1) ;
    res.redirect('/');
})

app.post('/add-task', (req, res) => {
    const { body: { task } } = req    
    tasks.push(task)    
    res.redirect('/');
})

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')
    process.exit()
})