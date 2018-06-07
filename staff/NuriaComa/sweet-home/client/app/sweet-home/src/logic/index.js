'use strict'

const shApi= require ('../../../api/src')

shApi.url ='http://localhost:3000/api'

const logic={

    UId:'NO-ID',


    registerUser(name, surname, phone, dni, password){
        return shApi.registerUser(name, surname, phone, dni, password)
    },

    authenticateUser(dni, password){
        return shApi.authenticateUser(dni, password)
        .then(id=>{
            
            this.UId=id

            return true
        })
    },

    retrieveUser(id) {
        return retrieveUser(id)
    },
}

module.exports = logic