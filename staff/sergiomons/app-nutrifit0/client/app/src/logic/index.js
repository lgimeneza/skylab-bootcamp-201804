'use strict'

const clientApi = require('client-api')

clientApi.url = 'http://localhost:5000/api'

const logic = {
    // userId: 'NO-ID',
    _cart: [],    
    _statusOrder: 'unpaid',               

    userId(userId) {
        if (userId) {
            this._userId = userId

            return;
        }
            return this._userId
    },

    cart(cart) {
        this._cart = cart
    },

    

    addProductToCart(productId) {
        this._cart.push(productId)

        this.cart(this._cart)
    },

    removeProductFromCart(productId) {
        this._cart = this._cart.filter(id => {
            return id !== productId
        }) 
        this.cart(this._cart)
    },

    listProductsByIds() {
        return clientApi.listProductsByIds(this._cart)
    },

    listCartById(callback) {
        if (logic._cart && logic._cart.length > 0 ) {

            clientApi.listProductsByIds(this._cart)
                .then(products => callback(products))
        } else {
            callback([]);
        }

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

    listAllCategories() {
        return clientApi.listAllCategories()
                .then(res => res)
    },


    listRootCategories() {
        return clientApi.listRootCategories()
                .then(res => res)
    },

    listSubcategories(categoryId) {
        return clientApi.listSubcategories(categoryId)
                .then(categories => categories)
    },

    listProductsByCategory(categoryId) {
        return clientApi.listProductsByCategory(categoryId)
                .then(products => products)
    },

    productDetails(productId) {
        return clientApi.productDetails(productId)
                .then(product => product)
    },

    listProducts() {
        return clientApi.listProducts()
                .then(products => products)
    },

    createOrder(deliveryAddress, date, products, paymentMethod) {
        return clientApi.createOrder(this.userId(), deliveryAddress, date, products, paymentMethod, this._statusOrder)
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