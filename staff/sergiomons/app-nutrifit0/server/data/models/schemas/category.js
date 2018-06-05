const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: ObjectId,
        ref: 'Category'
    }
})