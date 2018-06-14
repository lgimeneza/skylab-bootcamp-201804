const singingLabApi = require('api')

singingLabApi.url = 'http://localhost:4000/api'

const logic = {
    _userId: 'NO-USER',

    _cart: [],

    userId(userId) {
        if (userId) {
            this._userId = userId

            return
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

    listProductsFromCart() {
        return singingLabApi.listProducts(this.cart())
    },

    registerUser(name, surname, address, email, password) {

        return singingLabApi.registerUser(name, surname, address, email, password)
    },

    login(email, password) {
        return singingLabApi.authenticateUser(email, password)
            .then(id => {
                this.userId(id)

                return true
            })
    },

    retrieveUser() {
        return singingLabApi.retrieveUser(this.userId())
            .then(res => res)
    },

    updateUser(name, surname, phone, address, email, newEmail, password, newPassword) {

        if (typeof name !== 'string') throw Error('user name is not a string')

        if (!(name = name.trim()).length) throw Error('user name is empty or blank')

        if (typeof surname !== 'string') throw Error('user surname is not a string')

        if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

        if (typeof phone !== 'string') throw Error('user phone is not a string')

        if ((phone = phone.trim()).length === 0) throw Error('user phone is empty or blank')

        if (typeof address !== 'string') throw Error('user address is not a string')

        if ((address = address.trim()).length === 0) throw Error('user address is empty or blank')

        if (typeof email !== 'string') throw Error('user email is not a string')

        if (!(email = email.trim()).length) throw Error('user email is empty or blank')

        if (typeof password !== 'string') throw Error('user password is not a string')

        if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

        return singingLabApi.updateUser(this.userId(), name, surname, phone, address, email, newEmail, password, newPassword)
            .then(res => {
                return true
            })
    },

    unregisterUser(dni, password) {
        return singingLabApi.unregisterUser(this.userId(), dni, password)
            .then(true)
    },

    listCategories() {
        return singingLabApi.listCategories()
            .then(categories => categories)
    },

    listProducts(category) {
        return singingLabApi.listProducts(category)
            .then(products => {
                return products
            })
    },

    retrieveProduct(productId) {
        return singingLabApi.retrieveProduct(productId)
            .then(product => product)
    },

    listAllProducts() {
        return singingLabApi.listAllProducts()
            .then(products => products)
    }


}

module.exports = logic
//export default logic