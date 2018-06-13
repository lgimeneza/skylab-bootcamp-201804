'use strict'
const axios = require('axios')

const clientApi = {
    url: 'NO-URL',

    // token: 'NO-TOKEN',

    token(token) {
        if (token) {
            this._token = token

            return;
        }
            return this._token
    },

    /**
     * 
     * @param {string} username
     * @param {string} email 
     * @param {string} password 
     * @param {string} reapeatEmail 
     * 
     * @returns {Promise<boolean>}
     */
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


                return axios.post(`${this.url}/users`, { username, email, password, repeatPassword })
                    .then(({ status, data }) => {
                        if (status !== 201 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

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
                if (typeof email !== 'string') throw Error('email is not a string')

                if (!(email = email.trim()).length) throw Error('email is empty or blank')

                if (typeof password !== 'string') throw Error('password is not a string')

                if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

                return axios.post(`${this.url}/auth`, { email, password })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)
                       
                        const { data: { id, token } } = data
                        
                        this.token(token)

                        return id
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

    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<User>} 
     */
    retrieveUser(userId) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('userId is not a string')

                if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

                return axios.get(`${this.url}/users/${userId}`, { headers: { authorization: `Bearer ${this.token()}` } })
                    .then(({ status, data }) => {

                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
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
    // updateUser(id, name, surname, email, password, newEmail, newPassword) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof id !== 'string') throw Error('id is not a string')

    //             if (!(id = id.trim()).length) throw Error('id is empty or blank')

    //             if (typeof name !== 'string') throw Error('name is not a string')

    //             if (!(name = name.trim()).length) throw Error('name is empty or blank')

    //             if (typeof surname !== 'string') throw Error('surname is not a string')

    //             if ((surname = surname.trim()).length === 0) throw Error('surname is empty or blank')

    //             if (typeof email !== 'string') throw Error('email is not a string')

    //             if (!(email = email.trim()).length) throw Error('email is empty or blank')

    //             if (typeof password !== 'string') throw Error('password is not a string')

    //             if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

    //             return axios.patch(`${this.url}/users/${id}`, { name, surname, email, password, newEmail, newPassword }, { headers: { authorization: `Bearer ${this.token()}` } })
    //                 .then(({ status, data }) => {
    //                     if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

    //                     return true
    //                 })
    //                 .catch(err => {
    //                     if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

    //                     if (err.response) {
    //                         const { response: { data: { error: message } } } = err

    //                         throw Error(message)
    //                     } else throw err
    //                 })
    //         })
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
    //             if (typeof id !== 'string') throw Error('id is not a string')

    //             if (!(id = id.trim()).length) throw Error('id is empty or blank')

    //             if (typeof email !== 'string') throw Error('email is not a string')

    //             if (!(email = email.trim()).length) throw Error('email is empty or blank')

    //             if (typeof password !== 'string') throw Error('password is not a string')

    //             if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

    //             return axios.delete(`${this.url}/users/${id}`, { headers: { authorization: `Bearer ${this.token}` }, data: { email, password } })
    //                 .then(({ status, data }) => {
    //                     if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

    //                     return true
    //                 })
    //                 .catch(err => {
    //                     if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

    //                     if (err.response) {
    //                         const { response: { data: { error: message } } } = err

    //                         throw Error(message)
    //                     } else throw err
    //                 })
    //         })
    // },

     /**
     * 
     * @returns {Promise<[Object]>}
     */

    listRootCategories() {
        return Promise.resolve()
            .then(() => {
                return axios.get(`${this.url}/categories/root`)
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
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

      /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @returns {Promise<string>}
     */

    listSubcategories(categoryId) {
        return Promise.resolve()
            .then(() => {

                if (typeof categoryId !== 'string') throw Error('user categoryId is not a string')
                if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank')
               
                return axios.get(`${this.url}/subcategories/${categoryId}`)
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
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

      /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @returns {Promise<string>}
     */

    listProductsByCategory(categoryId) {
        return Promise.resolve()
            .then(() => {

                if (typeof categoryId !== 'string') throw Error('user categoryId is not a string')
                if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank')
               
                return axios.get(`${this.url}/productsByCategory/${categoryId}`)
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
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

    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @returns {Promise<string>}
     */
    listProducts() {
        return Promise.resolve()
            .then(() => {

                return axios.get(`${this.url}/products`)
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
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
   
    /**
     * 
     * @param {string} userId
     * @param {string} noteId 
     *
     * @returns {Promise<boolean>}
     */
    // removeNote(userId, noteId) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('id is not a string')

    //             if (!(userId = userId.trim()).length) throw Error('id is empty or blank')

    //             if (typeof noteId !== 'string') throw Error('note id is not a string')

    //             if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

    //             return axios.delete(`${this.url}/users/${userId}/notes/${noteId}`, { headers: { authorization: `Bearer ${this.token()}` } })
    //                 .then(({ status, data }) => {
    //                     if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

    //                     return true
    //                 })
    //                 .catch(err => {
    //                     debugger
    //                     if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

    //                     if (err.response) {
    //                         const { response: { data: { error: message } } } = err

    //                         throw Error(message)
    //                     } else throw err
    //                 })
    //         })
    // },

    // /**
    //  * 
    //  * @param {string} userId
    //  * @param {string} text 
    //  * 
    //  * @returns {Promise<[Note]>}
    //  */
    // findNotes(userId, text) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('id is not a string')

    //             if (!(userId = userId.trim()).length) throw Error('id is empty or blank')

    //             if (typeof text !== 'string') throw Error('text is not a string')

    //             if (!text.length) throw Error('text is empty')

    //             return axios.get(`${this.url}/users/${userId}/notes?q=${text}`, { headers: { authorization: `Bearer ${this.token()}` } })
    //                 .then(({ status, data }) => {
    //                     if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

    //                     return data.data
    //                 })
    //                 .catch(err => {
    //                     if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

    //                     if (err.response) {
    //                         const { response: { data: { error: message } } } = err

    //                         throw Error(message)
    //                     } else throw err
    //                 })
    //         })
    // }
}

module.exports = clientApi