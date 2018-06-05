const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})