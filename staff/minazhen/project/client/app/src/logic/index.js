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
            .then(userId => {
                this.userId = userId // va fuera
                // this.storage.set('id', id)
                return true
            })
    },

    loggedIn() { //era get loggedIn
        //const id = this.storage.get('id')
        const userId = this.userId
        const token = travelApi.token

        return  userId !== "NO-ID" &&  token !== "NO-TOKEN"
    },

    logout() {
        //this.storage.clear()
        this.userId = "NO-ID"
        return true
    },

    retrieveUser(userId = this.userId) {
        //const id = this.storage.get('id')

        return travelApi.retrieveUser(userId)
            .then((res) => {
                this.username = res.username
                return res
            })
    },

    unregister(username, password) {
        //const id = this.storage.get('id')
        const userId = this.userId
        return travelApi.unregisterUser(userId, username, password)
            .then(() => this.logout())
            .then((res) => {

                return res
            })
    },

    world(userId = this.userId) {
        //const id = this.storage.get('id')

        return travelApi.world(userId)
            .then((res) => res)
    },

    retrieveCountry(countryName, userId = this.userId) {
        return travelApi.retrieveCountry(userId, countryName)
            .then((res) => res) 
    },
    
    addPhoto(countryName, url) {
        const userId = this.userId
        return travelApi.addPhoto(userId, countryName, url)
    },

    retrievePhoto(countryName, photoId, userId = this.userId) {
        return travelApi.retrievePhoto(userId, countryName, photoId)
    },

    updatePhoto(countryName, photoId, newUrl) {
        const userId = this.userId
        return travelApi.updatePhoto(userId, countryName, photoId, newUrl)
    },

    removePhoto(countryName, photoId) {
        const userId = this.userId
        return travelApi.removePhoto(userId, countryName, photoId)
    }
}

module.exports = logic