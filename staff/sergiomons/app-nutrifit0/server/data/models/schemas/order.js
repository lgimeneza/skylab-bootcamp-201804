const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')
// const Product = require('./product')

module.exports = new Schema({
    user: {
        type: String,
        required: true
    },
    addressDelivery: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    discount: {
        type: Number,
    },
    products: [{
        type: ObjectId,
        ref: 'Product',
        required: true
    }],
    payment_method: [{
        type: String,
        required: true
    }]
})