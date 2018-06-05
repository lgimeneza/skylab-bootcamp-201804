'use strict'

const { mongoose, models: { User, Category, Product, Order } } = require('data')

const logic = {

    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} phone
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
     * @param {string} userId
     * 
     * @returns {Promise<[Note]>}
     */
    listCategories() {
        return Promise.resolve()
            .then(() => {

                return Category.find({})
                    .then(category => {
                        if (!category) throw Error(`no categories where found`)

                        // return category.map(({ id, text }) => ({ id, text }))
                        return category.map(category => category)
                    })
            })
    },

    /**
     * @param {string} userId
     * 
     * @returns {Promise<[Note]>}
     */
    listProducts(userId) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                return User.findById(userId)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${userId}`)

                        return user.notes.map(({ id, text }) => ({ id, text }))
                    })
            })
    }









}

module.exports = logic