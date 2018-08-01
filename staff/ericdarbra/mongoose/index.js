const mongoose = require('mongoose')

mongoose.connect('mongodb:localhost/skylab-bootcamp-201804-test')

db.on('error',console.error)

const Cat = mongoose.model('Cat', {name:String})

