'use strict'

const { models: { User, Apartment } } = require('data')

const logic = {

    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} phone
     * @param {string} dni
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */

    registerUser(name, surname, phone, dni, password) {
        return Promise.resolve()
            .then(() => {

                if (typeof name !== 'string') throw Error('name is not a string')

                if (!(name = name.trim()).length) throw Error('name is empty or blank')

                if (typeof surname !== 'string') throw Error('surname is not a string')

                if (!(surname = surname.trim())) throw Error('surname is empty or blank')

                if (typeof phone !== 'string') throw Error('phone is not a string')

                if ((phone = phone.trim()).length === 0) throw Error('phone is empty or blank')

                if (typeof dni !== 'string') throw Error('dni is not a string')

                if ((dni = dni.trim()).length === 0) throw Error('dni is empty or blank')

                if (typeof password !== 'string') throw Error('password is not a string')

                if ((password = password.trim()).length === 0) throw Error('password is empty or blank')


                return User.findOne({ dni })
                    .then(user => {
                        if (user) throw Error(`user with dni ${dni} already exists`)

                        return User.create({ name, surname, phone, dni, password })
                        .then(() => true)
                })
            })
    },
    
    /**
     * 
     * @param {string} dni
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
    authenticateUser(dni, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof dni !== 'string') throw Error('user dni is not a string')

                if (!(dni = dni.trim()).length) throw Error('user dni is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ dni, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user.id
            })
    },
















}

module.exports = logic