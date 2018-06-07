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

                debugger
                return User.findOne({ dni })
                    .then(user => {
                        if (user) throw Error(`user with dni ${dni} already exists`)
                        debugger
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
                
                return User.findOne({ dni,password })
                .then(user => {
                    //console.log(user)
                    if (!user) throw Error('wrong credentials')
                
                return user.id
            })
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

                return User.findById(id).select({ _id: 0, name: 1, surname: 1, phone:1, dni: 1 })
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
     * @param {string} phone
     * @param {string} dni
     * @param {string} password 
     * @param {string} newPhone
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
    updateUser(id, name, surname, phone, dni, password, newPhone, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof surname !== 'string') throw Error('user surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

                if (typeof phone !== 'string') throw Error('user phone is not a string')

                if (!(phone = phone.trim()).length) throw Error('user phone is empty or blank')

                if (typeof dni !== 'string') throw Error('user dni is not a string')

                if (!(dni = dni.trim()).length) throw Error('user dni is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ dni, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user
            })
            .then(user => {
                user.name = name
                user.surname = surname
                user.phone = newPhone ? newPhone : phone
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
    unregisterUser(id, dni, password) {
        return Promise.resolve()
            .then(() => {

                

                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof dni !== 'string') throw Error('user dni is not a string')

                if (!(dni = dni.trim()).length) throw Error('user dni is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ dni, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user.remove()
            })
            .then(() => true)
    },
   

}

module.exports = logic