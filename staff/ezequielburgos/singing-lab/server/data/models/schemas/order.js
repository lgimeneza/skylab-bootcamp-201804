const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    date: {
        type: Date,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    products: [{
        type: ObjectId,
        ref: 'Product',
        required: true
    }]
})