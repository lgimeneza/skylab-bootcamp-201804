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
    }
}

export default logic