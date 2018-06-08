const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    owners: [{
        name: {
            type: String,
            
        },
        surname: {
            type: String,
            
        },
        dni: {
            type: String
        },
        phone: {
            type: String
        },

    }],
    realstate: {
        name: {
            type: String,
            
        },
        address: {
            type: String,
            
        },
        phone: {
            type: String,
            
        }
    }
  
})
