const {Schema} = require('mongoose')

const Events = require('./events')

module.exports = new Schema({
    events:[Events]
})