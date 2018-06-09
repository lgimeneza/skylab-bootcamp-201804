const socialApi = require('social-api')

socialApi.url = 'http://localhost:5000/api'

const logic = {
    userId: 'NO-ID',

    registerUser(name, email, password) {
        return socialApi.registerUser(name, email, password)
    },

    login(email, password) {
        return socialApi.authenticateUser(email, password)
            .then(data => {
                
                this.userId = data.data.id
                localStorage.setItem('id-app', data.data.id)
                return data
            })
    },

    retrieveUser(){
        return socialApi.retrieveUser(localStorage.getItem('id-app'))
    },

    isLogged(){
        return localStorage.getItem("token") ? true : false
    },

    search(name,race,gender,city) {
        return socialApi.searchUser(name, race, gender,city)
    },

    logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('id-app')
    }
}

module.exports = logic
