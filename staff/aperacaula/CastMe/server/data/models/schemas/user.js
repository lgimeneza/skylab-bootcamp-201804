const { Schema, Schema: { ObjectId } } = require('mongoose')
const PersonalData = require('./personal-data')
const PhysicalData = require('./physical-data')
const ProfessionalData = require('./professional-data')

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

    pics: {
        type: File,
        

    },
    videobookLink: {
        type: String,

    },

    profilePicture:{
        type: String,
    },

    

    applications: [
        {
            project: {
                type: ObjectId,
                ref: 'Project'
            },
            castings: [
                {
                    type: ObjectId
                }
            ]
        }
    ]
})