'use strict'

const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

module.exports = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    product:{
        ref: 'Product',
        type: ObjectId,
    },
})