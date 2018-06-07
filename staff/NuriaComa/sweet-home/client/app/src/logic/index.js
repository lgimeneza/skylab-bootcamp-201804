'use strict'

const shApi = require('api')

shApi.url = 'http://localhost:4000/api'

const logic = {
    userId: 'NO-ID',
    data: 'NO-DATA',

    registerUser(name, surname, phone, dni, password) {
        return shApi.registerUser(name, surname, phone, dni, password).then((res) => true)
    },

    authenticateUser(dni, password) {
        return shApi.authenticateUser(dni, password)
            .then(id => {
                this.userId = id

                return true
            })
    },

    retrieveUser(id) {
        return shApi.retrieveUser(id)
            .then(res => {

                this.data = res.data

                return true
            })
    },

    updateUser(id, name, surname, phone, dni, password, newPhone, newPassword) {
        return (id, name, surname, phone, dni, password, newPhone, newPassword)

    },

    unregisterUser(id, dni, password) {
        return shApi.unregisterUser(id, dni, password)
    }
}

module.exports = logic