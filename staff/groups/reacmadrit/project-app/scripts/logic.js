'use strict'

const logic = {
    url: 'https://skylabcoders.herokuapp.com/api/',

    // _headers() {
    //     return {
    //          headers: { Authorization: `Bearer ${this.token}` } }
    // },



    register(user, pass) {
        let dataPackage = {
            method: 'POST',
            body: JSON.stringify({
                username: user,
                password: pass
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        if (typeof user !== 'string' || typeof pass !== 'string') {
            throw Error('input must be strings')
        }

        return fetch(this.url + 'user/', dataPackage)
            .then(res => res.json())
            .catch(err => err.message)
    },

    login (user,pass) {
        let dataPackage = {
            method: 'POST',
            body: JSON.stringify({
                username: user,
                password: pass
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        if (typeof user !== 'string' || typeof pass !== 'string') {
            throw Error('input must be strings')
        }

        return fetch(this.url + 'auth/', dataPackage)
            .then(res => res.json())
            .catch(err => err.message)
    },

    retrieve (userID,token) {
        let dataPackage = {
            method: 'GET',
            headers: new Headers({
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            })
        }
        if (typeof userID !== 'string' || typeof token !== 'string') {
            throw Error('input must be strings')
        }

        return fetch(this.url + `user/${userID}`, dataPackage)
            .then(res => res.json())
            .catch(err => err.message)
    }

}