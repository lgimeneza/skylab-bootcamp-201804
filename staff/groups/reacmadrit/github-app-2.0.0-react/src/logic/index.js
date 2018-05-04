const logic = {
    url: 'https://api.github.com',
    token: ' 810b1108767d4bb8f45bcdc37bfe067746a40bd6    ',

    headers() {
        return { headers: { Authorization: `Bearer ${this.token}` } }
    },

    searchUsers(query) {
        return fetch(`${this.url}/search/users?q=${query}&per_page=5`, this.headers())
            .then(resp => resp.json())
            .then(data => data.items)
            .catch(err => err.message)
    },

    retrieveUser(username) {
        return fetch(`${this.url}/users/${username}`, this.headers())
            .then(resp => resp.json())
            .catch(err => err.message)
    }
}

export default logic