const { Schema } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})