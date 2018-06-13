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
        return Promise.resolve()
        .then(() => {
            if (typeof username !== 'string') throw Error('username is not a string')

            if (!(username = username.trim()).length) throw Error('username is empty or blank')

            if (typeof email !== 'string') throw Error('email is not a string')
            
            if (!(email = email.trim()).length) throw Error('email is empty or blank')
            
            if (typeof password !== 'string') throw Error('password is not a string')
            
            if ((password = password.trim()).length === 0) throw Error('password is empty or blank')
            
            if (typeof repeatPassword !== 'string') throw Error('repeatPassword is not a string')

            if ((repeatPassword = repeatPassword.trim()).length === 0) throw Error('repeatPassword is empty or blank')

            return clientApi.registerUser(username, email, password, repeatPassword)
                .then(() => true)
                
            })   
            .catch(err => {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                if (err.response) {
                    const { response: { data: { error: message } } } = err

                    throw Error(message)
                } else throw err
            })   
    },

    
    login(email, password) {
        return Promise.resolve()
        .then(() => {
            if (typeof email !== 'string') throw Error('email is not a string')

            if (!(email = email.trim()).length) throw Error('email is empty or blank')

            if (typeof password !== 'string') throw Error('password is not a string')

            if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

            return clientApi.authenticateUser(email, password)
            .then(id => {
                this.userId(id)
                return true
            })
            .catch(err => {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                if (err.response) {
                    const { response: { data: { error: message } } } = err

                    throw Error(message)
                } else throw err
            })
        })
    },
    
    retrieveUser() {
        return Promise.resolve()
            .then(() => {

                return clientApi.retrieveUser(this.userId())
                    .then(userData => userData)
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                            
                        } else throw err
                    })
            })
    },

    listRootCategories() {
        return clientApi.listRootCategories()
                .then(res => res)
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