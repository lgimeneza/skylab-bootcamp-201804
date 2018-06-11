'use strict'

const shApi = require('api')

shApi.url = 'http://localhost:4000/api'

const logic = {
    userId: 'NO-ID',
    data: 'NO-DATA',
    users: 'NO-USERS',
    apartmentId: 'NO-ID',
    apartment: 'NO-APARTMENT',


    registerUser(name, surname, phone, dni, password, apartmentId) {
        
        return shApi.registerUser(name, surname, phone, dni, password, apartmentId)
            .then((res) => true)
    },

    authenticateUser(dni, password) {
        return shApi.authenticateUser(dni, password)
            .then(user => {
                localStorage.setItem('apartmentId', user.apartmentId)

                this.userId =user.id
                return this.userId
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
    listUsers(apartmentId) {
        return shApi.listUsers(apartmentId)
        .then(res => {
            this.users = res
            return this.users
        })
    },

    unregisterUser(id, dni, password) {
        return shApi.unregisterUser(id, dni, password)
            .then((res) => true)
    },

    registerApartment(name, address, phone){
        return shApi.registerApartment(name, address, phone)
        .then(apartId => {

            localStorage.setItem('apartmentId', apartId.data)
            
            this.apartmentId=apartId.data

            return this.apartmentId
        })
        .catch(({message}) => console.log(message))
    },

    listApartment(apartmentId) {
        return shApi.listApartment(apartmentId)
        .then(res => {
            console.log('app-client-res', res)
            this.apartment = res
            console.log('app-client-apartment', this.apartment)
            return this.apartment
        })
    },
}

module.exports = logic