const singingLabApi = require('api')

singingLabApi.url = 'http://localhost:4000/api'

const logic = {
    // userId: 'NO-ID',

    userId(userId) {
        if (userId) {
            this._userId = userId

            return
        }

        return this._userId
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

    updateUser(id, name, surname, phone, address, password, newPhone, newPassword) {
        return singingLabApi.updateUser(id, name, surname, phone, address, password, newPhone, newPassword)
            .then(res => {
                return true
            })

    },

    unregisterUser(id, dni, password) {
        return singingLabApi.unregisterUser(id, dni, password)
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

    retrieveProduct(productId){
        return singingLabApi.retrieveProduct(productId)
            .then(product => product)
    },

    listAllProducts(){
        return singingLabApi.listAllProducts()
            .then(products => products)
    }


}

module.exports = logic
//export default logic