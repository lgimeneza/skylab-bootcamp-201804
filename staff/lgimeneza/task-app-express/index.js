'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))



app.get('/', (req, res) => {
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
    
        <form>
            <input type="text">
            <button type="submit">add</button>
        </form>
    
    </body>
    
    </html>
    
    `)
})


app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
})