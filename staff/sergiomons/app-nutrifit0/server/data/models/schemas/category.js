const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    parentId: {
        type: ObjectId,
        ref: 'Category'
    }
})