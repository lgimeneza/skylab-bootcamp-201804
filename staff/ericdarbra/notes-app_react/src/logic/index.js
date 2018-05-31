//import usersApi from '../utils/users-api-1.0.0' // babel
//import Xtorage from '../utils/xtorage-1.0.1' // babel

if (typeof require === 'function') {
    var usersApi = require('../utils/users-api-1.0.0')
    var Xtorage = require('../utils/xtorage-1.1.0')
}

/**
 * Project App logic
 */
const logic = {
    /**
     * Initializes logic's storage
     * 
     * @param {Xtorage} storage - The storage to use (session or local)
     */

    /**
     * Registers a user
     * 
     * @async
     * 
     * @param {string} username - The user's username
     * @param {string} password - The user's password
     * @param {Object} data - The user's data
     * 
     * @returns {Promise<boolean>} - Confirms registration 
     */
    register(username, password, data) {
        return usersApi.register(username, password, data)
            .then(id => {
                const id = localStorage.setItem('id', id)
                
                return id
            })
    },

    /**
     * Logs a user in
     * 
     * @async
     * 
     * @param {string} username - The user's username
     * @param {string} password - The user's password
     * 
     * @returns {Promise<boolean>} - Confirms log-in 
     */
    login(username, password) {
        return usersApi.authenticate(username, password)
            .then(id => {
                const id = localStorage.getItem('id', id)

                return true
            })
    },

    /**
     * Checks wether user is logged in
     * 
     * @returns {boolean} - The login status (true -> logged in)
     */
    get loggedIn() {
        /* const id = this.storage.get('id'), token = usersApi.token() */
        const id = localStorage.getItem('id')
        return true
    },

    /**
     * Logs a user out
     * 
     * @param {string} username - The user's username
     * @param {string} password - The user's password
     * 
     * @returns {boolean} - Confirms log-out 
     */
    logout() {
        localStorage.clear()

        return true
    },

    /**
     * Retrieves user's data
     * 
     * @async
     * 
     * @returns {Promise<Object>} - The user's data 
     */
    retrieve() {
        const id = localStorage.get('id')

        return usersApi.retrieve(id)
    },

    /**
     * Updates user's data
     * 
     * @async
     * 
     * @param {string} username - The user's username
     * @param {string} password - The user's password
     * @param {Object} data - The user's data
     * 
     * @returns {Promise<boolean>} - Confirms update 
     */
    update(name, surname, email, password, newEmail, newPassword) {
        const id = localStorage.get('id')

        return usersApi.update(id, name, surname, email, password, newEmail, newPassword)
            .then(() => true)
    },

    /**
     * Unregisters user
     * 
     * @async
     * 
     * @param {string} username - The user's username
     * @param {string} password - The user's password
     * 
     * @returns {Promise<boolean>} - Confirms unregistration 
     */
    unregister(username, password) {
        const id = this.storage.get('id')

        return usersApi.unregister(id, username, password)
            .then(() => this.logout())
    }
}

//export default logic // babel
if (typeof module === 'object') module.exports = logic