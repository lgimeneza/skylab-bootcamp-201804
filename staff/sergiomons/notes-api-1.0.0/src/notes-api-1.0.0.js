'use strict'

const axios = require('axios')

const notesApi = {
    url: 'NOWHERE',

    registerUser(name, surname, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof surname !== 'string') throw Error('user surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return axios.post(`${this.url}/users`, { name, surname, email, password })
                    .then(({ status, data }) => status === 201 && data.status === 'OK')
                    .catch(({ response: { data: { error } } }) => error)
            })
    },

    authenticateUser(email, password) {
        return Promise.resolve()
                .then(()=> {

                    if (typeof email !== 'string') throw Error('user email is not a string')

                    if (!(email = email.trim()).length) throw Error('user email is empty or blank')
    
                    if (typeof password !== 'string') throw Error('user password is not a string')
    
                    if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                    return axios.post(`${this.url}/auth`, { email, password })
                        .then(({status, data}) => {
                            if (status === 200 && data.status === 'OK') {
                            
                                return data.data.id
                            }
                         })
                         .catch(({response: { data: {error} }}) => error)
        })
    },

    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return axios.get((`${this.url}/users/${id}`))
                        .then(({status, data}) => {
                            if (status === 200 && data.status === 'OK') {
                                
                                return data
                            }
                         })
                         .catch(({response: { data: {error} }}) => error)
        })
    }
}

module.exports = notesApi