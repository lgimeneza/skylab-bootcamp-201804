const { Schema } = require('mongoose')
const Subcategory = require('./subcategory')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    subcategories: [Subcategory]
})