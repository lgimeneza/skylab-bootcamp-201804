'use strict'

const logic = {
    url: 'https://skylabcoders.herokuapp.com/api',

    _call(path, method, body, withToken) {
        const headers = {
            'content-type': 'application/json'
        }

        if (withToken) headers.authorization = `bearer ${this.token}`

        return fetch(`${this.url}/${path}`, {
            method,
            headers,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
    },

    register(user) {
        return this._call('/user', 'post', user)
            .then(({ status, data, error }) => {
                if (status === 'OK') return data.id

                throw Error(error)
            })
    },

    login(user) {
        return this._call('/auth', 'post', user, true)
            .then(({ status, data, error }) => {
                if (status === 'OK') return data

                throw Error(error)
            })
    },

    unregister(user) {
        return this._call(`/user/${user.id}`, 'delete', user, true)
            .then(({ status, data, error }) => {
                if (status === 'OK') return true

                throw Error(error)
            })
    }
}