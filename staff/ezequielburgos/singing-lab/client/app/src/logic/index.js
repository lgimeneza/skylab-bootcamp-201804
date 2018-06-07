const singingLabApi = require('api')

singingLabApi.url = 'http://localhost:5000/api'

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

    // updateUser(id, name, surname, phone, dni, password, newPhone, newPassword) {
    //     return (id, name, surname, phone, dni, password, newPhone, newPassword)

    // },

    // unregisterUser(id, dni, password) {
    //     return shApi.unregisterUser(id, dni, password)
    // }
}

module.exports = logic
//export default logic