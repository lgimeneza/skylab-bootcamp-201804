'use strict'

const shApi= require ('../../../../api/src')

shApi.url ='http://localhost:3000/api'

const logic={

    UId:'NO-ID',
    data:'NO-DATA',



    registerUser(name, surname, phone, dni, password){
        return shApi.registerUser(name, surname, phone, dni, password).then((res)=> true)
    },

    authenticateUser(dni, password){
        return shApi.authenticateUser(dni, password)
        .then(id=>{

            this.UId=id

            return true
        })
    },

    retrieveUser(id) {
        return shApi.retrieveUser(id)
        .then(res=>{

            this.data=res.data

            return true
        })
    },
    updateUser(id, name, surname, phone, dni, password, newPhone, newPassword) {
        return (id, name, surname, phone, dni, password, newPhone, newPassword) 

    },
    unregisterUser(id, dni, password){
        return shApi.unregisterUser(id, dni, password)
    },
    deletDB(){
        return db.dropDatabase()
    }
}

module.exports = logic