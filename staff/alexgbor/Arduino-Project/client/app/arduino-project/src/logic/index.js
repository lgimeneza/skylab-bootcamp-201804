'use strict'

const arduApi = require('api')

arduApi.url = 'http://localhost:5000/api'

const logic = {
    userId: 'NO-ID',

    registerUser(name, surname, email, password) {
        return arduApi.registerUser(name, surname, email, password)
    },

    login(email, password) {
        return arduApi.authenticateUser(email, password)
            .then(data => {
                this.userId = data.data.id

                return data
            })
    },

    retrieveUser(userId, token) {
        arduApi.token = token
        return arduApi.retrieveUser(userId)
    },

    updateUser(id, token, name, surname, password, email) {
        arduApi.token = token
        return arduApi.updateUser(id, name, surname, email, password, email, password)
    },

    unregisterUser(email, password, token, id) {
        arduApi.token = token

        return arduApi.unregisterUser(id, email, password)
    },

    addArduino(userId, ip, port) {
        return arduApi.addArduino(userId, ip, port)
    },

    listArduinos(userId, token) {
        arduApi.token = token
        return arduApi.listArduinos(userId)
    },

    removeArduino(userId, arduId, token) {
        arduApi.token = token
        return arduApi.removeArduino(userId, arduId)
    },

    addArduinoData(userId,arduId,value) {

        return arduApi.addArduinoData(userId, arduId,value)
    },

    retrieveArduinoData(userId, arduId, token) {
        arduApi.token = token
        return arduApi.retrieveArduinoData(userId, arduId, token)
    },

    controlArduino(userId, arduId, q) {
        return arduApi.controlArduino(userId,arduId,q)
    }
}

export default logic