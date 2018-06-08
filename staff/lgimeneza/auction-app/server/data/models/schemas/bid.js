const { Schema } = require('mongoose')

module.exports = new Schema({
    auctionID: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bidDate: {
        type: Date,
        required: true
    },
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    }
})