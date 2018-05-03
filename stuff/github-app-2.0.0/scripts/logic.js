'use strict'

const logic = {
    url: 'https://api.github.com',

    searchUsers(query, callback) {
        fetch(`${this.url}/search/users?q=${query}`)
            .then(resp => resp.json())
            .then(data => callback(undefined, data.items))
            .catch(err => callback(err))
    },

    retrieveUser(username, callback) {
        fetch(`${this.url}/users/${username}`)
            .then(resp => resp.json())
            .then(data => callback(undefined, data))
            .catch(err => callback(err))
    }
}