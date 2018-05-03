const logic = {
    url: 'https://api.github.com',
    token: '3e5594751c8915f74e80d20f464fc82b5b9f490a',

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