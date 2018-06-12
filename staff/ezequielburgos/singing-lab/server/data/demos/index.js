'use strict'

require('dotenv').config()

const { mongoose, models: { User, Category, Product, Order } } = require('..')

const { env: { DB_URL } } = process

// WARN run this script from root folder: $ node demos/

mongoose.connect(DB_URL)
    .then(() => {
        // TODO insertions
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('done'))
