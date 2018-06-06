const { Schema } = require('mongoose')
const ArduinoData = require('./arduinoData')


module.exports = new Schema({
    timestamp: {
        type: Number,
        required:true
    },
    value: {
        type: Number,
        required: true
    }
})