const { Schema, Schema:{ObjectId} } = require('mongoose')
const PersonalData = require('./personalData.js')
const PhysicalData = require('./physicalData.js')
const ProfessionalData = require('./professionalData.js')


module.exports = new Schema({
    
    email: {
        type: String,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true
    },
    
    personalData: PersonalData,

    physicalData: PhysicalData,

    professionalData: ProfessionalData,

    videobookLink: {
        type: String,
        
    },

    pics: {
        type: Array,
        required: true
        
    },

    castings: [{type: ObjectId, ref: 'Demand', required: true}]



})