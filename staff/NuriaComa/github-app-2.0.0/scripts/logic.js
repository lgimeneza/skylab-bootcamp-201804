'use strict'

const logic = {
    url: 'https://api.github.com',

    searchUsers(query) {
        fetch(`${this.url}/search/users?q=${query}`)
            .then(resp => resp.json())
            .then(data => {(data.items)})
            .catch(err => (err))
    },

    retrieveUser(username) {
        fetch(`${this.url}/users/${username}`)
            .then(resp => resp.json())
            .then(data => (undefined))
            .catch(err => (err))
    }
}