import { Mongoose } from 'mongoose';

'use strict'

const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./src/routes')
const logic = require('./src/logic')
const cors = require('cors')

Mongoose.connect('mongodb://localhost/skylab-bootcamp-201804')
    .then(() => {

        const port = process.argv[2] || 3000

        const app = express()

        app.use(cors())

        app.use(bodyParser.json()) // middleware

        app.use('/api', router)

        app.listen(port, () => console.log(`server running on port ${port}`))

        process.on('SIGINT', () => {
            console.log('\nstopping server')

            Mongoose.connection.close(()=> {
                console.log('db conection closed')
                process.exit()
            })
        })
    })
    .catch(console.error)