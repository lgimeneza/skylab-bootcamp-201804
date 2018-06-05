const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    deliveryAddress: {
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
    paymentMethod: {
        type: String,
        required: true
    }
})