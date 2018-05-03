'use strict'

const logic = {
    url: 'https://api.github.com',
    token: 'TOKEN',

    _headers() {
        return { headers: { Authorization: `Bearer ${this.token}` } }
    },

    searchUsers(query) {
        return fetch(`${this.url}/search/users?q=${query}`, this._headers())
            .then(resp => resp.json())
            .then(data => data.items)
    },

    retrieveUser(username) {
        return fetch(`${this.url}/users/${username}`, this._headers())
            .then(resp => resp.json())
            .then(data => data.login ? data : undefined)
    }
}