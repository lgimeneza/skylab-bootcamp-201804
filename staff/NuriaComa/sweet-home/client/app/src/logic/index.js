'use strict'

const shApi = require('api')

shApi.url = 'http://localhost:4000/api'

shApi.token = function (token) {
    if (token) {
        localStorage.setItem('token', token)

        return
    }

    return localStorage.getItem('token')
}

const logic = {
    userId: 'NO-ID',
    data: 'NO-DATA',
    users: 'NO-USERS',

    registerUser(name, surname, phone, dni, password) {
        return shApi.registerUser(name, surname, phone, dni, password)
            .then((res) => true)
    },

    authenticateUser(dni, password) {
        return shApi.authenticateUser(dni, password)
            .then(id => {
                this.userId = id

                return id
            })
    },

    retrieveUser(id) {
        return shApi.retrieveUser(id)
            .then(res => {

                this.data = res.data

                return true
            })
    },

    updateUser(id, name, surname, phone, dni, password, newPassword) {
        return shApi.updateUser(id, name, surname, phone, dni, password, newPassword)
            .then(users => {
                return users
            })
    },
    listUsers() {
        return shApi.listUsers()

        this.users = res.data

        return true
    },

    unregisterUser(id, dni, password) {
        return shApi.unregisterUser(id, dni, password)
            .then((res) => true)
    }
}

module.exports = logic