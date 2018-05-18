const express= require('express')
const bodyParser = require('body-parser')

const port = process.argv[2]

const app= express()

app.use(bodyParser.urlencoded({extended: false}))


const toDo= []
const dones= []

app.get('/', (req,res)=>{

    res.send(
        `<html>
        <head>
            <title>Task App</title>
        </head>
        <body>
            <form action="/task-management" method="POST">
                <textarea name="taskToAdd" placeholder="write a task"></textarea>
                <button type="submit">Add task</button>
            </form>
        </body>
        </html>`
    )
})

app.post('/task-management', (req,res)=>{

    const {body: {taskToAdd}}= req
    toDo.push(taskToAdd)

    res.send(
        `<html>
        <head>
            <title>Task App</title>
        </head>
        <body>
            <form action="/task-management" method="POST">
                <textarea name="taskToAdd" placeholder="write a task"></textarea>
                <button type="submit">keep</button>
            </form>
            <section class="ToDO's">
                <h1>To Do's </h1>
                <ul>
                    ${toDo.map(task => `<li>${task}<button type="click">DONE</button><li>`)}
                <ul>
            </section>
            
        </body>
        </html>`
    )


})


// <section class="Done's"
            // ${dones.length>0 && }
            // <h1>To Do's </h1>
            //     <ul>
            //         ${dones.map(task => `<li>${task}<button type="click">DONE</button><li>)}
            //     <ul>
            // </section>


app.listen(port, ()=> console.log('activated server'))

process.on('SIGINT', ()=>{
    console.log('\nstopped server')

    process.end()
})