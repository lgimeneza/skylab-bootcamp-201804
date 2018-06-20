const singingLabApi = require('api')

singingLabApi.url = 'http://localhost:4000/api'

const logic = {
    _userId: null,

    _date: 'no-date',

    _orderStatus: 'unpaid',

    _cart: [],

    userId(userId) {
        if (userId !== undefined) {
            this._userId = userId

            return
        }

        return this._userId
    },

    cart(cart) {
        if (cart) {
            this._cart = cart

            return
        }

        return this._cart
    },

    addProductToCart(productId) {
        return Promise.resolve()
            .then(() => {
                const any = this.cart().some(_productId => _productId === productId)

                if (any) throw Error('product already in cart')

                this.cart().push(productId)

                this.cart(this.cart())

                return true
            })
    },

    removeProductFromCart(productId) {
       return this.cart(this.cart().filter(id => {
            return id !== productId
        }))
    },

    listProductsByIds() {

        return singingLabApi.listProductsByIds(this.cart())
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

    get loggedIn() {
        return !!this.userId()
    },

    logout() {
        this.userId(null)
    },

    retrieveUser() {
        return singingLabApi.retrieveUser(this.userId())
            .then(res => res)
    },

    updateUser(name, surname, phone, address, email, password, newEmail, newPassword) {

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

        return singingLabApi.updateUser(this.userId(), name, surname, phone, address, email, password, newEmail, newPassword)
            .then(res => {
                return true
            })
    },

    unregisterUser(email, password) {
        return singingLabApi.unregisterUser(this.userId(), email, password)
            .then(() => {
                this.logout()

                return true
            })
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
    },

    createOrder(paymentMethod, products, orderAdress) {
        if (this._orderStatus !== 'unpaid') {
            // this._ date = date().getHours()
        }

        return singingLabApi.createOrder(paymentMethod, this._orderStatus, products, this.userId(), orderAdress, this._date)
    }
}

module.exports = logic
//export default logic