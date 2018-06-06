const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    parent: {
        type: ObjectId,
        ref: 'Category'
    }
})