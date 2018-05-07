'use strict'
let logic;

(function () {
    logic = {
        url: 'https://skylabcoders.herokuapp.com/api/',

        register(user, pass) {
            return action(user, pass, 'user/', this.url)
        },

        login(user, pass) {
            return action(user, pass, 'auth/', this.url)
        },

        retrieve(userID, token) {
            let dataPackage = {
                method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
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

    function action(user, pass, path, url) {
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

        return fetch(url + path, dataPackage)
            .then(res => res.json())
            .catch(err => err.message)
    }
})()

