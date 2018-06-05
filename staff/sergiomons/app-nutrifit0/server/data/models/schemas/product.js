const { Schema, Schema: { ObjectId } } = require('mongoose')
const Category = require('./category');
const Subcategory = require('./subcategory')

module.exports = new Schema({
    image_product: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: [{
        type: ObjectId,
        ref: 'Category',
        required: true
    }],
    subcategory: [{
        type: ObjectId,
        ref: 'Subcategory',
        required: true
    }],
})