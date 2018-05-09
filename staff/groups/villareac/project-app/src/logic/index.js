


const logic = {

    url: 'https://skylabcoders.herokuapp.com',
    token: '',
    id: '',

    headers() {
        return {
            headers: { Authorization: `Bearer ${this.token}` }
        }
    },

    register(formData) {
        return fetch(`${this.url}/api/user`, { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(formData) })
            .then(data => data.json())
            .then(data => data)
    },

    login(formData) {
        return fetch(`${this.url}/api/auth`, { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(formData) })
            .then(data => data.json())
            .then(data => data)

    },

    retrieve() {
        return fetch(`${this.url}/api/user/${this.id}`, { headers: { 'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json' } })
            .then(data => data.json())
            .then(data => data)

    },

    update(formData) {
        return fetch(`${this.url}/api/user/${this.id}`, { headers: { 'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json' }, method: 'PUT', body: JSON.stringify(formData) })
            .then(data => data.json())
            .then(data => data)

    },

    unregister(formData) {
        return fetch(`${this.url}/api/user/${this.id}`, { headers: { 'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json' }, method: 'DELETE', body: JSON.stringify(formData) })
            .then(data => data.json())
            .then(data => data)

    }

}

// UNEXPECTED TOKEN EXPORT --> comment the following line to make jasmine tests work 
export default logic