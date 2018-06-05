const {Schema, Schema:{ObjectId}}= require('mongoose')
const PhysicalData= require('./physicalData')

module.exports= new Schema({
    title:{
        type: String,
        required: true,
    },

    minAge: {
        type: Number,
        required: true
    },
    maxAge: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    description: {
        type: String,
        required: true,
    },
    physicalReq: PhysicalData,

    status: {
        type: Boolean,
        required: true
    },

    users: [{type: ObjectId, ref: 'User', required: true}]
    
})