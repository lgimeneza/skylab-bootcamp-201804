'use strict'

const logic = {
    url: 'https://api.github.com',
    token: 'TOKEN',

    headers() {
        return { headers: { Authorization: `Bearer ${this.token}`}}
    },

    searchUsers(query, callback) {
        fetch(`${this.url}/search/users?q=${query}`, this.headers())
            .then(resp => resp.json())
            .then(data => callback(undefined, data.items))
            .catch(err => callback(err))
    },

    retrieveUser(username, callback) {
        fetch(`${this.url}/users/${username}`, this.headers())
            .then(resp => resp.json())
            .then(data => callback(undefined, data))
            .catch(err => callback(err))
    }
}