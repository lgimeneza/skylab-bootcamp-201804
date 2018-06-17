'use strict'

const { mongoose, models: { User, Category, Product, Order } } = require('data')

const logic = {

    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} address
     * @param {string} email
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */

    registerUser(name, surname, address, email, password) {
        return Promise.resolve()
            .then(() => {

                if (typeof name !== 'string') throw Error('name is not a string')

                if (!(name = name.trim()).length) throw Error('name is empty or blank')

                if (typeof surname !== 'string') throw Error('surname is not a string')

                if (!(surname = surname.trim())) throw Error('surname is empty or blank')

                if (typeof address !== 'string') throw Error('address is not a string')

                if ((address = address.trim()).length === 0) throw Error('address is empty or blank')

                if (typeof email !== 'string') throw Error('email is not a string')

                if ((email = email.trim()).length === 0) throw Error('email is empty or blank')

                if (typeof password !== 'string') throw Error('password is not a string')

                if ((password = password.trim()).length === 0) throw Error('password is empty or blank')


                return User.findOne({ email })
                    .then(user => {
                        if (user) throw Error(`user with email ${email} already exists`)

                        return User.create({ name, surname, address, email, password })
                            .then(() => true)
                    })
            })
    },

    /**
     * 
     * @param {string} email
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
    authenticateUser(email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user.id
            })
    },

    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<User>} 
     */
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return User.findById(id).select({ _id: 0, name: 1, surname: 1, address: 1, email: 1, phone: 1, orders: 1 })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return user
            })
    },

    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
    updateUser(id, name, surname, phone, address, email, password, newEmail, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

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

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                if (newEmail) {
                    return User.findOne({ email: newEmail })
                        .then(_user => {
                            if (_user && _user.id !== id) throw Error(`user with email ${newEmail} already exists`)

                            return user
                        })
                }

                return user
            })
            .then(user => {
                user.name = name
                user.surname = surname
                user.phone = phone
                user.address = address
                user.email = newEmail ? newEmail : email
                user.password = newPassword ? newPassword : password

                return user.save()
            })
            .then(() => true)
    },

    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterUser(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user.remove()
            })
            .then(() => true)
    },

    /**
     * @param {string} userId
     * 
     * @returns {Promise<[Category]>}
     */
    listCategories() {
        return Promise.resolve()
            .then(() => {
                return Category.find({})
                    .then(category => {
                        if (!category) throw Error(`no categories where found`)

                        return category.map(category => category)
                    })
            })
    },

    /**
     * @param {string} userId
     * 
     * @returns {Promise<[Product]>}
     */
    listProducts(category) {
        return Promise.resolve()
            .then(() => {

                return Product.find({ category })
                    .then((products) => {
                        if (!products) throw Error(`no products where found`)

                        return products
                    })
            })
    },

    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<[Product]>} 
     */
    retrieveProduct(productId) {
        return Promise.resolve()
            .then(() => {
                if (typeof productId !== 'string') throw Error('user productId is not a string')

                if (!(productId = productId.trim()).length) throw Error('user productId is empty or blank')

                return Product.findById(productId)
            })
            .then(product => {
                if (!product) throw Error(`no product found with id ${productId}`)

                return product
            })
    },



    /**
     * @param {string} userId
     * 
     * @returns {Promise<[Product]>}
     */
    listAllProducts() {
        return Promise.resolve()
            .then(() => {
                return Product.find()
                    .then(products => {
                        if (!products) throw Error(`no categories where found`)

                        return products
                    })
            })
    },

    /**
      * @param {array} ids
      * 
      * @returns {Promise<[Product]>}
      */
    listProductsByIds(ids) {
        const idsArray = ids.split(',')

        return Promise.resolve()
            .then(() => {
                return Product.find({
                    _id: { $in: idsArray }
                })
                    .then(products => {
                        if (!products) throw Error(`no categories where found`)

                        return products
                    })
            })
    },

    /**
    * 
    * @param {string} name 
    * @param {string} surname 
    * @param {string} address
    * @param {string} email
    * @param {string} password 
    * 
    * @returns {Promise<boolean>}
    */
    createOrder(paymentMethod, status, products, userId, orderAdress, date) {
        return Promise.resolve()
            .then(() => {
                if (typeof paymentMethod !== 'string') throw Error('paymentMethod is not a string')

                if (!(paymentMethod = paymentMethod.trim())) throw Error('paymentMethod is empty or blank')

                if (typeof status !== 'string') throw Error('status is not a string')

                if ((status = status.trim()).length === 0) throw Error('status is empty or blank')

                if (!Array.isArray(products)) throw Error('products should be an array')

                if (!products.length) throw Error('no products where found')

                if (orderAdress !== undefined) {
                    if (typeof orderAdress !== 'string') throw Error('orderAdress is not a string')

                    if ((orderAdress = orderAdress.trim()).length === 0) throw Error('orderAdress is empty or blank')
                }

                if (date !== undefined) {
                    if (typeof date !== 'date') throw Error('date is not a date')

                    if (!(date = date.trim()).length) throw Error('date is empty or blank')
                }

                return Order.create({ paymentMethod, status, products, userId, orderAdress, date })
                    .then(order => {
                        // return User.findById(userId)
                        //     .then(user => {
                        //         user.orders.push(order)
                        //         user.save()
                        //     })
                        return User.findByIdAndUpdate(userId, {$push: { orders: order } })
                    })

            })
    }
}

module.exports = logic