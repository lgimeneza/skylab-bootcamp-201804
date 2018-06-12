'use strict'

const { models: { User, Order, Product, Category, Subcategory } } = require('data')

const logic = {

    /**
     * 
     * @param {string} username
     * @param {string} email 
     * @param {string} password
     * @param {string} repeatPassword 
     * 
     * @returns {Promise<boolean>}
     */

    registerUser(username, email, password, repeatPassword) {
        return Promise.resolve()
            .then(() => {

                if (typeof username !== 'string') throw Error('username is not a string')

                if (!(username = username.trim()).length) throw Error('username is empty or blank')

                if (typeof email !== 'string') throw Error('email is not a string')

                if (!(email = email.trim())) throw Error('email is empty or blank')

                if (typeof password !== 'string') throw Error('password is not a string')

                if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

                if (typeof repeatPassword !== 'string') throw Error('repeatPassword is not a string')

                if ((repeatPassword = repeatPassword.trim()).length === 0) throw Error('repeatPassword is empty or blank')

                if (password !== repeatPassword) throw Error('the fields password not match')


                return User.findOne({ username })
                    .then(user => {
                        if (user) throw Error(`user with username ${username} already exists`)

                        return User.findOne({ email })
                            .then(user => {
                                if (user) throw Error(`user with email ${email} already exists`)

                                return User.create({ username, email, password, repeatPassword })
                                    .then(() => true)
                            })
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
                if (!user) throw Error('Email o password incorrectos')

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

                return User.findById(id).select({ _id: 0, name: 1, surname: 1, username: 1, email: 1, address: 1, telephone: 1, phone: 1 })
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
    // updateUser(id, name, surname, email, newEmail, newPassword) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof id !== 'string') throw Error('user id is not a string')

    //             if (!(id = id.trim()).length) throw Error('user id is empty or blank')

    //             if (typeof name !== 'string') throw Error('user name is not a string')

    //             if (!(name = name.trim()).length) throw Error('user name is empty or blank')

    //             if (typeof surname !== 'string') throw Error('user surname is not a string')

    //             if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

    //             if (typeof email !== 'string') throw Error('user email is not a string')

    //             if (!(email = email.trim()).length) throw Error('user email is empty or blank')

    //             if (typeof password !== 'string') throw Error('user password is not a string')

    //             if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

    //             return User.findOne({ email, password })
    //         })
    //         .then(user => {
    //             if (!user) throw Error('wrong credentials')

    //             if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

    //             if (newEmail) {
    //                 return User.findOne({ email: newEmail })
    //                     .then(_user => {
    //                         if (_user && _user.id !== id) throw Error(`user with email ${newEmail} already exists`)

    //                         return user
    //                     })
    //             }

    //             return user
    //         })
    //         .then(user => {
    //             user.name = name
    //             user.surname = surname
    //             user.email = newEmail ? newEmail : email
    //             user.password = newPassword ? newPassword : password

    //             return user.save()
    //         })
    //         .then(() => true)
    // },

    // /**
    //  * 
    //  * @param {string} id 
    //  * @param {string} email 
    //  * @param {string} password 
    //  * 
    //  * @returns {Promise<boolean>}
    //  */
    // unregisterUser(id, email, password) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof id !== 'string') throw Error('user id is not a string')

    //             if (!(id = id.trim()).length) throw Error('user id is empty or blank')

    //             if (typeof email !== 'string') throw Error('user email is not a string')

    //             if (!(email = email.trim()).length) throw Error('user email is empty or blank')

    //             if (typeof password !== 'string') throw Error('user password is not a string')

    //             if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

    //             return User.findOne({ email, password })
    //         })
    //         .then(user => {
    //             if (!user) throw Error('wrong credentials')

    //             if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

    //             return user.remove()
    //         })
    //         .then(() => true)
    // },

     /**
     * Lists products
     * 
     * @param {String} categoryId The category id
     * 
     * @returns {Promise<[Product]>}
     */
    listParentsCategory() {
        return Promise.resolve()
            .then(() => {

                return Category.find({ parent: undefined})
                    .then(res => {
                        const categories = res.map(({ _id: id, name}) => ({ id, name }))
                        return categories
                    })
            })
    },

     /**
     * Lists products
     * 
     * @param {String} categoryId The category id
     * 
     * @returns {Promise<[Product]>}
     */
    listSubcategories(categoryId) {
        if (typeof categoryId !== 'string') throw Error('user categoryId is not a string')

        if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank')

        return Promise.resolve()
            .then(() => {

                return Category.find({ parent: categoryId.toString()})
                    .then(res => {
                        const categories = res.map(({ _id: id, name, parent}) => ({ id, name, parentId: parent ? parent.toString() : undefined }))
                        return categories
                    })
            })
    },

    /**
     * Lists products
     * 
     * @param {String} categoryId The category id
     * 
     * @returns {Promise<[Product]>}
     */
    listProductsByCategory(categoryId) {
        return Promise.resolve()
            .then(() => {

                if (typeof categoryId !== 'string') throw Error('user categoryId is not a string')

                if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank')

                return Product.find({ category: categoryId.toString()})
                    .then(res => {
                        const products = res.map(({ _id: id, name, description, image, price, discount, category }) => ({ id, name, description, image, price, discount, categoryId: category ? category.toString() : undefined }))
                        return products
                    })
            })
    },

    /**
     * Lists products
     * 
     * @param {String} categoryId The category id
     * 
     * @returns {Promise<[Product]>}
     */
    listProducts() {
        return Promise.resolve()
            .then(() => {

                return Product.find({})
                    .then(res => {
                        const products = res.map(({ _id: id, name, description, image, price, discount, category }) => ({ id, name, description, image, price, discount, categoryId: category ? category.toString() : undefined }))
                        return products
                    })
            })
    },

    /**
     * Lists products by a given category
     * 
     * @param {String} categoryId The category id
     * 
     * @returns {Promise<[Product]>}
     */
    // listProductsByCategory(categoryId) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof categoryId !== 'string') throw Error('user categoryId is not a string')

    //             if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank')

    //             return Category.find({ parent: categoryId.toString() })
    //                 .then(res => {
    //                     const ids = [categoryId]

    //                     return Promise.all(
    //                         res.map(({ _doc: category }) => {
    //                             ids.push(category._id.toString())

    //                             return Category.find({ parent: category._id })

    //                         })
    //                     )
    //                         .then(res => {

    //                             const withResults = res.filter(res => res.length)

    //                             withResults.forEach(res => {
    //                                 res.forEach(({ _doc: category }) => ids.push(category._id.toString()))
    //                             })

    //                             return Product.find({ category: { $in: ids } })
    //                                 .then(res => {

    //                                     const results = res.map(({_doc: product}) => product )

    //                                     return results                                      
    //                                 })
    //                         })
    //                     })
    //                 })              
    // },

}

module.exports = logic