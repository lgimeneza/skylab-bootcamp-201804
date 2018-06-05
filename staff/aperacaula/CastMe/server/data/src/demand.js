const mongoose = require('mongoose')
const { Demand } = require('./schemas')

module.exports = mongoose.model('Demand', Demand)