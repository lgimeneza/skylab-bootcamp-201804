'use strict'

const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    services: [ObjectId],
    date: Date,
    endDate: Date,
    admin: {
        type: Boolean
    }
})