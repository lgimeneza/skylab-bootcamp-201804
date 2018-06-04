const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')
const Image = require('./image')
const Note = require('./note')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true
    },
    race: {
        type: String,
      //  required: true
    },
    gender: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    photoProfile: { 
        type: String,
        // required: true
    },
    birthdate: { 
        type: Date,
        // required: true
    },
    friends: [{
        type: ObjectId,
        ref: this
    }],
    loves: [{
        type: ObjectId,
        ref: this
    }],

    images:[Image],
    notes: [Note]
})