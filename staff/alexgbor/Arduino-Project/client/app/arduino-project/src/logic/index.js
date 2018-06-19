'use strict'

const arduApi = require('api')

arduApi.url = 'http://192.168.1.35:5000/api'

const logic = {
    userId: 'NO-ID',

    registerUser(name, surname, email, password) {
        return arduApi.registerUser(name, surname, email, password)
            .then(data => data)
            .catch(err => err.message)
    },

    login(email, password) {
        return arduApi.authenticateUser(email, password)
            .then(data => {
                this.userId = data.data.id

                return data
            })
            .catch(err => err.message)

    },

    retrieveUser(userId, token) {
        arduApi.token = token
        return arduApi.retrieveUser(userId).then(data => data).catch(err => err.message)
    },

    updateUser(id, token, name, surname, password, email, picture_url) {
        arduApi.token = token
        return arduApi.updateUser(id, name, surname, email, password, picture_url, email, password)
            .then(data => data).catch(err => err.message)
    },

    unregisterUser(email, password, token, id) {
        arduApi.token = token

        return arduApi.unregisterUser(id, email, password)
            .then(data => data).catch(err => err.message)
    },

    addArduino(userId, ip, port) {
        return arduApi.addArduino(userId, ip, port)
            .then(data => data).catch(err => err.message)
    },

    listArduinos(userId, token) {
        arduApi.token = token
        return arduApi.listArduinos(userId)
            .then(data => data).catch(err => err.message)
    },

    removeArduino(userId, arduId, token) {
        arduApi.token = token
        return arduApi.removeArduino(userId, arduId)
    },

    addArduinoData(userId, arduId, value) {

        return arduApi.addArduinoData(userId, arduId, value)
    },

    retrieveArduinoData(userId, arduId, token) {
        arduApi.token = token
        return arduApi.retrieveArduinoData(userId, arduId, token)
            .then(data => data).catch(err => err.message)
    },

    controlArduino(userId, arduId, q) {
        return arduApi.controlArduino(userId, arduId, q)
    },

    removeArduinoData(userId, arduId) {
        return arduApi.removeArduinoData(userId, arduId)
            .then(data => data).catch(err => err.message)
    }
}

export default logic