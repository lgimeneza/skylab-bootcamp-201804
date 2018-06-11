const travelApi = require("api")

travelApi.url = "http://localhost:4000/api"

const logic = {
    userId: "NO-ID",
    username: "",
    visited : [],

    registerUser(username, password, location) {
        return travelApi.registerUser(username, password, location)
            .then((res) => {

                return res
            })
    },

    login(username, password, location) {
        return travelApi.authenticateUser(username, password, location)
            .then(id => {
                this.userId = id // va fuera
                // this.storage.set('id', id)
                console.log("LOG >> " + this.userId)
                return true
            })
    },

    loggedIn() { //era get loggedIn
        //const id = this.storage.get('id')
        const id = this.userId
        const token = travelApi.token

        return  id !== "NO-ID" &&  token !== "NO-TOKEN"
    },

    logout() {
        //this.storage.clear()
        this.userId = "NO-ID"
        return true
    },

    retrieveUser(id = this.userId) {
        //const id = this.storage.get('id')

        return travelApi.retrieveUser(id)
            .then((res) => {
                this.username = res.username
                console.log(id)
                console.log(res.countries)
                return res
            })
    },

    unregister(username, password) {
        //const id = this.storage.get('id')
        const id = this.userId
        return travelApi.unregisterUser(id, username, password)
            .then(() => this.logout())
            .then((res) => {

                return res
            })
    },

    world(id = this.userId) {
        //const id = this.storage.get('id')

        return travelApi.world(id)
            .then((res) => res)
    },

    retrieveCountry(countryName, userId = this.userId) {
        return travelApi.retrieveCountry(userId, countryName)
            .then((res) => res) 
    },
    
    addPhoto(countryName, url) {
        const id = this.userId
        return travelApi.addPhoto(id, countryName, url)
    }
}

module.exports = logic