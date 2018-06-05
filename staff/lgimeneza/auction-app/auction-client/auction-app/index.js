'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const logic = require('./src/logic')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')
//app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const auctions = await logic.listAuctions()
    const { query: { error } } = req

    res.render('index', { auctions, error, path: '/' })
})

const port = 3000

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('stopping server')

    process.exit()
})