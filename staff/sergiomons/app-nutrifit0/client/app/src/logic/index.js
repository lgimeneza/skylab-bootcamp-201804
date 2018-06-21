'use strict'

const clientApi = require('client-api')

//clientApi.url = 'https://gentle-forest-77809.herokuapp.com/api'
clientApi.url = 'http://localhost:5000/api'
// clientApi.url = 'http://192.168.0.27:5000/api'

const logic = {
    // userId: 'NO-ID',
    _cart: [],
    _statusOrder: 'unpaid',
    _dateOrder: '',

    userId(userId) {
        if (userId) {
            this._userId = userId

            return;
        }
        return this._userId
    },

    cart(cart) {
        if (typeof cart !== 'undefined') {
            this._cart = cart

            return
        }

        return this._cart
    },

    getDateOrder() {
        this._dateOrder = Date.now()
        return this._dateOrder.toString()
    },

    addProductToCart(productId, quantity = 1) {
        for (let i = 0; i < quantity; i++)
            this.cart().push(productId)

        this.cart(this.cart())
    },

    substractProductFromCart(productId, quantity) {
        for (let i = 0; i < quantity; i++) {
            const index = this.cart().findIndex(_productId => _productId === productId)
    
            if (index > -1) {
                this.cart().splice(index, 1)
    
                this.cart(this.cart())
            }
        }
    },

    removeProductFromCart(productId) {
        const updateCart = this.cart().filter(id => {
            return id !== productId
        })

        this.cart(updateCart)
    },

    listProductsFromCart() {
        return clientApi.listProductsByIds(this.cart())
            .then(products => {
                const quantities = this.cart().reduce((accum, productId) => {
                    if (accum[productId]) accum[productId]++
                    else accum[productId] = 1
                    return accum
                }, {})
                products.forEach(product => product.quantity = quantities[product.id])

                return products
            })
    },

    getCartSummary() {
        return this.listProductsFromCart()
            .then(products => {
                const total = products.reduce((accum, product) => accum + product.price * product.quantity, 0)

                return { products, total }
            })
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

    createOrder(deliveryAddress, paymentMethod) {
        return clientApi.createOrder(this.userId(), deliveryAddress, this.getDateOrder(), this.cart(), paymentMethod, this._statusOrder)
    },

    get loggedIn() {
        return !!this.userId()
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
        this.userId(null)

        clientApi.token(null)

        return true
    }
}

module.exports = logic