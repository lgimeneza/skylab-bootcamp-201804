'use strict'

const mongoose = require('mongoose')
const { Role } = require('./schemas')

module.exports = mongoose.model('Role', Role)