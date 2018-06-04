const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    owners: [{
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        dni: {
            type: String
        },
        phone: {
            type: String
        },

    }],
    realstate: {
        name: {
            type: String,
            required: true
        },
        adress: {
            type: String
        },
        phone: {
            type: String
        }
    },
    users: [{
        type: ObjectId,
        ref: 'User',
        required: true
    }]
})