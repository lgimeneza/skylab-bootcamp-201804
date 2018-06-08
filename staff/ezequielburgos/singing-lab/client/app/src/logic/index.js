const singingLabApi = require('api')

singingLabApi.url = 'http://localhost:4000/api'

const logic = {
    userId: 'NO-ID',

    registerUser(name, surname, address, email, password) {

        return singingLabApi.registerUser(name, surname, address, email, password)
    },

    login(email, password) {
        return singingLabApi.authenticateUser(email, password)
            .then(id => {
                this.userId = id

                return true
            })
    },

    retrieveUser(id) {
        return singingLabApi.retrieveUser(id)
            .then(res => {

                this.data = res.data

                return true
            })
    },

    updateUser(id, name, surname, phone, address, password, newPhone, newPassword) {
        return singingLabApi.updateUser(id, name, surname, phone, address, password, newPhone, newPassword)
            .then(res => {
                return true
            })

    },

    unregisterUser(id, dni, password) {
        return singingLabApi.unregisterUser(id, dni, password)
            .then(true)
    }
}

module.exports = logic
//export default logic