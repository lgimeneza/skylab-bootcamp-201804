const {Schema}= require('mongoose')

module.exports= new Schema({

    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    physicalCondition: {
        type: String,
        required: true,
        enum: ['strong', 'fit', 'fat/chubby', 'average', 'thin/slim']
    },
    eyes: {
        type: String,
        required: true,
        enum: ['brown', 'green', 'blue', 'dark', 'other']
    },
    hair: {
        type: String,
        required: true,
        enum: ['brown', 'blond', 'dark/black', 'ginger', 'bald', 'buzzed']
    },
    ethnicity: {
        type: String,
        required: true,
        

    },
    beard: {
        type: Boolean,
    },

    tattoos:{
        type: Boolean,
        required: true
    },

    piercings:{
        type: Boolean,
        required: true
    },

})