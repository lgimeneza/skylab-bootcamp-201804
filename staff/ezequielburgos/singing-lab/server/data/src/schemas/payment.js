const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = ({
    id : {
        type: ObjectId,
        required: true
    },
    status: {
        type: String,
        required: false
    },
    allowed: {
        type: Boolean,
        required: false
    }
})