'use strict'

const clientApi = require('client-api')

clientApi.url = 'http://localhost:5000/api'

const logic = {
    // userId: 'NO-ID',

    userId(userId) {
        if (userId) {
            this._userId = userId

            return;
        }
            return this._userId
    },

    registerUser(username, email, password, repeatPassword) {   
        return clientApi.registerUser(username, email, password, repeatPassword)
    },

    
    login(email, password) {
        return clientApi.authenticateUser(email, password)
        .then(id => {
            this.userId(id)
            return true
        })
    },
    
    retrieveUser() {
        return clientApi.retrieveUser(this.userId())
                .then(userData => userData)
    },

    listParentsCategory() {
        return clientApi.listParentsCategory()
                .then(categories => categories)
    },

    listSubcategories(categoryId) {
        return clientApi.listSubcategories()
                .then(categories => categories)
    },

    listProductsByCategory(categoryId) {
        return clientApi.listProductsByCategory()
                .then(products => products)
    },

    listProducts() {
        return clientApi.listProducts()
                .then(products => products)
    },

    get loggedIn() {
        if (sessionStorage.getItem('token')) return true

        return false
    },

    /**
 * Logs a user out
 * 
 * @param {string} username - The user's username
 * @param {string} password - The user's password
 * 
 * @returns {boolean} - Confirms log-out 
 */
    logout() {
        sessionStorage.clear()

        return true
    }

}

module.exports = logic