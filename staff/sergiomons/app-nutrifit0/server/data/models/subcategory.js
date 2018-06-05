const mongoose = require('mongoose')
const { Subcategory } = require('./schemas')

module.exports = mongoose.model('Subcategory', Subcategory)