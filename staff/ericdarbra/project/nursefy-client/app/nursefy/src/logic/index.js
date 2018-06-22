'use strict'

const apiNurse = require('api')
apiNurse.url = 'http://192.168.0.38:5000/api'

const logic = {

    nurseId: '',

    init() {
        apiNurse.token = token => {
            if (token) {
                localStorage.setItem('token', token)

                return
            }

            return localStorage.getItem('token')
        }
    },

    registerNurse(name, surname, email, nursecard, password) {
        return apiNurse.registerNurse(name, surname, email, nursecard, password)
            .then(() => {
                return true
            })
    },
    authenticateNurse(nursecard, password) {
        return apiNurse.authenticateNurse(nursecard, password)
            .then(id => {

                localStorage.setItem('id', id)

                return true
            })
    },
    isLogged() {
        if (localStorage.getItem('token')) {
            return true
        }
        else {
            return false
        }
    },
    listUsers() {
        return apiNurse.listUsers()
            .then(list => {
                console.log(list.data)
                return list.data
            })
    },
    retrieveNurse() {
        const id = localStorage.getItem('id')

        return apiNurse.retrieveNurse(id)
            .then(info => {
                console.log(info)
                return info
            })
    },
    retrieveNurseAdmin(id) {
        console.log(id)
        return apiNurse.retrieveNurseAdmin(id)
            .then(info => {
                console.log(info)
                return info
            })
    },
    addEvent(id, event) {
        return apiNurse.addEvent(id, event)
            .then(() => {

                return true
            })
    },
    changeDisp(disp) {
        const id = localStorage.getItem('id')
        return apiNurse.changeDisp(id, disp)
            .then(() => {
                return true
            })
    }

}

module.exports = logic