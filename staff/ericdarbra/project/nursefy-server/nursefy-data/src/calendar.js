const mongoose = require('mongoose')
const { Calendar } = require('./schemas')

module.exports = mongoose.model('Calendar', Calendar)