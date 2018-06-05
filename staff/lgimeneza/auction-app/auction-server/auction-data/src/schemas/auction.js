const { Schema } = require('mongoose')

module.exports = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
    },
    startPrice: {
        type: Number,
        required: true
    },
    closed: {
        type: Boolean,
    },
    image: {
        type: String,
    },
    categoryID: {
        type: Schema.Types.ObjectId,
    }
})