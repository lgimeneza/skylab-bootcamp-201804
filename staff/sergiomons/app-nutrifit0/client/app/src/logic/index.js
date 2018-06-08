'use strict'

const clientApi = require('client-api')

clientApi.url = 'http://localhost:5000/api'

const logic = {
    userId: 'NO-ID',

    registerUser(username, email, password, repeatPassword) {
        return clientApi.registerUser(username, email, password, repeatPassword)
    },

    login(email, password) {
        return clientApi.authenticateUser(email, password)
            .then(id => {
                this.userId = id

                return true
            })
    },
}

module.exports = logic