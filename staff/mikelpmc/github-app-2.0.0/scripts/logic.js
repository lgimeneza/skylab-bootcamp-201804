'use strict';

const logic = {
    url: 'https://api.github.com',
    token: '',

    headers() {
        return { headers: { Authorization: `Bearer ${this.token}` } };
    },

    searchUsers(query) {
        const promise = fetch(
            `${this.url}/search/users?q=${query}`,
            this.headers()
        )
            .then(resp => resp.json())
            .then(data => data.items)
            .catch(err => err);

        return promise;
    },

    retrieveUser(username) {
        return fetch(`${this.url}/users/${username}`, this.headers())
            .then(resp => resp.json())
            .catch(err => err);
    }
};
