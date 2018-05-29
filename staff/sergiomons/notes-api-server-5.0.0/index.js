'use strict'

const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./src/routes');

require('dotenv').config()

const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/skylab-bootcamp-201804')
    .then(conn => {

        const app = express();

        app.use(bodyParser.json())

        app.use('/api', router)

        app.listen(port, () => {
            console.log(`server running on port ${port}`)
        })

        process.on('SIGINT', () => {
            console.log('\nstopping server')

            process.exit()
        })
    }).catch(err => {
        console.log('error server:' + err.stack)

        mongoose.connection.close(() => {
            console.log('db connection closed')
             process.exit();
        })
    })


// const { MongoClient } = require('mongodb')
// const express = require('express')
// const bodyParser = require('body-parser')
// const router = require('./src/routes')
// const logic = require('./src/logic')
// const cors = require('cors')

// MongoClient.connect('mongodb://localhost:27017/skylab-bootcamp-201804', { useNewUrlParser: true }, (err, conn) => {
//     if (err) throw err

//     const db = conn.db()

//     logic.init(db)

//     const port = process.argv[2] || 3000

//     const app = express()

//     app.use(cors())

//     app.use(bodyParser.json()) // middleware

//     app.use('/api/users', router)

//     app.listen(port, () => console.log(`server running on port ${port}`))

//     process.on('SIGINT', () => {
//         console.log('\nstopping server')

//         conn.close()

//         process.exit()
//     })

// })