const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    id: {
        type: ObjectId,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    orderNumber: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        required: false
    },
    payment: {
        type: ObjectId,
        ref: 'Payment',
        required: true
    }
})